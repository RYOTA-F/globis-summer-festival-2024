import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccordionNavigation, ARIA_LABEL } from './AccordionNavigation'

describe('AccordionNavigation', () => {
  beforeEach(() => {
    render(<AccordionNavigation />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
