import { Meta, StoryObj } from '@storybook/react'
import { InformationSection } from './Information'

const meta: Meta<typeof InformationSection> = {
  component: InformationSection,
}
export default meta

type Story = StoryObj<typeof InformationSection>

export const Default: Story = {
  args: {},
}
