import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Cart, Header, ProductsList, TopBar } from '../../components'
import { fetchElectronics } from '../../services/electronics'
import {
  getCartItemCount,
  getCartItemsArray,
  getCartTotal
} from '../../store/cart/cart.selector'
import { addToCart, removeFromCart } from '../../store/cart/cart.slice'
import { Product } from '../../types/product'

export const HomeContainer = () => {
  const {
    data: products = [],
    isLoading,
    error
  } = useQuery<Product[], Error>('electronics', fetchElectronics)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const cartItems = useSelector(getCartItemsArray)
  const itemCount = useSelector(getCartItemCount)
  const total = useSelector(getCartTotal)

  const dispatch = useDispatch()

  const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'shopping-cart-popover' : undefined

  const handleAddToCart = (product: Product) => {
    console.log('product added to cart: ', product)
    dispatch(addToCart(product))
  }

  const handleRemoveFromCart = (productId: number) => {
    console.log('product removed from cart: ', id)
    dispatch(removeFromCart(productId))
  }

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    )
  if (error)
    return (
      <Typography variant="h6" color="error">
        An error occurred: {error.message}
      </Typography>
    )

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
      <Container sx={{ my: 20 }} maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          All Products
        </Typography>
        <ProductsList products={products} handleAddToCart={handleAddToCart} />
      </Container>
    </Grid>
  )
}
