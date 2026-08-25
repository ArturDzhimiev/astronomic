import { describe, expect, it } from 'vitest'
import { fold, findMatches } from './text'

describe('fold', () => {
  it('приводит к нижнему регистру и убирает диакритику', () => {
    expect(fold('Jalapeño')).toBe('jalapeno')
    expect(fold('ЛИМОН')).toBe('лимон')
  })
})

describe('findMatches', () => {
  it('находит совпадение без учёта диакритики в индексах исходной строки', () => {
    const text = 'Salsa de jalapeño rostizado'
    const [match] = findMatches(text, 'jalapeno')

    expect(text.slice(match.start, match.end)).toBe('jalapeño')
  })

  it('находит все вхождения', () => {
    expect(findMatches('sal, azucar, sal', 'sal')).toEqual([
      { start: 0, end: 3 },
      { start: 13, end: 16 },
    ])
  })

  it('возвращает пусто на пустом запросе', () => {
    expect(findMatches('что угодно', '   ')).toEqual([])
  })
})
