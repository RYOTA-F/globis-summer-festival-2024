import { SECTION_ID } from '../../constants/section'

export const SCROOL_NEXT = 'scroll-next' as const
export const ARIA_LABEL = 'scroll-next' as const

export function ScrollNext() {
  return (
    <a
      href={`#${SECTION_ID.ABOUT}`}
      id={SCROOL_NEXT}
      aria-label={ARIA_LABEL}
      className="sm:hidden"
    >
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center select-none cursor-pointer animate-bounce">
        <div className="text-white -translate-x-[10px]">Scroll</div>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </a>
  )
}
