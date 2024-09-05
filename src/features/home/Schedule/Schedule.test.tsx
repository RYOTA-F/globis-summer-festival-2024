import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScheduleSection, ARIA_LABEL } from './Schedule'

describe('ScheduleSection', () => {
  beforeEach(() => {
    render(<ScheduleSection />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
