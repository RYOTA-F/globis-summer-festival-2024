import { SITE } from '../../../constants/global'
import { TEXT } from '../../../constants/text'

export const ARIA_LABEL = 'main' as const

export function MainSection() {
  return (
    <section
      className="h-[calc(100vh-64px)] w-[100vw] flex flex-col mb-10"
      aria-label={ARIA_LABEL}
    >
      <img src="/summer_festival_2024.jpeg" className="w-full" />
      <div className="bg-sub h-[100px]" />
      <div className="bg-sub flex-grow relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-[200%] bg-white rounded-[50%]"></div>
      </div>
    </section>
  )
}
