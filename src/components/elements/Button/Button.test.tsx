import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, ARIA_LABEL } from './Button'

describe('Button', () => {
  beforeEach(() => {
    render(<Button href="/">ボタン</Button>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
