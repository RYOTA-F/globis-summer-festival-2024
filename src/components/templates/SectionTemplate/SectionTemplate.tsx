import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'

interface SectionTemplateProps {
  children: React.ReactNode
  title: string
  subTitle?: string
  height?: string
  backgroundColor?: string
}

export const ARIA_LABEL = 'sectionTemplate' as const

export function SectionTemplate({
  children,
  title,
  subTitle,
  height = '100vh',
  backgroundColor = '#888888',
}: SectionTemplateProps) {
  return (
    <section
      className={`flex justify-center items-center ${height}  bg-[${backgroundColor}] p-[5%]`}
      aria-label={ARIA_LABEL}
    >
      <div className="w-full h-full text-center">
        {subTitle && <H3>{subTitle}</H3>}
        <H2>{title}</H2>
        <div className="flex justify-center items-center mt-10 h-full">
          {children}
        </div>
      </div>
    </section>
  )
}
