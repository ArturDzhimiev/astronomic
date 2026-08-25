import { Link, useMatch } from 'react-router-dom'
import { SearchInput } from '../shared/ui/SearchInput'
import { SegmentedControl, type SegmentedOption } from '../shared/ui/SegmentedControl'
import { useRecipeFilters } from '../features/recipes/lib/useRecipeFilters'
import type { Language, RecipeTab } from '../features/recipes/model/types'
import { useLanguage } from '../i18n/useLanguage'
import styles from './AppHeader.module.css'

const LANGUAGES: SegmentedOption<Language>[] = [
  { value: 'es', label: 'ES' },
  { value: 'ru', label: 'RU' },
]

export function AppHeader() {
  const { language, setLanguage, t } = useLanguage()
  const { filters, setQuery, setTab } = useRecipeFilters()
  // Поиск и разделы нужны только на списке рецептов.
  const isList = useMatch('/') !== null

  const tabs: SegmentedOption<RecipeTab>[] = [
    { value: 'all', label: t.tabAll },
    { value: 'base', label: t.tabBase },
    { value: 'dish', label: t.tabDish },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Link className={styles.brand} to="/">
            <span className={styles.wordmark}>astronomic</span>
            <span className={styles.tagline}>{t.tagline}</span>
          </Link>

          <SegmentedControl
            options={LANGUAGES}
            value={language}
            onChange={setLanguage}
            label={t.languageLabel}
            variant="inline"
          />
        </div>

        {isList && (
          <>
            <SearchInput
              value={filters.query}
              onChange={setQuery}
              placeholder={t.searchPlaceholder}
              label={t.searchLabel}
            />
            <nav className={styles.tabs}>
              <SegmentedControl
                options={tabs}
                value={filters.tab}
                onChange={setTab}
                label={t.tabsLabel}
              />
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
