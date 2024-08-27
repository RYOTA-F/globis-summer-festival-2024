export interface H3Props {
  children: React.ReactNode
}

export const ARIA_LABEL = 'H3' as const

export function H3({ children }: H3Props) {
  return (
    <h3
      className="text-xl sm:text-2xl font-bold text-main select-none"
      aria-label={ARIA_LABEL}
    >
      {children}
    </h3>
  )
}
