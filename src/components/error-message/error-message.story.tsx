import type { Meta, StoryObj } from '@storybook/react'

import { ErrorMessage } from './'

const meta = {
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
    visualViewport: {
      width: 1024,
      height: 768
    }
  },
  tags: ['autodocs'],
  title: 'ErrorMessage'
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: 'Something went wrong'
  }
}
