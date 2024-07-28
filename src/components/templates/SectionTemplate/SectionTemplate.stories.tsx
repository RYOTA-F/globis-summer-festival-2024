import { Meta, StoryObj } from '@storybook/react'
import { SectionTemplate } from './SectionTemplate'

const meta: Meta<typeof SectionTemplate> = {
  component: SectionTemplate,
}
export default meta

type Story = StoryObj<typeof SectionTemplate>

export const Default: Story = {
  args: {
    title: 'テンプレート',
    subTitle: 'SectionTemplate',
    children: 'SectionTemplate',
  },
}
