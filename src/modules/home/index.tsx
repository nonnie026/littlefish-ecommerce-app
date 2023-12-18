import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Cart, Header, ProductsList, TopBar } from '../../components'
import { fetchElectronics } from '../../services/electronics'
import { Product } from '../../types/product'

export const HomeContainer = () => {
  const {
    data: products = [],
    isLoading,
    error
  } = useQuery<Product[], Error>('electronics', fetchElectronics)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [cartItems, setCartItems] = useState<Product[]>([])

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
    setCartItems((prev) => [...prev, product])
  }

  const handleRemoveFromCart = (productId: number) => {
    console.log('product removed from cart: ', id)
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
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
      <Box width="100%" position="fixed" borderBottom={'1px solid #ccc'}>
        <TopBar />
        <Header onCartClick={handleCartClick} />
      </Box>
      <Cart
        anchorEl={anchorEl}
        id={id}
        handleClose={handleClose}
        handleRemoveFromCart={handleRemoveFromCart}
        cartItems={cartItems}
        numberOfItems={cartItems.length}
        total={cartItems.reduce((acc, item) => acc + item.price, 0)}
        open={open}
      />
      <Container sx={{ mt: 20 }} maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          All Products
        </Typography>
        <ProductsList products={products} handleAddToCart={handleAddToCart} />
      </Container>
    </Grid>
  )
}
