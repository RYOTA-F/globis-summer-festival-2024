import { Meta, StoryObj } from '@storybook/react'
import { ContentsSection } from './Contents'

const meta: Meta<typeof ContentsSection> = {
  component: ContentsSection,
}
export default meta

type Story = StoryObj<typeof ContentsSection>

export const Default: Story = {
  args: {},
}
