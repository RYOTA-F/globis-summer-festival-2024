import { Icon } from '../elements/Icon/Icon'
import { SECTION_ID } from '../../constants/section'
import { NAVIGATION } from '../../constants/navigation'

export const ARIA_LABEL = 'header' as const
export const HOME_URL = '/#'

export function Header() {
  return (
    <header className="sticky top-0" aria-label={ARIA_LABEL}>
      <div className="flex justify-between items-center h-16 bg-w70 px-3 z-10000">
        <a href="/">
          <Icon src="/logo.png" width={260} height={50} />
        </a>
        <nav className="flex justify-end items-center w-full h-full text-blue-600 font-semibold tracking-widest ">
          {NAVIGATION.map((nav) => (
            <a
              href={nav.URL}
              className="px-3 text-center h-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
            >
              {nav.NAME}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
