import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { AppHeader } from './AppHeader'
import styles from './AppLayout.module.css'

export function AppLayout() {
  const { t } = useLanguage()

  return (
    <>
      {/* A new navigation starts at the top; going back restores the previous position */}
      <ScrollRestoration />
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
