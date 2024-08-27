export const ARIA_LABEL = 'main' as const

export function MainSection() {
  return (
    <section className="flex flex-col" aria-label={ARIA_LABEL}>
      <img
        src="/home/main.png"
        className="hidden sm:block object-contain md:object-cover lg:w-full lg:h-full"
      />
      <div className="h-[calc(100vh-50px)] block sm:hidden">
        <img
          src="/home/main_sp.jpg"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  )
}
