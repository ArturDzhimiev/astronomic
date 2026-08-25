import type { Recipe } from '../model/types'
import recipesJson from '../data/recipes.json'

/**
 * The single access point for recipes.
 *
 * The data is static for now. Once there is a backend, only this module
 * changes — components and hooks stay untouched.
 */
const recipes = recipesJson as unknown as Recipe[]

export function getRecipes(): Recipe[] {
  return recipes
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id)
}
