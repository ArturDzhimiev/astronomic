import { useMemo, useState } from 'react'
import { getRecipes } from '../api/recipesRepository'
import { Legend } from '../components/Legend'
import { RecipeCard } from '../components/RecipeCard'
import { filterRecipes } from '../lib/search'
import { useRecipeFilters } from '../lib/useRecipeFilters'
import { useLanguage } from '../../../i18n/useLanguage'
import type { Recipe } from '../model/types'
import styles from './RecipesPage.module.css'

export function RecipesPage() {
  const { t } = useLanguage()
  const { filters } = useRecipeFilters()

  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set())

  // Changing the query or the tab collapses everything — the list starts over.
  const filtersKey = `${filters.tab}:${filters.query}`
  const [previousKey, setPreviousKey] = useState(filtersKey)
  if (previousKey !== filtersKey) {
    setPreviousKey(filtersKey)
    setOpenIds(new Set())
  }

  const visible = useMemo(() => filterRecipes(getRecipes(), filters), [filters])

  const base = visible.filter((recipe) => recipe.kind === 'base')
  const dishes = visible.filter((recipe) => recipe.kind === 'dish')
  const hasQuery = filters.query.trim().length > 0

  const toggle = (id: string, open: boolean) =>
    setOpenIds((current) => {
      const next = new Set(current)
      if (open) next.add(id)
      else next.delete(id)
      return next
    })

  if (visible.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>{t.noResults}</p>
        <p className={styles.emptyHint}>{t.noResultsHint}</p>
      </div>
    )
  }

  const renderSection = (title: string, recipes: Recipe[]) =>
    recipes.length > 0 && (
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>{title}</span>
          <span className={styles.sectionCount}>{recipes.length}</span>
        </h2>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            query={filters.query}
            open={openIds.has(recipe.id)}
            onToggle={(open) => toggle(recipe.id, open)}
            index={index}
          />
        ))}
      </section>
    )

  return (
    <>
      <div className={styles.meta}>
        <Legend />
        {hasQuery && <p className={styles.count}>{t.found(visible.length)}</p>}
      </div>
      {renderSection(t.sectionBase, base)}
      {renderSection(t.sectionDish, dishes)}
    </>
  )
}
