import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { H2, ARIA_LABEL } from './H2'

describe('', () => {
  beforeEach(() => {
    render(<H2>H2</H2>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
