import { Meta, StoryObj } from '@storybook/react'
import { AccordionNavigation } from './AccordionNavigation'

const meta: Meta<typeof AccordionNavigation> = {
  component: AccordionNavigation,
}
export default meta

type Story = StoryObj<typeof AccordionNavigation>

export const Default: Story = {
  args: {},
}
