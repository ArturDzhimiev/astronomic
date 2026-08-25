import { describe, expect, it } from 'vitest'
import { getRecipes } from '../api/recipesRepository'
import { filterRecipes, matchesQuery } from './search'

const recipes = getRecipes()

describe('recipe data', () => {
  it('loads and carries both languages', () => {
    expect(recipes.length).toBeGreaterThan(0)
    for (const recipe of recipes) {
      expect(recipe.translations.ru.title).toBeTruthy()
      expect(recipe.translations.es.title).toBeTruthy()
    }
  })

  it('has no duplicate ids', () => {
    expect(new Set(recipes.map((recipe) => recipe.id)).size).toBe(recipes.length)
  })
})

describe('sub-recipe links', () => {
  const ids = new Set(recipes.map((recipe) => recipe.id))
  const subRecipes = recipes
    .filter((recipe) => recipe.kind === 'dish')
    .flatMap((recipe) => [recipe.translations.ru, recipe.translations.es])
    .flatMap((content) => content.ingredients)
    .filter((ingredient) => ingredient.kind === 'sub-recipe')

  it('point at recipes that exist', () => {
    for (const ingredient of subRecipes) {
      if (ingredient.recipeId) expect(ids).toContain(ingredient.recipeId)
    }
  })

  it('are resolved for most mentions', () => {
    const linked = subRecipes.filter((ingredient) => ingredient.recipeId)
    expect(linked.length / subRecipes.length).toBeGreaterThan(0.6)
  })

  it('link a dish to the right sub-recipe', () => {
    const dish = recipes.find((recipe) => recipe.id === 'papa-pulpo')!
    const octopus = dish.translations.ru.ingredients.find((i) => i.name === 'отварной осьминог')

    expect(octopus?.recipeId).toBe('pulpo-cocido')
  })

  it('invent no link when the sub-recipe is missing from the source', () => {
    const dish = recipes.find((recipe) => recipe.id === 'canelon-rabo')!
    const bechamel = dish.translations.ru.ingredients.find((i) => i.name === 'соус бешамель')

    expect(bechamel?.recipeId).toBeNull()
  })
})

describe('matchesQuery', () => {
  const brioche = recipes.find((recipe) => recipe.id === 'pan-brioche')!

  it('searches by the Russian title', () => {
    expect(matchesQuery(brioche, 'бриошь')).toBe(true)
  })

  it('searches by the Spanish title even when Russian is selected', () => {
    expect(matchesQuery(brioche, 'brioche')).toBe(true)
  })

  it('does not search ingredients or steps — titles only', () => {
    expect(matchesQuery(brioche, 'дрожжи')).toBe(false)
    expect(matchesQuery(brioche, 'levadura')).toBe(false)
    expect(matchesQuery(brioche, 'batidora')).toBe(false)
  })

  it('lets everything through on an empty query', () => {
    expect(matchesQuery(brioche, '')).toBe(true)
  })

  it('finds nothing for a missing word', () => {
    expect(matchesQuery(brioche, 'шампанское')).toBe(false)
  })
})

describe('filterRecipes', () => {
  it('filters by section', () => {
    const base = filterRecipes(recipes, { query: '', tab: 'base' })
    expect(base.every((recipe) => recipe.kind === 'base')).toBe(true)
    expect(base.length).toBeLessThan(recipes.length)
  })

  it('combines section and search', () => {
    const result = filterRecipes(recipes, { query: 'бриошь', tab: 'dish' })
    expect(result.every((recipe) => recipe.kind === 'dish')).toBe(true)
  })
})
