import { describe, expect, it } from 'vitest'
import { getRecipes } from '../api/recipesRepository'
import { filterRecipes, matchesQuery } from './search'

const recipes = getRecipes()

describe('данные рецептов', () => {
  it('загружаются и содержат оба языка', () => {
    expect(recipes.length).toBeGreaterThan(0)
    for (const recipe of recipes) {
      expect(recipe.translations.ru.title).toBeTruthy()
      expect(recipe.translations.es.title).toBeTruthy()
    }
  })

  it('не содержит дублей id', () => {
    expect(new Set(recipes.map((recipe) => recipe.id)).size).toBe(recipes.length)
  })
})

describe('ссылки на заготовки', () => {
  const ids = new Set(recipes.map((recipe) => recipe.id))
  const subRecipes = recipes
    .filter((recipe) => recipe.kind === 'dish')
    .flatMap((recipe) => [recipe.translations.ru, recipe.translations.es])
    .flatMap((content) => content.ingredients)
    .filter((ingredient) => ingredient.kind === 'sub-recipe')

  it('ведут на существующие заготовки', () => {
    for (const ingredient of subRecipes) {
      if (ingredient.recipeId) expect(ids).toContain(ingredient.recipeId)
    }
  })

  it('проставлены у большинства упоминаний', () => {
    const linked = subRecipes.filter((ingredient) => ingredient.recipeId)
    expect(linked.length / subRecipes.length).toBeGreaterThan(0.6)
  })

  it('связывают блюдо с нужной заготовкой', () => {
    const dish = recipes.find((recipe) => recipe.id === 'papa-pulpo')!
    const octopus = dish.translations.ru.ingredients.find((i) => i.name === 'отварной осьминог')

    expect(octopus?.recipeId).toBe('pulpo-cocido')
  })

  it('не выдумывают ссылку там, где заготовки нет в файле', () => {
    const dish = recipes.find((recipe) => recipe.id === 'canelon-rabo')!
    const bechamel = dish.translations.ru.ingredients.find((i) => i.name === 'соус бешамель')

    expect(bechamel?.recipeId).toBeNull()
  })
})

describe('matchesQuery', () => {
  const brioche = recipes.find((recipe) => recipe.id === 'pan-brioche')!

  it('ищет по русскому названию', () => {
    expect(matchesQuery(brioche, 'бриошь')).toBe(true)
  })

  it('ищет по испанскому названию, даже когда выбран русский', () => {
    expect(matchesQuery(brioche, 'brioche')).toBe(true)
  })

  it('ищет по ингредиенту', () => {
    expect(matchesQuery(brioche, 'дрожжи')).toBe(true)
  })

  it('пустой запрос пропускает всё', () => {
    expect(matchesQuery(brioche, '')).toBe(true)
  })

  it('не находит отсутствующее', () => {
    expect(matchesQuery(brioche, 'шампанское')).toBe(false)
  })
})

describe('filterRecipes', () => {
  it('фильтрует по разделу', () => {
    const base = filterRecipes(recipes, { query: '', tab: 'base' })
    expect(base.every((recipe) => recipe.kind === 'base')).toBe(true)
    expect(base.length).toBeLessThan(recipes.length)
  })

  it('совмещает раздел и поиск', () => {
    const result = filterRecipes(recipes, { query: 'бриошь', tab: 'dish' })
    expect(result.every((recipe) => recipe.kind === 'dish')).toBe(true)
  })
})
