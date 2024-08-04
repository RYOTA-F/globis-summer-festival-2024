import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'
import { Label } from '../../../components/elements/Label/Label'
import { INFORMATION } from '../../../constants/information'
import { KASAI_LINKAI_PARK } from '../../../constants/place'

export const ARIA_LABEL = 'information-section' as const

export function InformationSection() {
  return (
    <section className="bg-white pt-10 pb-20" aria-label={ARIA_LABEL}>
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-2 items-center"
          style={{ gridTemplateColumns: '4fr 3fr' }}
        >
          <div className="w-full">
            <H3>Information</H3>
            <H2>イベント情報</H2>
            <div className="grid grid-cols-10 gap-4 p-3 pl-10 ">
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>開催日</Label>
              </div>
              <div className="col-span-8 text-left">{INFORMATION.DATE}</div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>開催時間</Label>
              </div>
              <div className="col-span-8 text-left">
                {INFORMATION.OPEN_TIME}
              </div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>開催場所</Label>
              </div>
              <div className="col-span-8 text-left">
                {KASAI_LINKAI_PARK.NAME}
              </div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>対象</Label>
              </div>
              <div className="col-span-8 text-left">{INFORMATION.TARGET}</div>
              <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
                <Label>金額</Label>
              </div>
              <div className="col-span-8 text-left">{INFORMATION.AMOUNT}</div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="/information.webp"
              alt="GLOBIS Summer Festival"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
