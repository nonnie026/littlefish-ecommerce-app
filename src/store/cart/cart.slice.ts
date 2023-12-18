// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/product'
import { CartState } from './interface'

const initialState: CartState = {
  items: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload
      if (state.items[product.id]) {
        state.items[product.id].quantity += 1
      } else {
        state.items[product.id] = { ...product, quantity: 1 }
      }
    },
    removeFromCart(state, action: PayloadAction<Product['id']>) {
      delete state.items[action.payload]
    },
    incrementQuantity(state, action: PayloadAction<Product['id']>) {
      const product = state.items[action.payload]
      if (product) {
        product.quantity += 1
      }
    },
    decrementQuantity(state, action: PayloadAction<Product['id']>) {
      const product = state.items[action.payload]
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1
        } else {
          delete state.items[action.payload]
        }
      }
    },
    clearCart(state) {
      state.items = initialState.items
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
