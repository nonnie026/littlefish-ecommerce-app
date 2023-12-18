import { Product } from '../../types/product'

export interface CartState {
  items: Record<Product['id'], Product & { quantity: number }>
}
