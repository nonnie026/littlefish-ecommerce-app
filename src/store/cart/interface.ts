import { CartItem, Product } from '../../types/product'

export interface CartState {
  items: Record<Product['id'], CartItem>
}
