import { Meta, StoryObj } from '@storybook/react'
import { VenueSection } from './Venue'

const meta: Meta<typeof VenueSection> = {
  component: VenueSection,
}
export default meta

type Story = StoryObj<typeof VenueSection>

export const Default: Story = {
  args: {},
}
