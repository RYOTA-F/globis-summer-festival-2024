import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollNext, ARIA_LABEL } from './ScrollNext'

describe('ScrollNext', () => {
  beforeEach(() => {
    render(<ScrollNext />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
