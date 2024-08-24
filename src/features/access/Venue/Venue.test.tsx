import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VenueSection, ARIA_LABEL } from './Venue'

describe('VenueSection', () => {
  beforeEach(() => {
    render(<VenueSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
