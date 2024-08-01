import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection, ARIA_LABEL } from './About'

describe('AboutSection', () => {
  beforeEach(() => {
    render(<AboutSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
