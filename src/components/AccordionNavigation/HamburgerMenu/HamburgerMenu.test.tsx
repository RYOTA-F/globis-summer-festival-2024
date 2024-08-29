import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HamburgerMenu, ARIA_LABEL } from './HamburgerMenu'

describe('HamburgerMenu', () => {
  beforeEach(() => {
    render(
      <HamburgerMenu isOpen={false} onClick={() => console.log('click')} />,
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
