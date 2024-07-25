import { SITE } from '../../constants/global'

export const ARIA_LABEL = 'footer' as const

export function Footer() {
  return (
    <footer
      className="flex justify-center items-center bg-footer text-white py-4"
      aria-label={ARIA_LABEL}
    >
      <p>&copy; {SITE.COPY}</p>
    </footer>
  )
}
