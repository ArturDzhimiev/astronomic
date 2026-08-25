/** Domain model of the recipe book. */

export type Language = 'ru' | 'es'

export type RecipeKind = 'base' | 'dish'

/** The ingredient's role in a dish: a sub-recipe (SR) or raw material (MP). */
export type IngredientKind = 'sub-recipe' | 'raw'

export interface Quantity {
  /** The raw string from the recipe, e.g. "500 gr" or "to taste". */
  raw: string
  /** The numeric value when it could be parsed (needed for cost calculation). */
  amount: number | null
  unit: string | null
}

export interface Ingredient extends Quantity {
  /** null for base recipes — the source does not split them into SR/MP. */
  kind: IngredientKind | null
  name: string
  /**
   * The id of the sub-recipe card when the recipe book contains one. Links are
   * resolved while converting the data: the source lists sub-recipes as free
   * text and some are missing entirely — those stay null.
   */
  recipeId: string | null
}

/** A nested mini-recipe inside a card (e.g. pico de gallo served with a cream). */
export interface RecipeSection {
  title: string
  ingredients: Ingredient[]
  steps: string[]
}

export interface RecipeContent {
  title: string
  /** Yield: "10 pieces per service" and the like. */
  yield: string | null
  ingredients: Ingredient[]
  steps: string[]
  /** The recipe is not filled in in the source file. */
  isEmpty: boolean
  /** Ingredients only, without a method description. */
  ingredientsOnly: boolean
  extra: RecipeSection | null
}

export interface Recipe {
  id: string
  kind: RecipeKind
  translations: Record<Language, RecipeContent>
}

/** Recipe list filter. */
export type RecipeTab = 'all' | 'base' | 'dish'
