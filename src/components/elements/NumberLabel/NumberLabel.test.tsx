import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NumberLabel, ARIA_LABEL } from './NumberLabel'

describe('NumberLabel', () => {
  beforeEach(() => {
    render(<NumberLabel>NumberLabel</NumberLabel>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
