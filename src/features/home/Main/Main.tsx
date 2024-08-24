export const ARIA_LABEL = 'main' as const

export function MainSection() {
  return (
    <section className="w-[100vw] flex flex-col" aria-label={ARIA_LABEL}>
      <img src="/home/main.png" className="w-full max-h-[calc(100vh-64px)]" />
    </section>
  )
}
