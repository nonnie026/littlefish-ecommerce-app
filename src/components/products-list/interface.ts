import { Product } from '../../types/product'

export interface IProps {
  products: Product[]
  handleAddToCart: (clickedItem: Product) => void
}
