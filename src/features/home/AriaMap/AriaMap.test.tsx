import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AriaMapSection, ARIA_LABEL } from './AriaMap'

describe('AriaMapSection', () => {
  beforeEach(() => {
    render(<AriaMapSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
