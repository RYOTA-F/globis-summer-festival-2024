import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}
export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    src: '/logo.png',
    width: 300,
    height: 60,
    alt: 'Placeholder',
  },
}
