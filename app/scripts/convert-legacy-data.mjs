/**
 * Конвертирует легаси-файл `../data.js` (глобальный объект DATA)
 * в нормализованный JSON: src/features/recipes/data/recipes.json
 *
 * Запуск: npm run data:convert
 *
 * Легаси-формат:
 *   base:   ing = [[название, "500 gr"], ...]
 *   dishes: ing = [[SR|MP, название, ед., кол-во], ...]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const LEGACY = resolve(here, '../../data.js')
const OUT = resolve(here, '../src/features/recipes/data/recipes.json')

const LANGS = ['es', 'ru']

/** SR / ЗГ — заготовка (полуфабрикат), MP / СМ — сырьё */
const INGREDIENT_KIND = {
  SR: 'sub-recipe',
  ЗГ: 'sub-recipe',
  MP: 'raw',
  СМ: 'raw',
}

function readLegacyData() {
  const source = readFileSync(LEGACY, 'utf8')
  // Легаси-файл — обычный скрипт, объявляющий `const DATA`.
  return new Function(`${source}\nreturn DATA`)()
}

/**
 * "500 gr" / "0.06" -> { amount: 500, unit: "gr" } — основа для будущего
 * расчёта себестоимости. Если распарсить не удалось, amount = null.
 */
function parseQuantity(raw, explicitUnit) {
  const text = String(raw ?? '').trim()
  const match = text.match(/^([\d.,]+)\s*(.*)$/)
  if (!match) return { raw: text, amount: null, unit: explicitUnit ?? null }

  const amount = Number(match[1].replace(',', '.'))
  const unit = (explicitUnit ?? match[2]).trim()
  return {
    raw: explicitUnit ? `${text} ${explicitUnit}`.trim() : text,
    amount: Number.isFinite(amount) ? amount : null,
    unit: unit || null,
  }
}

/**
 * Заготовки внутри блюд записаны свободным текстом, без id. Связываем их
 * с карточками по названию: сначала явные соответствия, затем точное
 * совпадение, затем совпадение по значимым словам.
 *
 * Часть заготовок в исходном файле просто отсутствует (чимичурри, бешамель,
 * сопе из синей кукурузы и др.) — такие остаются без ссылки.
 */
const ALIASES = {
  'бриошь порционная': 'pan-brioche',
  'бриошь, нарезанная ломтиками': 'pan-brioche',
  'pan de servicio': 'pan-brioche',
  'mantequilla de ajo y perejil': 'mantequilla-perejil',
  'juice de rabo': 'juice-rabo',
  'соус «бильбаина» острый': 'bilbaina',
  'porkbelly cocido': 'porkbelly',
  'pollo karaage': 'karaage',
  'домашний острый соус': 'valentina',
  'salsa picante casera': 'valentina',
  'соус «мача» с кленовым сиропом': 'macha-morita',
  'salsa macha de maple': 'macha-morita',
  'arroz rojo cremoso': 'arroz-meloso',
  'сливочный флан': 'flan-queso',
  'flan cremoso': 'flan-queso',
  'мягкий бисквит': 'bizcocho-vainilla',
  'bizcocho suave': 'bizcocho-vainilla',
  'betun de marshmellow': 'betun-malvavisco',
  'крем-суфле «маршмеллоу»': 'betun-malvavisco',
}

/** Служебные слова, которые не несут смысла при сопоставлении названий. */
const STOP_WORDS = new Set([
  'de',
  'del',
  'la',
  'el',
  'los',
  'las',
  'y',
  'con',
  'en',
  'a',
  'для',
  'из',
  'и',
  'с',
  'по',
])

function normalizeName(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function significantWords(value) {
  return normalizeName(value)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length >= 3 && !STOP_WORDS.has(word))
}

/** Все значимые слова одного названия входят в другое — считаем совпадением. */
function isSubset(a, b) {
  return a.length > 0 && a.every((word) => b.includes(word))
}

function createLinkResolver(legacyBase) {
  // Ключи алиасов прогоняем через ту же нормализацию, что и названия:
  // NFD раскладывает русское «й» на «и» + бревис, и составная запись иначе не совпадёт.
  const aliases = new Map(Object.entries(ALIASES).map(([name, id]) => [normalizeName(name), id]))
  const byName = new Map()
  const byWords = []

  for (const item of legacyBase) {
    for (const lang of LANGS) {
      const title = item[lang].title
      byName.set(normalizeName(title), item.id)
      byWords.push({ id: item.id, words: significantWords(title) })
    }
  }

  const cache = new Map()

  return function resolveLink(name) {
    const key = normalizeName(name)
    if (cache.has(key)) return cache.get(key)

    let id = aliases.get(key) ?? byName.get(key) ?? null

    if (!id) {
      const words = significantWords(name)
      const match = byWords.find(
        (candidate) => isSubset(words, candidate.words) || isSubset(candidate.words, words),
      )
      id = match ? match.id : null
    }

    if (id && !legacyBase.some((item) => item.id === id)) {
      throw new Error(`ALIASES ссылается на несуществующую заготовку: ${id}`)
    }

    cache.set(key, id)
    return id
  }
}

function toIngredient(row, resolveLink) {
  if (row.length === 4) {
    const [kind, name, unit, qty] = row
    const ingredientKind = INGREDIENT_KIND[kind] ?? 'raw'
    return {
      kind: ingredientKind,
      name,
      // ссылка на карточку заготовки, если она есть в рецептурнике
      recipeId: ingredientKind === 'sub-recipe' ? resolveLink(name) : null,
      ...parseQuantity(qty, unit),
    }
  }
  const [name, qty] = row
  return { kind: null, name, recipeId: null, ...parseQuantity(qty) }
}

function toContent(legacy, resolveLink) {
  return {
    title: legacy.title,
    yield: legacy.yield ?? null,
    ingredients: (legacy.ing ?? []).map((row) => toIngredient(row, resolveLink)),
    steps: legacy.proc ?? [],
    // рецептура в исходном файле не заполнена
    isEmpty: Boolean(legacy.empty),
    // указан только состав, без описания сборки
    ingredientsOnly: Boolean(legacy.note),
    extra: legacy.extra
      ? {
          title: legacy.extra.title,
          ingredients: (legacy.extra.ing ?? []).map((row) => toIngredient(row, resolveLink)),
          steps: legacy.extra.proc ?? [],
        }
      : null,
  }
}

function toRecipe(legacy, kind, resolveLink) {
  const translations = {}
  for (const lang of LANGS) translations[lang] = toContent(legacy[lang], resolveLink)
  return { id: legacy.id, kind, translations }
}

const DATA = readLegacyData()
const resolveLink = createLinkResolver(DATA.base)
const recipes = [
  ...DATA.base.map((item) => toRecipe(item, 'base', resolveLink)),
  ...DATA.dishes.map((item) => toRecipe(item, 'dish', resolveLink)),
]

const linked = recipes
  .flatMap((recipe) => LANGS.flatMap((lang) => recipe.translations[lang].ingredients))
  .filter((ingredient) => ingredient.kind === 'sub-recipe')
const resolved = linked.filter((ingredient) => ingredient.recipeId).length

const ids = new Set()
for (const recipe of recipes) {
  if (ids.has(recipe.id)) throw new Error(`Дубликат id рецепта: ${recipe.id}`)
  ids.add(recipe.id)
}

writeFileSync(OUT, `${JSON.stringify(recipes, null, 2)}\n`, 'utf8')
console.log(
  `Готово: ${recipes.length} рецептов ` +
    `(${recipes.filter((r) => r.kind === 'base').length} заготовок, ` +
    `${recipes.filter((r) => r.kind === 'dish').length} блюд) -> ${OUT}`,
)
console.log(
  `Ссылок на заготовки: ${resolved} из ${linked.length} упоминаний ` +
    `(остальные заготовки в исходном файле отсутствуют)`,
)
