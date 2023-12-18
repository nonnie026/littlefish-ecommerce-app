import { Box, Button, Typography } from '@mui/material'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartProps {
  items: CartItem[]
}

const Cart = ({ items }: CartProps) => {
  return (
    <Box>
      <Typography variant="h5">Cart</Typography>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{ display: 'flex', alignItems: 'center', my: 2 }}
        >
          <Typography>{item.name}</Typography>
          <Typography sx={{ ml: 'auto' }}>{`$${item.price.toFixed(
            2
          )}`}</Typography>
          <Typography>{`Quantity: ${item.quantity}`}</Typography>
        </Box>
      ))}
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </Box>
  )
}

export default Cart
