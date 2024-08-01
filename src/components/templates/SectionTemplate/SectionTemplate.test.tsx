import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTemplate, ARIA_LABEL } from './SectionTemplate'

describe('', () => {
  beforeEach(() => {
    render(
      <SectionTemplate title="テンプレート" subTitle="SectionTemplate">
        SectionTemplate
      </SectionTemplate>,
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL)
    expect(element).not.toBeNull()
  })
})
