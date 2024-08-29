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
      <div className="flex items-end absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center select-none cursor-pointer z-50 animate-bounce">
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
        <div
          className="text-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            letterSpacing: '-0.2em',
          }}
        >
          {'Scroll'.split('').map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
