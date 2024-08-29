import { GoogleMap } from '../../../components/elements/GoogleMap/GoogleMap'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { TextLabel } from '../../../components/elements/TextLabel/TextLabel'
import { ENV } from '../../../constants/env'
import { KASAI_LINKAI_PARK } from '../../../constants/place'
import { SECTION_ID } from '../../../constants/section'
import { GOOGLE_MAP_CONTAINE, ZOOM } from '../../../constants/google'
import { Button } from '../../../components/elements/Button/Button'

export const ARIA_LABEL = 'access' as const

export interface AccessSectionProps {
  isLinkButton?: boolean
}

export function AccessSection({ isLinkButton = true }: AccessSectionProps) {
  return (
    <SectionTemplate
      title="アクセス"
      subTitle="ACCESS"
      id={SECTION_ID.ACCESS}
      height="auto"
      ariaLabel={ARIA_LABEL}
    >
      <div className="md:grid md:grid-cols-[5fr,5fr] mb-10">
        <div className={isLinkButton ? 'md:pt-[80px]' : 'md:pt-[120px]'}>
          <div className="text-2xl font-bold leading-loose mb-5">
            {KASAI_LINKAI_PARK.NAME}
          </div>
          <div className="grid grid-cols-10 gap-4 mb:pl-10">
            <div className="col-span-3 sm:col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <TextLabel>住所</TextLabel>
            </div>
            <div className="col-span-7 sm:col-span-8 text-left pr-[30px]">
              {KASAI_LINKAI_PARK.ADDRESS}
            </div>
            <div className="col-span-3 sm:col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <TextLabel>URL</TextLabel>
            </div>
            <a
              href={KASAI_LINKAI_PARK.URL}
              target="_blank"
              className="col-span-7 sm:col-span-8 text-left pr-[30px] underline"
            >
              {KASAI_LINKAI_PARK.URL}
            </a>
            <div className="col-span-3 sm:col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <TextLabel>アクセス 1</TextLabel>
            </div>
            <div className="col-span-7 sm:col-span-8 text-left pr-[30px]">
              {KASAI_LINKAI_PARK.ACCESS.KEIYO}
            </div>
            <div className="col-span-3 sm:col-span-2 text-center w-full [&>label]:block [&>label]:w-full">
              <TextLabel>アクセス 2</TextLabel>
            </div>
            <div className="col-span-7 sm:col-span-8 text-left pr-[30px]">
              {KASAI_LINKAI_PARK.ACCESS.TOZAI}
            </div>
          </div>
          {isLinkButton && (
            <div className="mt-10 hidden md:block">
              <Button href={`/access`}>詳しくはこちら</Button>
            </div>
          )}
        </div>
        <div className="h-[50vh] mt-10 mb:mt-0" id={GOOGLE_MAP_CONTAINE}>
          <GoogleMap
            apiKey={ENV.GOOGLE_MAP_API_KEY}
            center={KASAI_LINKAI_PARK.COORDINATES}
            position={KASAI_LINKAI_PARK.COORDINATES}
            zoom={ZOOM}
          />
        </div>
        {isLinkButton && (
          <div className="mt-10 block md:hidden">
            <Button href={`/access`}>詳しくはこちら</Button>
          </div>
        )}
      </div>
    </SectionTemplate>
  )
}
