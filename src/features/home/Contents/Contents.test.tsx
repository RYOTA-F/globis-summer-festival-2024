import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentsSection, ARIA_LABEL } from './Contents'

describe('ContentsSection', () => {
  beforeEach(() => {
    render(<ContentsSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
