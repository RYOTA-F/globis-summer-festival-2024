import { Meta, StoryObj } from '@storybook/react'
import { AreaMapSection } from './AreaMap'

const meta: Meta<typeof AreaMapSection> = {
  component: AreaMapSection,
}
export default meta

type Story = StoryObj<typeof AreaMapSection>

export const Default: Story = {
  args: {
    title: '会場マップ',
    subTitle: 'AriaMap',
    Children: 'test',
  },
}
