export const ARIA_LABEL = 'main' as const

export function MainSection() {
  return (
    <section className="flex flex-col" aria-label={ARIA_LABEL}>
      <img
        src="/home/main.png"
        className="object-contain md:object-cover lg:object-cover lg:w-full lg:h-full"
      />
    </section>
  )
}
