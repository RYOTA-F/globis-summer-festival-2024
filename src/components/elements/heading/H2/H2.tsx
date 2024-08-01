export interface H2Props {
  children: React.ReactNode
}

export const ARIA_LABEL = 'H2' as const

export function H2({ children }: H2Props) {
  return (
    <h2
      className="text-5xl font-bold text-t leading-relaxed tracking-wide  select-none"
      aria-label={ARIA_LABEL}
    >
      {children}
    </h2>
  )
}
