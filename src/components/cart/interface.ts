import { Product } from 'types/product'

export interface IProps {
  cartItems: Product[]
  total: number
  numberOfItems: number
  handleRemoveFromCart: (item: Product) => void
}
