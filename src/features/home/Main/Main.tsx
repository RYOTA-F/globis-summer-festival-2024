import { SITE } from '../../../constants/global'

export const ARIA_LABEL = 'main' as const

export function Main() {
  return (
    <section
      className="h-full w-full flex items-center justify-center bg-main text-white font-serif"
      aria-label={ARIA_LABEL}
    >
      <div>
        <h1 className="text-2xl font-bold">{SITE.TITLE} 特設ページ</h1>
        <h2 className="flex justify-center mt-5 text-xl ">Comming soon...</h2>
      </div>
    </section>
  )
}
