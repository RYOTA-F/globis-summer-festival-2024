import { Meta, StoryObj } from '@storybook/react'
import { ScrollNext } from './ScrollNext'

const meta: Meta<typeof ScrollNext> = {
  component: ScrollNext,
}
export default meta

type Story = StoryObj<typeof ScrollNext>

export const Default: Story = {
  args: {},
}
