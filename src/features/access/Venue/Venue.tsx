export const ARIA_LABEL = 'venue' as const

export function VenueSection() {
  return (
    <section
      className="w-[100vw] flex flex-col bg-slate-200 mb-10"
      aria-label={ARIA_LABEL}
    >
      <img
        src="/route/soramido.png"
        className="max-h-[calc(100vh-64px)] object-contain"
      />
    </section>
  )
}
