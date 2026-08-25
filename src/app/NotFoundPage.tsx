import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className={styles.page}>
      <h2 className={`${styles.title} sentence-case`}>{t.notFoundTitle}</h2>
      <p className={styles.text}>{t.notFoundText}</p>
      <Link className={styles.link} to="/">
        ← {t.backToList}
      </Link>
    </div>
  )
}
