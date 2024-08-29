import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label, ARIA_LABEL } from './NumberLabel'

describe('Label', () => {
  beforeEach(() => {
    render(<Label>Label</Label>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
