import { Meta, StoryObj } from '@storybook/react'
import { H4 } from './H4'

const meta: Meta<typeof H4> = {
  component: H4,
}
export default meta

type Story = StoryObj<typeof H4>

export const Default: Story = {
  args: {
    children: 'H4',
  },
}
