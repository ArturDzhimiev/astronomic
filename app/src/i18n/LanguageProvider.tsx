import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Language } from '../features/recipes/model/types'
import { LanguageContext, type LanguageContextValue } from './LanguageContext'
import { messages } from './messages'

const STORAGE_KEY = 'astronomic.language'

// Кухня и поставщики работают на испанском — он и язык по умолчанию.
const DEFAULT_LANGUAGE: Language = 'es'

function isLanguage(value: unknown): value is Language {
  return value === 'ru' || value === 'es'
}

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) return stored
  } catch {
    // приватный режим Safari может запрещать localStorage — не критично
  }
  return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage)

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // см. выше
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: messages[language] }),
    [language, setLanguage],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
