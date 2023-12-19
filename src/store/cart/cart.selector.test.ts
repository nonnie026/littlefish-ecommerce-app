import * as SUT from './cart.selector'

const mockState = {
  cart: {
    items: {
      '1': {
        id: 1,
        title: 'Product 1',
        quantity: 2,
        price: 10.0,
        image: 'image-link-1',
        rating: { rate: 4.5, count: 10 },
        description: 'Product 1 description',
        category: 'category-1'
      },
      '2': {
        id: 2,
        title: 'Product 2',
        quantity: 1,
        price: 20.0,
        image: 'image-link-2',
        rating: { rate: 4.0, count: 20 },
        description: 'Product 2 description',
        category: 'category-2'
      }
    }
  }
}

describe('Cart Selectors', () => {
  it('should return the cart items object', () => {
    const selected = SUT.getCartItems(mockState)
    expect(selected).toEqual(mockState.cart.items)
  })

  it('should return an array of cart items', () => {
    const selected = SUT.getCartItemsArray(mockState)
    expect(selected).toEqual(Object.values(mockState.cart.items))
  })

  it('should return the total count of items in the cart', () => {
    const selected = SUT.getCartItemCount(mockState)
    const itemCount = Object.values(mockState.cart.items).reduce(
      (total, item) => total + item.quantity,
      0
    )
    expect(selected).toEqual(itemCount)
  })

  it('should return the total price of items in the cart', () => {
    const selected = SUT.getCartTotal(mockState)
    const total = Object.values(mockState.cart.items).reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
    expect(selected).toEqual(total)
  })
})
