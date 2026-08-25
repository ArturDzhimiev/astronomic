import { use } from 'react'
import { LanguageContext, type LanguageContextValue } from './LanguageContext'

export function useLanguage(): LanguageContextValue {
  const context = use(LanguageContext)
  if (!context) {
    throw new Error('useLanguage должен вызываться внутри <LanguageProvider>')
  }
  return context
}
