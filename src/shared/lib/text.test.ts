import { describe, expect, it } from 'vitest'
import { fold, findMatches } from './text'

describe('fold', () => {
  it('lowercases and strips diacritics', () => {
    expect(fold('Jalapeño')).toBe('jalapeno')
    expect(fold('ЛИМОН')).toBe('лимон')
  })
})

describe('findMatches', () => {
  it('matches ignoring diacritics, in indices of the source string', () => {
    const text = 'Salsa de jalapeño rostizado'
    const [match] = findMatches(text, 'jalapeno')

    expect(text.slice(match.start, match.end)).toBe('jalapeño')
  })

  it('finds every occurrence', () => {
    expect(findMatches('sal, azucar, sal', 'sal')).toEqual([
      { start: 0, end: 3 },
      { start: 13, end: 16 },
    ])
  })

  it('returns nothing for an empty query', () => {
    expect(findMatches('что угодно', '   ')).toEqual([])
  })
})
