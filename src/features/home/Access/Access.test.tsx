import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccessSecion, ARIA_LABEL } from './Access'

describe('AccessSecion', () => {
  beforeEach(() => {
    render(<AccessSecion />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
