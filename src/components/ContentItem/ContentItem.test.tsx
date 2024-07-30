import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentItem, ARIA_LABEL } from './ContentItem'

describe('ContentItem', () => {
  beforeEach(() => {
    render(
      <ContentItem
        content={{
          name: '盆踊り',
          image: '/500.png',
          description:
            'これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。',
          type: 'main',
        }}
      />,
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
