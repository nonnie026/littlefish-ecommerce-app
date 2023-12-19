import type { Meta, StoryObj } from '@storybook/react'

import { ProductsList } from './'

const meta = {
  component: ProductsList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'ProductsList'
} satisfies Meta<typeof ProductsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    handleAddToCart: () => {
      console.log('add to cart clicked')
    },
    products: [
      {
        id: 1,
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 4,
          count: 10
        }
      }
    ]
  }
}
