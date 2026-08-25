import { fold } from '../../../shared/lib/text'
import type { Recipe, RecipeTab } from '../model/types'

/**
 * Search runs over titles in both languages at once: in the kitchen a dish may
 * be named in Spanish while being looked up in the Russian UI, and vice versa.
 */
const searchIndex = new Map<string, string>()

function getSearchIndex(recipe: Recipe): string {
  const cached = searchIndex.get(recipe.id)
  if (cached !== undefined) return cached

  const text = fold(`${recipe.translations.ru.title} ${recipe.translations.es.title}`)
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
