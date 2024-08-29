import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { H3, ARIA_LABEL } from './H3'

describe('', () => {
  beforeEach(() => {
    render(<H3>H3</H3>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
