import { Meta, StoryObj } from '@storybook/react'
import { RouteSection } from './Route'

const meta: Meta<typeof RouteSection> = {
  component: RouteSection,
}
export default meta

type Story = StoryObj<typeof RouteSection>

export const Default: Story = {
  args: {},
}
