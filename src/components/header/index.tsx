// src/components/Header.tsx
import { ShoppingCart } from '@mui/icons-material'
import { Badge, Box, IconButton, Typography } from '@mui/material'
import logo from '../../assets/logo.svg'
import { IProps } from './interface'

export const Header = ({ onCartClick, itemsInCart }: IProps) => (
  <Box component="header" py={4} maxWidth="lg" mx="auto">
    <Box
      display="flex"
      px={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" gap={3}>
        <Box component="img" src={logo} />
        <Typography variant="h6">OurCommerce</Typography>
      </Box>
      <Badge badgeContent={itemsInCart} color="primary">
        <IconButton color="primary" aria-label="cart" onClick={onCartClick}>
          <ShoppingCart />
        </IconButton>
      </Badge>
    </Box>
  </Box>
)
