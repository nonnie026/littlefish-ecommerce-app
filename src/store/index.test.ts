import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { addToCart } from './cart/cart.slice'
import * as SUT from './index'

describe('saveToLocalStorage Middleware', () => {
  it('should save cart items to localStorage', () => {
    const store = configureStore({
      reducer: {
        cart: cartReducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(SUT.saveToLocalStorage)
    })

    const mockProduct = {
      id: 1,
      title: 'Test Product',
      price: 9.99,
      quantity: 1,
      category: 'test',
      description: 'Test Product Description',
      image: 'test.jpg',
      rating: { rate: 1, count: 1 }
    }
    store.dispatch(addToCart(mockProduct))

    const itemsInLocalStorage = JSON.parse(localStorage.getItem('cart') || '{}')
    expect(itemsInLocalStorage['1']).toEqual(mockProduct)
  })
})
