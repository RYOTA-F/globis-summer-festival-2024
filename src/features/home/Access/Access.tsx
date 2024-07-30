import { GoogleMap } from '../../../components/elements/GoogleMap/GoogleMap'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { Label } from '../../../components/elements/Label/Label'
import { ENV } from '../../../constants/env'
import { KASAI_LINKAI_PARK } from '../../../constants/place'
import { ZOOM } from '../../../constants/google'

export const ARIA_LABEL = 'access' as const

export function AccessSecion() {
  return (
    <SectionTemplate
      title="アクセス"
      subTitle="ACCESS"
      height="auto"
      ariaLabel={ARIA_LABEL}
    >
      <div className="w-[80%]">
        <div className="text-2xl font-bold leading-loose mb-3">
          {KASAI_LINKAI_PARK.NAME}
        </div>
        <div className="grid grid-cols-10 gap-3 px-[20%]">
          <div className="col-span-3 text-right">
            <Label>住所</Label>
          </div>
          <div className="col-span-7 text-left">
            {KASAI_LINKAI_PARK.ADDRESS}
          </div>
          <div className="col-span-3 text-right">
            <Label>アクセス 1</Label>
          </div>
          <div className="col-span-7 text-left">
            {KASAI_LINKAI_PARK.ACCESS.KEIYO}
          </div>
          <div className="col-span-3 text-right">
            <Label>アクセス 2</Label>
          </div>
          <div className="col-span-7 text-left pr-[20%]">
            {KASAI_LINKAI_PARK.ACCESS.TOZAI}
          </div>
        </div>

        <div className="flex justify-center h-[50vh] mt-10 px-[20%]">
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
