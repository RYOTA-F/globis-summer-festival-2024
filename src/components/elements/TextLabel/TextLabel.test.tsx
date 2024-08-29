import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextLabel, ARIA_LABEL } from './TextLabel'

describe('Label', () => {
  beforeEach(() => {
    render(<TextLabel>Label</TextLabel>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
