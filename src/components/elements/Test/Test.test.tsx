import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Test, TEST } from './Test'

describe('Test', () => {
  beforeEach(() => {
    render(<Test text="test" />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(TEST)
    expect(element).not.toBeNull()
  })
})
