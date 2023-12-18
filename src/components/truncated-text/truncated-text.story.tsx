import type { Meta, StoryObj } from '@storybook/react'

import { TruncatedText } from './'

const meta = {
  component: TruncatedText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'TruncatedText'
} satisfies Meta<typeof TruncatedText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    minStringLength: 16,
    text: 'This is a string that is longer than the minStringLength'
  }
}
