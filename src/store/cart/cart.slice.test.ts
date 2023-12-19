import { Product } from '../../types/product'
import cartReducer, {
  addToCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from './cart.slice'

describe('cartSlice', () => {
  // Mock products for testing
  const product1: Product = {
    id: 1,
    title: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'image-link-1',
    rating: { rate: 4.5, count: 10 },
    category: 'category-1'
  }
  const product2: Product = {
    id: 2,
    title: 'Product 2',
    price: 20,
    description: 'Product 2 description',
    image: 'image-link-2',
    rating: { rate: 4.0, count: 20 },
    category: 'category-2'
  }

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      items: {}
    })
  })

  it('should handle addToCart', () => {
    const initialState = { items: {} }
    const expectedState = { items: { '1': { ...product1, quantity: 1 } } }
    expect(cartReducer(initialState, addToCart(product1))).toEqual(
      expectedState
    )
  })

  it('should handle removeFromCart', () => {
    const initialState = { items: { '1': { ...product1, quantity: 1 } } }
    const expectedState = { items: {} }
    expect(cartReducer(initialState, removeFromCart(1))).toEqual(expectedState)
  })

  it('should handle incrementQuantity', () => {
    const initialState = { items: { '1': { ...product1, quantity: 1 } } }
    const expectedState = { items: { '1': { ...product1, quantity: 2 } } }
    expect(cartReducer(initialState, incrementQuantity(1))).toEqual(
      expectedState
    )
  })

  it('should handle decrementQuantity', () => {
    const initialState = { items: { '1': { ...product1, quantity: 2 } } }
    const expectedState = { items: { '1': { ...product1, quantity: 1 } } }
    expect(cartReducer(initialState, decrementQuantity(1))).toEqual(
      expectedState
    )
  })

  it('should handle clearCart', () => {
    const initialState = {
      items: {
        '1': { ...product1, quantity: 1 },
        '2': { ...product2, quantity: 2 }
      }
    }
    const expectedState = { items: {} }
    expect(cartReducer(initialState, clearCart())).toEqual(expectedState)
  })
})
