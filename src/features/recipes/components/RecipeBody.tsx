import { HighlightedText } from '../../../shared/ui/HighlightedText'
import { useLanguage } from '../../../i18n/useLanguage'
import type { RecipeContent } from '../model/types'
import { IngredientTable } from './IngredientTable'
import styles from './RecipeBody.module.css'

interface Props {
  content: RecipeContent
  query?: string
}

/** Тело рецепта: состав, приготовление и вложенная мини-рецептура. */
export function RecipeBody({ content, query }: Props) {
  const { t } = useLanguage()

  if (content.isEmpty) {
    return <p className={styles.note}>{t.emptyRecipe}</p>
  }

  return (
    <>
      <IngredientTable ingredients={content.ingredients} query={query} />

      {content.steps.length > 0 && (
        <>
          <h4 className={styles.subtitle}>{t.method}</h4>
          <ol className={styles.steps}>
            {content.steps.map((step, index) => (
              <li key={index}>
                <HighlightedText text={step} query={query} />
              </li>
            ))}
          </ol>
        </>
      )}

      {content.ingredientsOnly && <p className={styles.note}>{t.ingredientsOnly}</p>}

      {content.extra && (
        <section className={styles.extra}>
          <h4 className={styles.subtitle}>
            <HighlightedText text={content.extra.title} query={query} />
          </h4>
          <IngredientTable ingredients={content.extra.ingredients} query={query} />
          <ol className={styles.steps}>
            {content.extra.steps.map((step, index) => (
              <li key={index}>
                <HighlightedText text={step} query={query} />
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  )
}
