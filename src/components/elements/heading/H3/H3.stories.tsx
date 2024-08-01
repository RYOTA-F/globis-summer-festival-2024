import { Meta, StoryObj } from '@storybook/react'
import { H3 } from './H3'

const meta: Meta<typeof H3> = {
  component: H3,
}
export default meta

type Story = StoryObj<typeof H3>

export const Default: Story = {
  args: {
    children: 'H3',
  },
}
