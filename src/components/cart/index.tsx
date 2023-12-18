import { CancelOutlined } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import { TruncatedText } from '../../components/truncated-text'
import { IProps } from './interface'

export const Cart = ({
  cartItems,
  numberOfItems,
  total,
  handleRemoveFromCart
}: IProps) => {
  return (
    <>
      <Typography variant="h6">My Cart</Typography>
      <Typography color="GrayText" variant="subtitle1">
        {`${numberOfItems} ${numberOfItems === 1 ? 'item' : 'items'} in cart`}
      </Typography>
      {cartItems?.map((item) => (
        <Grid
          key={item.id}
          display="flex"
          gap={2}
          justifyContent={'space-between'}
          alignItems={'center'}
          borderBottom={'1px solid #ccc'}
        >
          <Typography variant="body1">1 x</Typography>
          <Box component="img" src={item.image} width={50} height={50} />
          <TruncatedText text={item.title} minStringLength={30} />
          <CancelOutlined
            onClick={() => handleRemoveFromCart(item)}
            style={{ cursor: 'pointer' }}
          />
        </Grid>
      ))}
      <Typography variant="h6" color="primary">
        {`Subtotal: $${total}`}
      </Typography>
    </>
  )
}
