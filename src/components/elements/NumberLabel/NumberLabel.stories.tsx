import { Meta, StoryObj } from '@storybook/react'
import { NumberLabel } from './NumberLabel'

const meta: Meta<typeof NumberLabel> = {
  component: NumberLabel,
}
export default meta

type Story = StoryObj<typeof NumberLabel>

export const Default: Story = {
  args: {
    children: 'NumberLabel',
  },
}
