import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getRecipeById } from '../api/recipesRepository'
import { Legend } from '../components/Legend'
import { RecipeBody } from '../components/RecipeBody'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './RecipePage.module.css'

/** Отдельная страница рецепта — чтобы можно было прислать прямую ссылку. */
export function RecipePage() {
  const { recipeId } = useParams()
  const { language, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  // Если пришли переходом внутри приложения (например, из блюда в заготовку),
  // возвращаем на предыдущий экран; по прямой ссылке — на список.
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
    <article>
      {back}
      <h2 className={styles.title}>{content.title}</h2>
      {content.yield && <p className={styles.yield}>{content.yield}</p>}
      <div className={styles.divider} />
      {recipe.kind === 'dish' && <Legend />}
      <RecipeBody content={content} />
    </article>
  )
}
