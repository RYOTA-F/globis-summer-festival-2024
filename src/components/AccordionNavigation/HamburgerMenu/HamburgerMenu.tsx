export interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
}

export const ARIA_LABEL = 'hamburger-menu' as const

export function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-0 bg-transparent z-[9999]"
      aria-label={ARIA_LABEL}
    >
      <div className="relative w-[50px] h-[50px]">
        <span
          className={`inline-block absolute left-[14px] h-[2px] bg-main w-[45%] transition-all duration-500 ${
            isOpen ? 'top-[24px] left-[16px] -rotate-45 w-[40%]' : 'top-[17px]'
          }`}
        />
        <span
          className={`inline-block absolute left-[14px] h-[2px] bg-main w-[45%] transition-all duration-500 top-[24px] ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`inline-block absolute left-[14px] h-[2px] bg-main w-[45%] transition-all duration-500 ${
            isOpen ? 'top-[24px] left-[16px] rotate-45 w-[40%]' : 'top-[31px]'
          }`}
        />
      </div>
    </button>
  )
}
