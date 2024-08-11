import { Label } from '../../../components/elements/Label/Label'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { CONTENTS } from '../../../constants/contents'
import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'aria-map' as const

export function AriaMapSection() {
  const contents = CONTENTS.map((content, index) => ({
    number: index + 1,
    name: content.name,
  }))

  return (
    <SectionTemplate
      id={SECTION_ID.ARIA_MAP}
      title="会場マップ"
      subTitle="ARIA MAP"
      ariaLabel={ARIA_LABEL}
    >
      <div className="grid grid-cols-10 -mt-10">
        <img
          src="/aria_map.png"
          alt="会場マップ"
          className="col-span-7 rounded-2xl shadow-lg"
        />
        <div className="grid grid-cols-10 pt-6 pl-10 col-span-3">
          {contents.map((content) => (
            <>
              <div className="col-span-1 [&>label]:block [&>label]:w-[30px] [&>label]:h-[30px] [&>label]:leading-[22px]">
                <Label color="bg-blue-500">{content.number}</Label>
              </div>
              <div className="col-span-9 pl-2 text-left font-bold leading-[30px]">
                {content.name}
              </div>
            </>
          ))}
        </div>
      </div>
    </SectionTemplate>
  )
}
