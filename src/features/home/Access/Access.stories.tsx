import { Meta, StoryObj } from '@storybook/react'
import { AccessSecion } from './Access'

const meta: Meta<typeof AccessSecion> = {
  component: AccessSecion,
}
export default meta

type Story = StoryObj<typeof AccessSecion>

export const Default: Story = {
  args: {},
}
