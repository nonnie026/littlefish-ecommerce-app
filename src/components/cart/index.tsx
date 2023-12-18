import { CancelOutlined } from '@mui/icons-material'
import { Box, Grid, Popover, Typography } from '@mui/material'
import { TruncatedText } from '../../components/truncated-text'
import { IProps } from './interface'

export const Cart = ({
  cartItems,
  numberOfItems,
  total,
  id,
  anchorEl,
  handleClose,
  open,
  handleRemoveFromCart
}: IProps) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={'center'}
        alignItems={'center'}
        overflow="auto"
        gap={2}
        width={320}
        p={2}
      >
        <Box textAlign={'center'}>
          <Typography variant="h6">My Cart</Typography>
          <Typography color="GrayText" variant="subtitle1">
            {`${numberOfItems} ${
              numberOfItems === 1 ? 'item' : 'items'
            } in cart`}
          </Typography>
        </Box>
        {cartItems?.map((item) => (
          <Grid
            key={item.id}
            display="flex"
            gap={2}
            justifyContent={'space-between'}
            alignItems={'center'}
            py={1}
            borderBottom={'1px solid #ccc'}
          >
            <Typography variant="body1">1 x</Typography>
            <Box component="img" src={item.image} width={65} height={65} />
            <Box width={150}>
              <TruncatedText text={item.title} minStringLength={30} />
            </Box>
            <CancelOutlined
              fontSize="small"
              onClick={() => handleRemoveFromCart(item.id)}
              style={{ cursor: 'pointer' }}
            />
          </Grid>
        ))}
        <Typography variant="h6" color="primary">
          {`Subtotal: $${total}`}
        </Typography>
      </Box>
    </Popover>
  )
}