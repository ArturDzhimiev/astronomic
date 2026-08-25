import { Fragment, type ReactNode } from 'react'
import { findMatches } from '../lib/text'
import styles from './HighlightedText.module.css'

interface Props {
  text: string
  query?: string
}

/**
 * Highlights matches without dangerouslySetInnerHTML — recipe text is rendered
 * as ordinary React nodes.
 */
export function HighlightedText({ text, query = '' }: Props) {
  const ranges = query ? findMatches(text, query) : []
  if (ranges.length === 0) return <>{text}</>

  const chunks: ReactNode[] = []
  let cursor = 0

  ranges.forEach((range, index) => {
    if (range.start > cursor) chunks.push(text.slice(cursor, range.start))
    chunks.push(
      <mark key={`${range.start}-${index}`} className={styles.mark}>
        {text.slice(range.start, range.end)}
      </mark>,
    )
    cursor = range.end
  })
  if (cursor < text.length) chunks.push(text.slice(cursor))

  return (
    <>
      {chunks.map((chunk, index) => (
        <Fragment key={index}>{chunk}</Fragment>
      ))}
    </>
  )
}
