'use client'

import { useState, useCallback } from 'react'
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu'
import { AccordionMenu } from './AccordionMenu/AccordionMenu'
import { GOOGLE_MAP_CONTAINE } from '../../constants/google'

export const ARIA_LABEL = 'accordion-navigation' as const

export function AccordionNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Googleマップを強制的に非表示状態にする
   */
  const hiddenGoogleMapContainer = () => {
    const mapContainer = document.getElementById(GOOGLE_MAP_CONTAINE)
    if (mapContainer) {
      mapContainer.classList.toggle('pointer-events-none')
      mapContainer.classList.toggle('hidden')
    }
  }

  const onChangeIsOpen = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
    hiddenGoogleMapContainer()
  }, [])

  return (
    <div className="md:hidden" aria-label={ARIA_LABEL}>
      <HamburgerMenu isOpen={isOpen} onClick={onChangeIsOpen} />
      <AccordionMenu isOpen={isOpen} onClick={onChangeIsOpen} />
    </div>
  )
}
