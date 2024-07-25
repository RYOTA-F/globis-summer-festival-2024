import { SITE } from '../../constants/global'

export const ARIA_LABEL = 'footer' as const

export function Footer() {
  return (
    <footer
      className="flex justify-center items-center bg-footer text-white py-4 font-serif"
      aria-label={ARIA_LABEL}
    >
      <p className="text-xs">&copy; {SITE.COPY}</p>
    </footer>
  )
}
