export const ARIA_LABEL = 'label' as const

export interface LabelProps {
  children: React.ReactNode
  color?: string
  py?: string
  px?: string
}

export function Label({
  children,
  color = 'bg-blue-300',
  py = 'py-1',
  px = 'px-1',
}: LabelProps) {
  return (
    <label
      className={`text-white text-sm select-none ${color} ${py} ${px} rounded-full`}
      aria-label={ARIA_LABEL}
    >
      {children}
    </label>
  )
}
