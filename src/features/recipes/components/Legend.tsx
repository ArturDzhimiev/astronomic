import { Tag } from '../../../shared/ui/Tag'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './Legend.module.css'

export function Legend() {
  const { t } = useLanguage()

  return (
    <p className={styles.legend}>
      <span className={styles.item}>
        <Tag kind="sub-recipe">{t.tagSubRecipe}</Tag> {t.legendSubRecipe}
      </span>
      <span className={styles.item}>
        <Tag kind="raw">{t.tagRaw}</Tag> {t.legendRaw}
      </span>
    </p>
  )
}
