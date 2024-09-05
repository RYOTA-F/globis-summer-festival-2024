import { SECTION_ID } from '../../../constants/section'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'

export const ARIA_LABEL = 'schedule' as const

export function ScheduleSection() {
  return (
    <SectionTemplate
      id={SECTION_ID.SCHEDULE}
      title="タイムスケジュール"
      subTitle="SCHEDULE"
      ariaLabel={ARIA_LABEL}
      height="auto"
    >
      <div className="w-full mb-6">
        <div className="w-full md:w-[80%] mx-auto">
          <img
            src="/home/schedule.png"
            alt="スケジュール"
            className="rounded-md shadow-lg w-full -mt-4"
          />
        </div>
      </div>
    </SectionTemplate>
  )
}
