import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getRecipeById } from '../api/recipesRepository'
import { Legend } from '../components/Legend'
import { RecipeBody } from '../components/RecipeBody'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './RecipePage.module.css'

/** Standalone recipe page, so a direct link can be shared. */
export function RecipePage() {
  const { recipeId } = useParams()
  const { language, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  // When we got here from inside the app (e.g. from a dish to its sub-recipe),
  // go back to the previous screen; on a direct link, go to the list.
  const cameFromApp = location.key !== 'default'
  const back = cameFromApp ? (
    <button type="button" className={styles.back} onClick={() => navigate(-1)}>
      ← {t.back}
    </button>
  ) : (
    <Link className={styles.back} to="/">
      ← {t.backToList}
    </Link>
  )

  const recipe = recipeId ? getRecipeById(recipeId) : undefined

  if (!recipe) {
    return (
      <div className={styles.missing}>
        <p>{t.recipeNotFound}</p>
        {back}
      </div>
    )
  }

  const content = recipe.translations[language]

  return (
    <article className={styles.page}>
      {back}
      <h2 className={`${styles.title} sentence-case`}>{content.title}</h2>
      {content.yield && <p className={styles.yield}>{content.yield}</p>}
      <div className={styles.divider} />
      {recipe.kind === 'dish' && <Legend />}
      <RecipeBody content={content} />
    </article>
  )
}
