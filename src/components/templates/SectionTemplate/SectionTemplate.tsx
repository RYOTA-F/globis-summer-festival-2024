import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'

interface SectionTemplateProps {
  children: React.ReactNode
  title: string
  subTitle?: string
  id?: string
  height?: string
  backgroundColor?: string
  ariaLabel?: string
}

export const ARIA_LABEL = 'sectionTemplate' as const
export const ID = 'section-template' as const

export function SectionTemplate({
  children,
  title,
  subTitle,
  id = ID,
  height = 'h-[100vh]',
  backgroundColor = 'bg-[#fff]',
  ariaLabel = ARIA_LABEL,
}: SectionTemplateProps) {
  return (
    <section
      id={id}
      className={`flex justify-center items-center ${height} ${backgroundColor} p-[5%] pt-[3%] border-t-[0.5px] border-t-gray-100`}
      aria-label={ariaLabel}
    >
      <div className="w-full h-full flex flex-col text-center">
        {subTitle && <H3>{subTitle}</H3>}
        <H2>{title}</H2>
        <div className="h-full flex flex-grow justify-center items-center mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
