import type { Recipe } from '../model/types'
import recipesJson from '../data/recipes.json'

/**
 * Единственная точка доступа к рецептам.
 *
 * Сейчас данные статические (собраны из legacy `data.js` скриптом
 * `npm run data:convert`). Когда появится бэкенд, здесь меняется только
 * реализация — компоненты и хуки трогать не придётся.
 */
const recipes = recipesJson as unknown as Recipe[]

export function getRecipes(): Recipe[] {
  return recipes
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id)
}
