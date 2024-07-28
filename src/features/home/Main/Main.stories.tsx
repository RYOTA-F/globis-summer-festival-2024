import { Meta, StoryObj } from '@storybook/react'
import { MainSection } from './Main'

const meta: Meta<typeof MainSection> = {
  component: MainSection,
}
export default meta

type Story = StoryObj<typeof MainSection>

export const Default: Story = {
  args: {},
}
