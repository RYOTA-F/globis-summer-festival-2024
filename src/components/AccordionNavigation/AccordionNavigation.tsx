'use client'

import { useState } from 'react'
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu'
import { AccordionMenu } from './AccordionMenu/AccordionMenu'

export const ARIA_LABEL = 'accordion-navigation' as const

export function AccordionNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const onChangeIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden" aria-label={ARIA_LABEL}>
      <HamburgerMenu isOpen={isOpen} onClick={onChangeIsOpen} />
      <AccordionMenu isOpen={isOpen} onClick={onChangeIsOpen} />
    </div>
  )
}
