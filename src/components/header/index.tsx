// src/components/Header.tsx
import { ShoppingCart } from '@mui/icons-material'
import { Badge, Box, IconButton, Typography } from '@mui/material'
import logo from '../../assets/logo.svg'
import { IProps } from './interface'

export const Header = ({ onCartClick, itemsInCart }: IProps) => (
  <Box component="header" py={3} maxWidth="lg" mx="auto">
    <Box
      display="flex"
      px={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" gap={2}>
        <Box component="img" width={33} height={33} src={logo} />
        <Typography variant="h6">OurCommerce</Typography>
      </Box>
      <IconButton
        aria-label="cart"
        onClick={onCartClick}
        sx={{ color: 'black' }}
      >
        <Badge badgeContent={itemsInCart} showZero color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Box>
  </Box>
)
