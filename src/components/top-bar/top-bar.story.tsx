import type { Meta, StoryObj } from '@storybook/react'

import { TopBar } from './'

const meta = {
  component: TopBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'TopBar'
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
