import { ShoppingCart } from '@mui/icons-material'
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography
} from '@mui/material'
import { useQuery } from 'react-query'
import { ProductsList, TopBar } from '../../components'
import { fetchElectronics } from '../../services/electronics'
import { Product } from '../../types/product'

export const ElectronicsListContainer = () => {
  const {
    data: products = [],
    isLoading,
    error
  } = useQuery<Product[], Error>('electronics', fetchElectronics)

  const handleAddToCart = (product: Product) => {
    console.log('product added to cart: ', product.title)
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
        <Box component={'header'} py={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="lg"
            mx="auto"
          >
            <Box display="flex" gap={2}>
              <Box component="img" src={'../../logo.svg'} />
              <Typography variant="h6">OurCommerce</Typography>
            </Box>
            <IconButton aria-label="cart">
              <ShoppingCart />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: 20 }} maxWidth="lg">
        <ProductsList products={products} handleAddToCart={handleAddToCart} />
      </Container>
    </Grid>
  )
}
