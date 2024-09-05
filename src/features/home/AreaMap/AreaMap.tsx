import { NumberLabel } from '../../../components/elements/NumberLabel/NumberLabel'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import {
  ARIA_MAP,
  TYPE_TENT,
  TYPE_BETWEEN_TENT,
} from '../../../constants/aria_map'
import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'aria-map' as const

export function AreaMapSection() {
  const tents = ARIA_MAP.filter((map) => map.type === TYPE_TENT)
  const between = ARIA_MAP.filter((map) => map.type === TYPE_BETWEEN_TENT)

  return (
    <SectionTemplate
      id={SECTION_ID.AREA_MAP}
      title="会場マップ"
      subTitle="AREA MAP"
      ariaLabel={ARIA_LABEL}
      height="auto"
    >
      <div className="w-full mb-6">
        <div className="w-full md:w-[80%] mx-auto">
          <img
            src="/home/aria_map.png"
            alt="会場マップ"
            className="rounded-2xl shadow-lg w-full -mt-4"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-1 gap-y-2 pl-2">
              {tents.map((tent) => (
                <div
                  key={tent.number}
                  className="grid grid-cols-[auto_1fr] gap-y-2"
                >
                  <div className="[&>label]:block [&>label]:w-[30px] [&>label]:h-[30px] [&>label]:leading-[22px]">
                    <NumberLabel color="bg-blue-500">{tent.number}</NumberLabel>
                  </div>
                  <div className="pl-2 text-left font-bold leading-[30px]">
                    {tent.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-1 gap-y-2 pl-2 mt-2">
              {between.map((bt) => (
                <div
                  key={bt.number}
                  className="grid grid-cols-[auto_1fr] gap-y-2"
                >
                  <div className="[&>label]:block [&>label]:w-[30px] [&>label]:h-[30px] [&>label]:text-rmain [&>label]:bg-ymain [&>label]:font-bold [&>label]:leading-[22px]">
                    <NumberLabel>{bt.number}</NumberLabel>
                  </div>
                  <div className="pl-2 text-left font-bold leading-[30px]">
                    {bt.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
