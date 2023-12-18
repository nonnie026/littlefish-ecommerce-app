// src/components/Header.tsx
import { ShoppingCart } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { IProps } from './interface'

export const Header = ({ onCartClick }: IProps) => (
  <Box
    component="header"
    py={2}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    maxWidth="lg"
    mx="auto"
  >
    <Box display="flex" gap={2}>
      <Box component="img" src={require('../../assets/logo.svg')} />
      <Typography variant="h6">OurCommerce</Typography>
    </Box>
    <IconButton color="primary" aria-label="cart" onClick={onCartClick}>
      <ShoppingCart />
    </IconButton>
  </Box>
)
