import { ACCORDION_NAVIGATION } from '../../../constants/navigation'

export const ARIA_LABEL = 'accordion-menu' as const

export interface AccordionMenuProps {
  isOpen: boolean
  onClick: () => void
}

export function AccordionMenu({ isOpen, onClick }: AccordionMenuProps) {
  return (
    <nav
      className={`fixed top-12 w-screen bg-blue-400 transition-all duration-500 overflow-y-auto h-[calc(100vh-48px)] flex items-center justify-center ${
        isOpen ? 'right-0' : '-right-[120%]'
      }`}
      aria-label={ARIA_LABEL}
    >
      <div className="w-full">
        <ul className="w-3/5 mx-auto" style={{ borderTop: '1px solid white' }}>
          {ACCORDION_NAVIGATION.map((nav) => (
            <li key={nav.URL} className="w-full text-2xl font-bold">
              <a
                href={nav.URL}
                className="flex justify-center items-center text-white leading-[3] transition-all duration-300 hover:bg-[#f7f7f7] hover:text-blue-400 hover:pl-4 border-b border-white w-full"
                onClick={onClick}
              >
                {nav.NAME}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
