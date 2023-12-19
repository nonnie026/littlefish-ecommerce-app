import type { Meta, StoryObj } from '@storybook/react'

import { Cart } from './'

const meta = {
  component: Cart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Cart'
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    anchorEl: null,
    cartItems: [
      {
        id: 1,
        title: 'Apple iPhone 12 Pro Max',
        price: 1099,
        image: 'https://picsum.photos/id/180/2400/1600',
        quantity: 1,
        description: 'A large phone with one of the best screens',
        category: 'electronics',
        rating: {
          rate: 4.6,
          count: 120
        }
      }
    ],
    total: 1099,
    id: 'shopping-cart-popover',
    open: true,
    handleClose: () => {
      console.log('handleClose')
    },
    handleRemoveFromCart: (id) => {
      console.log('Remove item from cart:: ', id)
    },
    numberOfItems: 1
  }
}
