import { Meta, StoryObj } from '@storybook/react'
import { AccordionMenu } from './AccordionMenu'

const meta: Meta<typeof AccordionMenu> = {
  component: AccordionMenu,
}
export default meta

type Story = StoryObj<typeof AccordionMenu>

export const Default: Story = {
  args: {},
}
