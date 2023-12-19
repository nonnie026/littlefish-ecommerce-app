import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './'

const meta = {
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Loader'
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
