'use client'

import { useState, useCallback } from 'react'
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu'
import { AccordionMenu } from './AccordionMenu/AccordionMenu'
import { GOOGLE_MAP_CONTAINE } from '../../constants/google'
import { SCROOL_NEXT } from '../ScrollNext/ScrollNext'

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

  /**
   * スクロールアイコンを強制的に非表示にする
   */
  const hiddenScrollNext = () => {
    const scroll = document.getElementById(SCROOL_NEXT)
    if (scroll) {
      scroll.classList.toggle('hidden')
    }
  }

  const onChangeIsOpen = useCallback(() => {
    hiddenGoogleMapContainer()
    hiddenScrollNext()
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  return (
    <div className="md:hidden z-[100]" aria-label={ARIA_LABEL}>
      <HamburgerMenu isOpen={isOpen} onClick={onChangeIsOpen} />
      <AccordionMenu isOpen={isOpen} onClick={onChangeIsOpen} />
    </div>
  )
}
