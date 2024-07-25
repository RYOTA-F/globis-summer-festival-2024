import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer, ARIA_LABEL } from './Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
