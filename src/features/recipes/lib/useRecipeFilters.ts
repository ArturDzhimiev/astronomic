import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { RecipeTab } from '../model/types'
import type { RecipeFilters } from './search'

const QUERY_PARAM = 'q'
const TAB_PARAM = 'tab'

function parseTab(value: string | null): RecipeTab {
  return value === 'base' || value === 'dish' ? value : 'all'
}

/**
 * Filters live in the URL: a link to a search result can be shared with a
 * colleague, and the browser's back button behaves as expected.
 */
export function useRecipeFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = useMemo<RecipeFilters>(
    () => ({
      query: searchParams.get(QUERY_PARAM) ?? '',
      tab: parseTab(searchParams.get(TAB_PARAM)),
    }),
    [searchParams],
  )

  const update = useCallback(
    (patch: Partial<RecipeFilters>) => {
      setSearchParams(
        (previous) => {
          const next = new URLSearchParams(previous)

          if (patch.query !== undefined) {
            if (patch.query) next.set(QUERY_PARAM, patch.query)
            else next.delete(QUERY_PARAM)
          }
          if (patch.tab !== undefined) {
            if (patch.tab !== 'all') next.set(TAB_PARAM, patch.tab)
            else next.delete(TAB_PARAM)
          }

          return next
        },
        { replace: true },
      )
    },
    [setSearchParams],
  )

  const setQuery = useCallback((query: string) => update({ query }), [update])
  const setTab = useCallback((tab: RecipeTab) => update({ tab }), [update])

  return { filters, setQuery, setTab }
}
