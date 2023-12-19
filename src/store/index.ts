import { Middleware, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cart.slice'

export const saveToLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()
  localStorage.setItem('cart', JSON.stringify(state.cart.items))
  return result
}

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
