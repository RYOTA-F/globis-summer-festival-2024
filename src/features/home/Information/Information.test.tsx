import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InformationSection, ARIA_LABEL } from './Information'

describe('InformationSection', () => {
  beforeEach(() => {
    render(<InformationSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
