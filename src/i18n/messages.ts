import type { Language } from '../features/recipes/model/types'

/** Every user-facing UI string. The keys are identical across languages. */
const ru = {
  brand: 'astronomic',
  tagline: 'alta cocina / alma de bar',
  subtitle: 'Рецептурник',
  searchPlaceholder: 'Поиск по названию...',
  searchLabel: 'Поиск по названиям рецептов',
  languageLabel: 'Язык интерфейса',

  tabAll: 'Все',
  tabBase: 'Заготовки',
  tabDish: 'Блюда',
  tabsLabel: 'Раздел',

  sectionBase: 'Часть I. Базовые заготовки',
  sectionDish: 'Часть II. Готовые блюда',

  tagSubRecipe: 'ЗГ',
  tagRaw: 'СМ',
  legendSubRecipe: 'заготовка (полуфабрикат)',
  legendRaw: 'сырьё (закупаемый продукт)',

  columnIngredient: 'Ингредиент',
  columnUnit: 'Ед.',
  columnQuantity: 'Кол-во',
  columnType: 'Тип',

  method: 'Приготовление',
  emptyRecipe: 'В исходном файле рецептура не заполнена.',
  ingredientsOnly:
    'Для этого блюда в исходном файле указан только состав ингредиентов, без отдельного описания сборки.',

  noResults: 'Ничего не найдено',
  noResultsHint: 'Попробуйте другое слово или переключите язык.',
  found: (count: number) => `Найдено: ${count}`,

  openRecipe: 'Открыть отдельной страницей',
  back: 'Назад',
  backToList: 'К списку рецептов',
  notFoundTitle: 'Страница не найдена',
  notFoundText: 'Такого рецепта нет — возможно, ссылка устарела.',
  recipeNotFound: 'Рецепт не найден',

  footer: 'Внутренний рецептурник',
}

type Messages = typeof ru

const es: Messages = {
  brand: 'astronomic',
  tagline: 'alta cocina / alma de bar',
  subtitle: 'Recetario',
  searchPlaceholder: 'Buscar por nombre...',
  searchLabel: 'Buscar recetas por nombre',
  languageLabel: 'Idioma de la interfaz',

  tabAll: 'Todo',
  tabBase: 'Base',
  tabDish: 'Platillos',
  tabsLabel: 'Sección',

  sectionBase: 'Parte I. Preparaciones base',
  sectionDish: 'Parte II. Recetas de platillos',

  tagSubRecipe: 'SR',
  tagRaw: 'MP',
  legendSubRecipe: 'sub-receta (preparación base)',
  legendRaw: 'materia prima',

  columnIngredient: 'Ingrediente',
  columnUnit: 'Ud.',
  columnQuantity: 'Cantidad',
  columnType: 'Tipo',

  method: 'Procedimiento',
  emptyRecipe: 'La receta no está completa en el archivo original.',
  ingredientsOnly:
    'Para este platillo el archivo original solo indica los ingredientes, sin descripción de montaje.',

  noResults: 'No se encontraron resultados',
  noResultsHint: 'Prueba con otra palabra o cambia el idioma.',
  found: (count: number) => `Resultados: ${count}`,

  openRecipe: 'Abrir en página propia',
  back: 'Volver',
  backToList: 'Volver a las recetas',
  notFoundTitle: 'Página no encontrada',
  notFoundText: 'Esta receta no existe — puede que el enlace esté desactualizado.',
  recipeNotFound: 'Receta no encontrada',

  footer: 'Recetario interno',
}

export const messages: Record<Language, Messages> = { ru, es }

export type { Messages }
