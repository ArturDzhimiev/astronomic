import { Link } from 'react-router-dom'
import { HighlightedText } from '../../../shared/ui/HighlightedText'
import { ChevronIcon } from '../../../shared/ui/icons'
import { useLanguage } from '../../../i18n/useLanguage'
import type { Recipe } from '../model/types'
import { RecipeBody } from './RecipeBody'
import styles from './RecipeCard.module.css'

interface Props {
  recipe: Recipe
  query?: string
  /** The list owns the expanded state and collapses everything on search. */
  open: boolean
  onToggle: (open: boolean) => void
  /** Position within the section. */
  index: number
}

export function RecipeCard({ recipe, query, open, onToggle, index }: Props) {
  const { language, t } = useLanguage()

  const content = recipe.translations[language]

  return (
    <details
      className={styles.item}
      open={open}
      onToggle={(event) => onToggle(event.currentTarget.open)}
    >
      <summary className={styles.summary}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.heading}>
          <span className={`${styles.title} sentence-case`}>
            <HighlightedText text={content.title} query={query} />
          </span>
          {content.yield && <span className={styles.yield}>{content.yield}</span>}
        </span>
        <ChevronIcon className={styles.chevron} />
      </summary>

      <div className={styles.body}>
        <RecipeBody content={content} query={query} />
        <Link className={styles.permalink} to={`/recipes/${recipe.id}`}>
          {t.openRecipe}
        </Link>
      </div>
    </details>
  )
}
