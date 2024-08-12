import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouteSection, ARIA_LABEL } from './Route'

describe('RouteSection', () => {
  beforeEach(() => {
    render(<RouteSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
