/** Text helpers for search: case/diacritics folding and highlighting. */

const COMBINING_MARKS = /[\u0300-\u036f]/g

export interface FoldedText {
  /** Lowercased string without diacritics: "Jalapeño" -> "jalapeno". */
  folded: string
  /** For every character of `folded`, the index of the source character. */
  map: number[]
}

/**
 * Folds the text while keeping an index map, so the highlight can be applied to
 * the original text: searching for "jalapeno" matches "jalapeño".
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

/** Every match of the query, in indices of the SOURCE string. */
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
