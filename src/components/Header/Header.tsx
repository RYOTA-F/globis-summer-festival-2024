import { Icon } from '../elements/Icon/Icon'
import { SECTION_ID } from '../../constants/section'

export const ARIA_LABEL = 'header' as const
export const HOME_URL = '/#'

export function Header() {
  return (
    <header className="sticky top-0" aria-label={ARIA_LABEL}>
      <div className="flex justify-between items-center h-16 bg-w70 px-3 z-10000">
        <a href="/">
          <Icon src="/logo.png" width={260} height={50} />
        </a>
        <nav className="flex justify-end items-center w-full h-full text-blue-600 font-semibold tracking-widest">
          <a
            href={`${HOME_URL}${SECTION_ID.ABOUT}`}
            className="px-3 text-center h-full flex items-center justify-center"
          >
            ABOUT
          </a>
          <a
            href={`${HOME_URL}${SECTION_ID.INFORMATION}`}
            className="px-3 text-center h-full flex items-center justify-center"
          >
            INFORMATION
          </a>
          <a
            href={`${HOME_URL}${SECTION_ID.ARIA_MAP}`}
            className="px-3 text-center h-full flex items-center justify-center"
          >
            ARIAMAP
          </a>
          {/* TODO: コンテンツ */}
          {/* <a
            href={`${HOME_URL}${SECTION_ID.CONTENTS}`}
            className="px-3 text-center h-full flex items-center justify-center"
          >
            CONTENTS
          </a> */}
          <a
            href={`${HOME_URL}${SECTION_ID.ACCESS}`}
            className="px-3 text-center h-full flex items-center justify-center"
          >
            ACCESS
          </a>
        </nav>
      </div>
    </header>
  )
}
