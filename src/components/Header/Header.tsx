import { Icon } from '../elements/Icon/Icon'
import { AccordionNavigation } from '../AccordionNavigation/AccordionNavigation'
import { HEADER_NAVIGATION } from '../../constants/navigation'

export const ARIA_LABEL = 'header' as const
export const HOME_URL = '/#'

export function Header() {
  return (
    <header className="sticky top-0" aria-label={ARIA_LABEL}>
      <div className="flex justify-between items-center h-12 md:h-16 bg-w70 px-3 z-10000">
        <a href="/" className="flex items-center h-full">
          <Icon src="/logo.png" width={260} height={54} />
        </a>
        <nav className="hidden md:flex justify-end items-center w-full h-full text-blue-600 font-semibold tracking-widest ">
          {HEADER_NAVIGATION.map((nav) => (
            <a
              key={nav.NAME}
              href={nav.URL}
              className="px-3 text-center h-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
            >
              {nav.NAME}
            </a>
          ))}
        </nav>
        <AccordionNavigation />
      </div>
    </header>
  )
}
