import { NumberLabel } from '../../../components/elements/NumberLabel/NumberLabel'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { ROUTES } from '../../../constants/route'
import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'route' as const

export function RouteSection() {
  return (
    <SectionTemplate
      title="経路"
      subTitle="ROUTE"
      id={SECTION_ID.ROUTE}
      height="auto"
      ariaLabel={ARIA_LABEL}
    >
      <div className="sm:grid sm:grid-cols-2 sm:gap-10 -mt-10">
        {ROUTES.map((route) => (
          <div
            key={route.NUMBER}
            className="col-span-1 flex flex-col items-center [&>label]:block [&>label]:w-[30px] [&>label]:h-[30px] [&>label]:leading-[22px] mt-5 md:mt-0"
          >
            <NumberLabel color="bg-blue-500">{route.NUMBER}</NumberLabel>
            <img src={route.SRC} className="mt-3 rounded-2xl" />
            <p className="mt-5 flex items-center flex-grow">{route.MESSAGE}</p>
          </div>
        ))}
      </div>
    </SectionTemplate>
  )
}
