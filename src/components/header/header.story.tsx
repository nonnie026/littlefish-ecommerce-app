import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  component: Header,
  parameters: {
    layout: 'centered',
    visualViewport: {
      width: 1024,
      height: 768
    }
  },
  tags: ['autodocs'],
  title: 'Header'
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    itemsInCart: 1,
    onCartClick: () => {
      console.log('cart icon clicked')
    }
  }
}
