import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { H4, ARIA_LABEL } from './H4'

describe('', () => {
  beforeEach(() => {
    render(<H4>H4</H4>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
