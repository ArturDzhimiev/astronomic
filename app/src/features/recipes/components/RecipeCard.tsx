import { useState } from 'react'
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
  /** При активном поиске рецепты раскрыты сразу. */
  defaultOpen?: boolean
  /** Порядковый номер в разделе. */
  index: number
}

export function RecipeCard({ recipe, query, defaultOpen = false, index }: Props) {
  const { language, t } = useLanguage()
  const [open, setOpen] = useState(defaultOpen)
  const [previousDefault, setPreviousDefault] = useState(defaultOpen)

  // Сброс раскрытия при смене режима поиска — без эффекта, прямо в рендере.
  if (previousDefault !== defaultOpen) {
    setPreviousDefault(defaultOpen)
    setOpen(defaultOpen)
  }

  const content = recipe.translations[language]

  return (
    <details
      className={styles.item}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className={styles.summary}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.heading}>
          <span className={styles.title}>
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
