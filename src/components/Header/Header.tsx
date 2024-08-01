import { Icon } from '../elements/Icon/Icon'

export const ARIA_LABEL = 'header' as const

export function Header() {
  return (
    <header aria-label={ARIA_LABEL}>
      <div className="flex items-center h-16 bg-white px-6">
        {/* <div className="flex items-center h-16 bg-sub px-6"> */}
        <Icon src="/logo.png" width={260} height={50} />
      </div>
    </header>
  )
}
