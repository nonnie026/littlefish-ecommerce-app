import { CancelOutlined } from '@mui/icons-material'
import { Box, Grid, IconButton, Popover, Typography } from '@mui/material'
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
        <Box mb={2} textAlign={'center'}>
          <Typography data-testid="my-cart" variant="h6">
            My Cart
          </Typography>
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
            alignItems={'flex-start'}
            py={1}
            borderBottom="1px solid #ccc"
          >
            <Typography
              alignSelf={'center'}
              variant="body1"
              minWidth={'fit-content'}
              data-testid="quantity"
            >{`${item.quantity} x`}</Typography>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              data-testid="image"
              width={65}
              height={65}
              sx={{ objectFit: 'contain' }}
            />
            <Box width={150}>
              <TruncatedText text={item.title} minStringLength={40} />
            </Box>
            <IconButton
              color="secondary"
              size="small"
              data-testid="remove-item"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              <CancelOutlined />
            </IconButton>
          </Grid>
        ))}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body14B" color="grey.500">
            Subtotal:
          </Typography>
          <Typography data-testid="total" variant="body18B" color="black">
            {` $${total.toFixed(2)}`}
          </Typography>
        </Box>
      </Box>
    </Popover>
  )
}
