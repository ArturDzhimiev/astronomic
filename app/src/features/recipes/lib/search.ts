import { fold } from '../../../shared/lib/text'
import type { Recipe, RecipeContent, RecipeTab } from '../model/types'

/**
 * Поиск идёт сразу по обоим языкам: на кухне название могут спросить
 * по-испански, а искать в русском интерфейсе (и наоборот).
 */
function contentToText(content: RecipeContent): string {
  const parts: string[] = [content.title, content.yield ?? '']

  for (const ingredient of content.ingredients) {
    parts.push(ingredient.name, ingredient.raw)
  }
  parts.push(...content.steps)

  if (content.extra) {
    parts.push(content.extra.title)
    for (const ingredient of content.extra.ingredients) {
      parts.push(ingredient.name, ingredient.raw)
    }
    parts.push(...content.extra.steps)
  }

  return parts.join(' ')
}

/** Индекс строится один раз на рецепт и переиспользуется между рендерами. */
const searchIndex = new Map<string, string>()

function getSearchIndex(recipe: Recipe): string {
  const cached = searchIndex.get(recipe.id)
  if (cached !== undefined) return cached

  const text = fold(
    [contentToText(recipe.translations.ru), contentToText(recipe.translations.es)].join(' '),
  )
  searchIndex.set(recipe.id, text)
  return text
}

export function matchesQuery(recipe: Recipe, query: string): boolean {
  const needle = fold(query.trim())
  if (!needle) return true
  return getSearchIndex(recipe).includes(needle)
}

export interface RecipeFilters {
  query: string
  tab: RecipeTab
}

export function filterRecipes(recipes: Recipe[], filters: RecipeFilters): Recipe[] {
  return recipes.filter((recipe) => {
    if (filters.tab !== 'all' && recipe.kind !== filters.tab) return false
    return matchesQuery(recipe, filters.query)
  })
}
