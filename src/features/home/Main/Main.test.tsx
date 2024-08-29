import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainSection, ARIA_LABEL } from './Main'

describe('MainSection', () => {
  beforeEach(() => {
    render(<MainSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
