import { Icon } from '../elements/Icon/Icon'
import { SECTION_ID } from '../../constants/section'

export const ARIA_LABEL = 'header' as const

export function Header() {
  return (
    <header className="sticky top-0" aria-label={ARIA_LABEL}>
      <div className="flex justify-between items-center h-16 bg-w70 px-6 z-10000">
        <Icon src="/logo.png" width={260} height={50} />
        <nav className="flex justify-end items-center w-full text-blue-600 font-semibold tracking-widest">
          <a
            href={`#${SECTION_ID.ABOUT}`}
            className="px-6 text-center h-full flex items-center justify-center"
          >
            ABOUT
          </a>
          <a
            href={`#${SECTION_ID.INFORMATION}`}
            className="px-6 text-center h-full flex items-center justify-center"
          >
            INFORMATION
          </a>
          <a
            href={`#${SECTION_ID.ARIA_MAP}`}
            className="px-6 text-center h-full flex items-center justify-center"
          >
            ARIAMAP
          </a>
          <a
            href={`#${SECTION_ID.CONTENTS}`}
            className="px-6 text-center h-full flex items-center justify-center"
          >
            CONTENTS
          </a>
          <a
            href={`#${SECTION_ID.ACCESS}`}
            className="px-6 text-center h-full flex items-center justify-center"
          >
            ACCESS
          </a>
        </nav>
      </div>
    </header>
  )
}
