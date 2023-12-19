import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ErrorMessage } from '../index'

describe('Cart', () => {
  const message = 'Error message'

  const view = () => render(<ErrorMessage message={message} />)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders snapshot', () => {
    const { asFragment } = view()

    expect(asFragment()).toMatchSnapshot()
  })

  it('should have the Error message text', () => {
    view()

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
