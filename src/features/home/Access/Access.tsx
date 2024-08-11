import { GoogleMap } from '../../../components/elements/GoogleMap/GoogleMap'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { Label } from '../../../components/elements/Label/Label'
import { ENV } from '../../../constants/env'
import { KASAI_LINKAI_PARK } from '../../../constants/place'
import { SECTION_ID } from '../../../constants/section'
import { ZOOM } from '../../../constants/google'

export const ARIA_LABEL = 'access' as const

export function AccessSection() {
  return (
    <SectionTemplate
      title="アクセス"
      subTitle="ACCESS"
      id={SECTION_ID.ACCESS}
      height="auto"
      ariaLabel={ARIA_LABEL}
    >
      <div className="grid grid-cols-[5fr,5fr]">
        <div className="pt-10">
          <div className="text-2xl font-bold leading-loose mb-5">
            {KASAI_LINKAI_PARK.NAME}
          </div>
          <div className="grid grid-cols-10 gap-4 pl-10">
            <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <Label>住所</Label>
            </div>
            <div className="col-span-8 text-left pr-[30px]">
              {KASAI_LINKAI_PARK.ADDRESS}
            </div>
            <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <Label>URL</Label>
            </div>
            <a
              href={KASAI_LINKAI_PARK.URL}
              target="_blank"
              className="col-span-8 text-left pr-[30px] underline"
            >
              {KASAI_LINKAI_PARK.URL}
            </a>
            <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <Label>アクセス 1</Label>
            </div>
            <div className="col-span-8 text-left pr-[30px]">
              {KASAI_LINKAI_PARK.ACCESS.KEIYO}
            </div>
            <div className="col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <Label>アクセス 2</Label>
            </div>
            <div className="col-span-8 text-left pr-[30px]">
              {KASAI_LINKAI_PARK.ACCESS.TOZAI}
            </div>
          </div>
        </div>
        <div className="h-[50vh]">
          <GoogleMap
            apiKey={ENV.GOOGLE_MAP_API_KEY}
            center={KASAI_LINKAI_PARK.COORDINATES}
            position={KASAI_LINKAI_PARK.COORDINATES}
            zoom={ZOOM}
          />
        </div>
      </div>
    </SectionTemplate>
  )
}
