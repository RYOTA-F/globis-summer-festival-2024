export const ARIA_LABEL = 'number-label' as const

export interface NumberLabelProps {
  children: React.ReactNode
  color?: string
  py?: string
  px?: string
}

export function NumberLabel({
  children,
  color = 'bg-blue-300',
  py = 'py-1',
  px = 'px-1',
}: NumberLabelProps) {
  return (
    <label
      className={`text-white text-sm select-none ${color} ${py} ${px} rounded-full`}
      aria-label={ARIA_LABEL}
    >
      {children}
    </label>
  )
}
