import { Product } from 'types/product'

export interface IProps {
  cartItems: Product[]
  total: number
  numberOfItems: number
  handleRemoveFromCart: (productId: number) => void
  open: boolean
  handleClose: () => void
  id: string | undefined
  anchorEl: null | HTMLElement
}
