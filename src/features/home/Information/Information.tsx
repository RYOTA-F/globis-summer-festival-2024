import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'
import { Label } from '../../../components/elements/Label/Label'
import { INFORMATION } from '../../../constants/information'
import { KASAI_LINKAI_PARK } from '../../../constants/place'
import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'information-section' as const

export function InformationSection() {
  return (
    <section
      id={SECTION_ID.INFORMATION}
      className="bg-white pt-10 pb-20"
      aria-label={ARIA_LABEL}
    >
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-[3fr,4fr] items-center md:gap-16 px-4">
          <div className="text-center md:text-left w-full px-4">
            <H3>INFORMATION</H3>
            <H2>イベント情報</H2>
            <div className="grid grid-cols-10 gap-4 md:p-3 mt-5 mb:mt-0">
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>日程</Label>
              </div>
              <div className="col-span-8 text-left">{INFORMATION.DATE}</div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>時間</Label>
              </div>
              <div className="col-span-8 text-left">
                {INFORMATION.OPEN_TIME}
              </div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>場所</Label>
              </div>
              <div className="col-span-8 text-left">
                {KASAI_LINKAI_PARK.NAME}
              </div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>対象</Label>
              </div>
              <div className="col-span-8 text-left">{INFORMATION.TARGET}</div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="/home/information.png"
              alt="GLOBIS Summer Festival"
              className="w-full h-auto rounded-lg shadow-lg mt-6 md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
