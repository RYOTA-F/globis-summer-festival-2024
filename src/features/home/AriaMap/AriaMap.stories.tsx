import { Meta, StoryObj } from '@storybook/react'
import { AriaMapSection } from './AriaMap'

const meta: Meta<typeof AriaMapSection> = {
  component: AriaMapSection,
}
export default meta

type Story = StoryObj<typeof AriaMapSection>

export const Default: Story = {
  args: {},
}
