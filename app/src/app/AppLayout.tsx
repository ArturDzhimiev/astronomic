import { Outlet } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { AppHeader } from './AppHeader'
import styles from './AppLayout.module.css'

export function AppLayout() {
  const { t } = useLanguage()

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p className={`${styles.footerInner} overline`}>{t.footer}</p>
      </footer>
    </>
  )
}
