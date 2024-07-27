import { SITE } from '../../../constants/global'
import { TEXT } from '../../../constants/text'

export const ARIA_LABEL = 'main' as const

export function Main() {
  return (
    <section
      className="h-[calc(100vh-64px)] w-[100vw] flex items-center justify-center bg-main text-white font-serif select-none"
      aria-label={ARIA_LABEL}
    >
      <div>
        <h1 className="text-3xl font-bold">
          <p className="text-center">
            {SITE.GLOBIS}
            {SITE.SUMMER_FESTIVAL}
          </p>
          <p className="text-center">{SITE.YEAR_2024}</p>
        </h1>
        <h2 className="flex justify-center mt-3 text-xl">
          {TEXT.SPECIAL_PAGE}
        </h2>
      </div>
      <p className="flex justify-center mt-5 text-lg absolute bottom-40">
        {TEXT.COMMING_SOON}
      </p>
    </section>
  )
}
