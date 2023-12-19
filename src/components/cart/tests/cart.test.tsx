import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Cart } from '../index'

describe('Cart', () => {
  const mockHandleRemove = jest.fn()
  const cartItems = [
    {
      id: 1,
      title: 'Item 1',
      quantity: 2,
      price: 9.99,
      image: 'link-to-image',
      category: 'category',
      description: 'description',
      rating: {
        rate: 4.5,
        count: 10
      }
    }
  ]

  const mockAnchorEl = document.createElement('div')

  const view = () =>
    render(
      <Cart
        cartItems={cartItems}
        numberOfItems={3}
        total={29.97}
        id="cart-popover"
        anchorEl={mockAnchorEl}
        handleClose={() => {
          console.log('close')
        }}
        open={true}
        handleRemoveFromCart={mockHandleRemove}
      />
    )

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders snapshot', () => {
    const { asFragment } = view()

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with items', () => {
    view()
    cartItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(`${item.quantity} x`)).toBeInTheDocument()
    })
  })

  it('renders call mockHandleRemove once', () => {
    view()
    fireEvent.click(screen.getByTestId('remove-item'))
    expect(mockHandleRemove).toHaveBeenCalledTimes(1)
  })
})
