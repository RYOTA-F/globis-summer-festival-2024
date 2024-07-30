import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'

export const ARIA_LABEL = 'aria-map' as const

export function AriaMapSection() {
  return (
    <SectionTemplate
      title="会場マップ"
      subTitle="AriaMap"
      ariaLabel={ARIA_LABEL}
    >
      <img
        src="/aria_map.png"
        alt="会場マップ"
        className="mt-[-160px] h-[80%]"
      />
    </SectionTemplate>
  )
}
