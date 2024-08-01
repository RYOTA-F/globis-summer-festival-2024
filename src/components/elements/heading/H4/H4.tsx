export interface H4Props {
  children: React.ReactNode
  fontSize?: string
}

export const ARIA_LABEL = 'H4' as const

export function H4({ children, fontSize = 'text-2xl' }: H4Props) {
  return (
    <h4
      className={`text-blue-500 font-bold select-none leading-relaxed  ${fontSize}`}
      aria-label={ARIA_LABEL}
    >
      {children}
    </h4>
  )
}
