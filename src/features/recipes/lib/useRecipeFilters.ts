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
 * Фильтры живут в URL: ссылку с результатом поиска можно скинуть коллеге,
 * а кнопка «назад» в браузере работает ожидаемо.
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
