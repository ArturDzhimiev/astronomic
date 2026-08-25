/** Работа с текстом для поиска: свёртка регистра/диакритики и подсветка. */

const COMBINING_MARKS = /[\u0300-\u036f]/g

export interface FoldedText {
  /** Строка в нижнем регистре без диакритики: «Jalapeño» -> «jalapeno». */
  folded: string
  /** Для каждого символа folded — индекс исходного символа. */
  map: number[]
}

/**
 * Свёртка с сохранением соответствия индексов, чтобы подсветку можно было
 * применить к исходному тексту: поиск «jalapeno» находит «jalapeño».
 */
export function foldWithMap(text: string): FoldedText {
  let folded = ''
  const map: number[] = []

  for (let i = 0; i < text.length; i += 1) {
    const chunk = text[i].toLowerCase().normalize('NFD').replace(COMBINING_MARKS, '')
    for (const char of chunk) {
      folded += char
      map.push(i)
    }
  }

  return { folded, map }
}

export function fold(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(COMBINING_MARKS, '')
}

export interface MatchRange {
  start: number
  end: number
}

/** Все вхождения запроса в текст, в индексах ИСХОДНОЙ строки. */
export function findMatches(text: string, query: string): MatchRange[] {
  const needle = fold(query.trim())
  if (!needle) return []

  const { folded, map } = foldWithMap(text)
  const ranges: MatchRange[] = []

  let from = 0
  let index = folded.indexOf(needle, from)
  while (index !== -1) {
    const lastFoldedIndex = index + needle.length - 1
    ranges.push({ start: map[index], end: map[lastFoldedIndex] + 1 })
    from = index + needle.length
    index = folded.indexOf(needle, from)
  }

  return ranges
}
