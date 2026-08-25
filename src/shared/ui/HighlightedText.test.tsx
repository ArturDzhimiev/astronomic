import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HighlightedText } from './HighlightedText'

describe('HighlightedText', () => {
  it('renders the text as is when there is no query', () => {
    render(<HighlightedText text="Соус беарнез" />)
    expect(screen.getByText('Соус беарнез')).toBeInTheDocument()
  })

  it('wraps the match in <mark>, keeping the original spelling', () => {
    const { container } = render(<HighlightedText text="Jalapeño frito" query="jalapeno" />)

    const marks = container.querySelectorAll('mark')
    expect(marks).toHaveLength(1)
    expect(marks[0]).toHaveTextContent('Jalapeño')
    expect(container).toHaveTextContent('Jalapeño frito')
  })
})
