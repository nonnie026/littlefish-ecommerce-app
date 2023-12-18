import {
  Box,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

import {
  BannerImage,
  Cart,
  ErrorMessage,
  Header,
  Loader,
  ProductsList,
  TopBar
} from '../../components'
import { fetchElectronics } from '../../services/electronics'
import {
  getCartItemCount,
  getCartItemsArray,
  getCartTotal
} from '../../store/cart/cart.selector'
import { addToCart, removeFromCart } from '../../store/cart/cart.slice'
import { Product } from '../../types/product'

export const HomeContainer = () => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const cartItems = useSelector(getCartItemsArray)
  const itemCount = useSelector(getCartItemCount)
  const total = useSelector(getCartTotal)

  const open = Boolean(anchorEl)
  const id = open ? 'shopping-cart-popover' : undefined

  const {
    data: products = [],
    isLoading,
    error
  } = useQuery<Product[], Error>('electronics', fetchElectronics)

  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product))
  }

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId))
  }

  if (isLoading) return <Loader />
  if (error) return <ErrorMessage message={error.message} />

  return (
    <Grid container>
      <Box
        width="100%"
        bgcolor="white"
        position="fixed"
        borderBottom="1px solid #ccc"
        zIndex={1}
      >
        <TopBar />
        <Header itemsInCart={itemCount} onCartClick={handleCartClick} />
      </Box>
      <Cart
        anchorEl={anchorEl}
        id={id}
        handleClose={handleClose}
        handleRemoveFromCart={handleRemoveFromCart}
        cartItems={cartItems}
        numberOfItems={itemCount}
        total={total}
        open={open}
      />
      <Container sx={{ my: mdDown ? 11 : 17 }} maxWidth="lg">
        <BannerImage />
        <Typography my={5} variant="h4" gutterBottom>
          All Products
        </Typography>
        <ProductsList products={products} handleAddToCart={handleAddToCart} />
      </Container>
    </Grid>
  )
}
