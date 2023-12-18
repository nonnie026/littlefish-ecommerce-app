import type { Meta, StoryObj } from '@storybook/react'

import { BannerImage } from './'

const meta = {
  component: BannerImage,
  parameters: {
    layout: 'centered',
    visualViewport: {
      width: 1024,
      height: 768
    }
  },
  tags: ['autodocs'],
  title: 'BannerImage'
} satisfies Meta<typeof BannerImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
