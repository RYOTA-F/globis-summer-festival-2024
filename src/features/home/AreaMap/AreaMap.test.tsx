import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AreaMapSection, ARIA_LABEL } from './AreaMap'

describe('AreaMapSection', () => {
  beforeEach(() => {
    render(<AreaMapSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
