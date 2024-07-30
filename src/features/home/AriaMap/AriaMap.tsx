import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'

export const ARIA_LABEL = 'aria-map' as const

export function AriaMapSection() {
  return (
    <SectionTemplate
      title="会場マップ"
      subTitle="ARIA MAP"
      backgroundColor="bg-bmask"
      ariaLabel={ARIA_LABEL}
    >
      <div className="w-full h-full relative">
        <img
          src="/aria_map.png"
          alt="会場マップ"
          className="absolute inset-0 object-contain w-full h-full"
        />
      </div>
    </SectionTemplate>
  )
}
