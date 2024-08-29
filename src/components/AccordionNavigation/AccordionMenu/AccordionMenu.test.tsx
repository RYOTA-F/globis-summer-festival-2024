import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccordionMenu, ARIA_LABEL } from './AccordionMenu'

describe('AccordionMenu', () => {
  beforeEach(() => {
    render(
      <AccordionMenu isOpen={false} onClick={() => console.log('click')} />,
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
