import { Meta, StoryObj } from '@storybook/react'
import { ContentItem } from './ContentItem'

const meta: Meta<typeof ContentItem> = {
  component: ContentItem,
}
export default meta

type Story = StoryObj<typeof ContentItem>

export const Default: Story = {
  args: {
    content: {
      name: '盆踊り',
      image: '/500.png',
      description:
        'これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。',
      type: 'main',
    },
  },
}
