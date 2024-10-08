import { Meta, StoryObj } from '@storybook/react'
import { H2 } from './H2'

const meta: Meta<typeof H2> = {
  component: H2,
}
export default meta

type Story = StoryObj<typeof H2>

export const Default: Story = {
  args: {
    children: 'H2',
  },
}
