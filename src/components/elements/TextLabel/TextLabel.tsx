export const ARIA_LABEL = 'text-label' as const

export interface TextLabelProps {
  children: React.ReactNode
  color?: string
  py?: string
  px?: string
}

export function TextLabel({
  children,
  color = 'bg-blue-400',
  py = 'py-1',
  px = 'px-1',
}: TextLabelProps) {
  return (
    <label
      className={`text-white text-sm select-none ${color} ${py} ${px} rounded-md`}
      aria-label={ARIA_LABEL}
    >
      {children}
    </label>
  )
}
