import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../index'

describe('Header', () => {
  const mockHandleCartClick = jest.fn()
  const view = () =>
    render(<Header itemsInCart={3} onCartClick={mockHandleCartClick} />)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with no items', () => {
    const { asFragment } = view()

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the items in cart', () => {
    view()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('should call mockHandleCartClick when button clicked', () => {
    view()
    fireEvent.click(screen.getByTestId('cart-button'))
    expect(mockHandleCartClick).toHaveBeenCalledTimes(1)
  })
})
