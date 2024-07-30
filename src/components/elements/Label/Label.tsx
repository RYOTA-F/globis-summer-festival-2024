export const ARIA_LABEL = 'label' as const

export interface LabelProps {
  children: React.ReactNode
}

export function Label({ children }: LabelProps) {
  return (
    <label
      className="text-white text-sm select-none bg-blue-300 py-1 px-3 rounded-full"
      aria-label={ARIA_LABEL}
    >
      {children}
    </label>
  )
}
