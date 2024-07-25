import { Icon } from '../elements/Icon/Icon'

export const ARIA_LABEL = 'header' as const

export function Header() {
  return (
    <header aria-label={ARIA_LABEL}>
      <div className="flex items-center h-16 bg-[#f0f0f0]">
        <Icon src="/logo.png" width={300} height={60} />
      </div>
    </header>
  )
}
