import { Meta, StoryObj } from '@storybook/react'
import { ScheduleSection } from './Schedule'

const meta: Meta<typeof ScheduleSection> = {
  component: ScheduleSection,
}
export default meta

type Story = StoryObj<typeof ScheduleSection>

export const Default: Story = {
  args: {},
}
