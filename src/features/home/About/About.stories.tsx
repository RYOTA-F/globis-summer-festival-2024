import { Meta, StoryObj } from '@storybook/react'
import { AboutSection } from './About'

const meta: Meta<typeof AboutSection> = {
  component: AboutSection,
}
export default meta

type Story = StoryObj<typeof AboutSection>

export const Default: Story = {
  args: {},
}
