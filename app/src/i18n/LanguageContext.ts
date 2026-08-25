import { createContext } from 'react'
import type { Language } from '../features/recipes/model/types'
import type { Messages } from './messages'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  /** Словарь строк для текущего языка. */
  t: Messages
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
