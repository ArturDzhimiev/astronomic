/** Доменная модель рецептурника. */

export type Language = 'ru' | 'es'

export type RecipeKind = 'base' | 'dish'

/** Роль ингредиента в блюде: заготовка (ЗГ/SR) или сырьё (СМ/MP). */
export type IngredientKind = 'sub-recipe' | 'raw'

export interface Quantity {
  /** Исходная строка из рецептуры, например «500 gr» или «по вкусу». */
  raw: string
  /** Числовое значение, если его удалось распознать (нужно для себестоимости). */
  amount: number | null
  unit: string | null
}

export interface Ingredient extends Quantity {
  /** null для базовых заготовок — там разделение на ЗГ/СМ не задано. */
  kind: IngredientKind | null
  name: string
  /**
   * id карточки заготовки, если она есть в рецептурнике. Связи вычисляются
   * при конвертации данных: в исходном файле заготовки указаны свободным
   * текстом, а часть из них вообще отсутствует — тогда здесь null.
   */
  recipeId: string | null
}

/** Вложенная мини-рецептура внутри карточки (например, пико-де-гальо к крему). */
export interface RecipeSection {
  title: string
  ingredients: Ingredient[]
  steps: string[]
}

export interface RecipeContent {
  title: string
  /** Выход: «10 шт. на подачу» и т.п. */
  yield: string | null
  ingredients: Ingredient[]
  steps: string[]
  /** Рецептура не заполнена в исходном файле. */
  isEmpty: boolean
  /** Есть только состав, без описания сборки. */
  ingredientsOnly: boolean
  extra: RecipeSection | null
}

export interface Recipe {
  id: string
  kind: RecipeKind
  translations: Record<Language, RecipeContent>
}

/** Фильтр списка рецептов. */
export type RecipeTab = 'all' | 'base' | 'dish'
