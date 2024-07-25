import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon, ARIA_LABEL } from './Icon'

describe('Icon', () => {
  beforeEach(() => {
    render(<Icon src="/public/logo.png" />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
