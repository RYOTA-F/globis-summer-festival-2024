export const ARIA_LABEL = 'button' as const

export interface ButtonProps {
  children: React.ReactNode
  href?: string
  color?: string
}

export function Button({ children, href, color = 'bg-blue-500' }: ButtonProps) {
  return (
    <button
      className={`${color} text-white rounded-full`}
      aria-label={ARIA_LABEL}
    >
      <a
        href={href}
        className="inline-block px-10 py-3 w-full h-full text-center"
      >
        {children}
      </a>
    </button>
  )
}
