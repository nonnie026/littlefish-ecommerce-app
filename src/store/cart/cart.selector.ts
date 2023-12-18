// src/store/cartSelectors.ts
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const getCartItems = (state: RootState) => state.cart.items

export const getCartItemsArray = createSelector([getCartItems], (items) =>
  Object.values(items)
)

export const getCartItemCount = createSelector([getCartItemsArray], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
)

export const getCartTotal = createSelector([getCartItemsArray], (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0)
)
