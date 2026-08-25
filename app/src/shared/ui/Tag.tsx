import type { IngredientKind } from '../../features/recipes/model/types'
import styles from './Tag.module.css'

interface Props {
  kind: IngredientKind
  children: string
}

export function Tag({ kind, children }: Props) {
  const modifier = kind === 'sub-recipe' ? styles.subRecipe : styles.raw
  return <span className={`${styles.tag} ${modifier}`}>{children}</span>
}
