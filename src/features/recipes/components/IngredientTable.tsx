import { Link } from 'react-router-dom'
import { HighlightedText } from '../../../shared/ui/HighlightedText'
import { Tag } from '../../../shared/ui/Tag'
import { formatQuantity } from '../../../shared/lib/quantity'
import { useLanguage } from '../../../i18n/useLanguage'
import type { Ingredient } from '../model/types'
import styles from './IngredientTable.module.css'

interface Props {
  ingredients: Ingredient[]
  query?: string
}

export function IngredientTable({ ingredients, query }: Props) {
  const { t } = useLanguage()

  if (ingredients.length === 0) return null

  // Колонки ЗГ/СМ и «ед.» есть только у блюд — у заготовок их в исходнике нет.
  const withKind = ingredients.some((ingredient) => ingredient.kind !== null)

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {withKind && (
            <th scope="col" className={styles.kind}>
              <span className="visually-hidden">{t.columnType}</span>
            </th>
          )}
          <th scope="col">{t.columnIngredient}</th>
          {withKind && <th scope="col">{t.columnUnit}</th>}
          <th scope="col" className={styles.numeric}>
            {t.columnQuantity}
          </th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, index) => (
          <tr key={`${ingredient.name}-${index}`}>
            {withKind && (
              <td className={styles.kind}>
                {ingredient.kind && (
                  <Tag kind={ingredient.kind}>
                    {ingredient.kind === 'sub-recipe' ? t.tagSubRecipe : t.tagRaw}
                  </Tag>
                )}
              </td>
            )}
            <td>
              {ingredient.recipeId ? (
                <Link className={styles.link} to={`/recipes/${ingredient.recipeId}`}>
                  <HighlightedText text={ingredient.name} query={query} />
                </Link>
              ) : (
                <HighlightedText text={ingredient.name} query={query} />
              )}
            </td>
            {withKind && <td className={styles.unit}>{ingredient.unit}</td>}
            <td className={styles.numeric}>
              {withKind ? (ingredient.amount ?? ingredient.raw) : formatQuantity(ingredient)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
