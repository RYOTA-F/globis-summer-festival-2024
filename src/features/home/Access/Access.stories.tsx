import { Meta, StoryObj } from '@storybook/react'
import { AccessSection } from './Access'

const meta: Meta<typeof AccessSection> = {
  component: AccessSection,
}
export default meta

type Story = StoryObj<typeof AccessSection>

export const Default: Story = {
  args: {},
}
