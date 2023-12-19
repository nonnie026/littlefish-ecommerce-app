import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'

import { TruncatedText } from '../index'

describe('TruncatedText', () => {
  const text = 'This is a test text for truncation'
  const minStringLength = 10

  afterEach(cleanup)

  const view = () =>
    render(<TruncatedText minStringLength={minStringLength} text={text} />)

  it('matches snapshot', () => {
    const { asFragment } = view()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the truncated text correctly', () => {
    view()
    const expectedTruncatedText = `${text.substring(0, minStringLength)}...`

    expect(screen.getByTestId('truncated-text')).toHaveTextContent(
      expectedTruncatedText
    )
  })

  it('displays the full text when shorter than minStringLength', () => {
    const shortText = 'Short'
    render(<TruncatedText minStringLength={minStringLength} text={shortText} />)

    expect(screen.getByTestId('truncated-text')).toHaveTextContent(shortText)
  })
})
