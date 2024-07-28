import { GoogleMap } from '../../../components/elements/GoogleMap/GoogleMap'
import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { ENV } from '../../../constants/env'
import { KASAI_LINKAI_PARK } from '../../../constants/place'
import { ZOOM } from '../../../constants/google'

export const ARIA_LABEL = 'access' as const

export function AccessSecion() {
  return (
    <div aria-label={ARIA_LABEL}>
      <SectionTemplate
        title="アクセス"
        subTitle="Access"
        height="h-[calc(100vh-48px)]"
      >
        <div className="w-full h-full">
          <div className="w-full flex justify-center">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="text-2xl font-bold tracking-widest text-center">
                    {KASAI_LINKAI_PARK.NAME}
                  </td>
                </tr>
                <tr>
                  <td className="text-lg tracking-widest text-center">
                    {KASAI_LINKAI_PARK.POST_CODE}
                  </td>
                </tr>
                <tr>
                  <td className="text-lg tracking-widest text-center">
                    <a
                      href={KASAI_LINKAI_PARK.MAP_URL}
                      target="_brank"
                      className="text-[#0000ee]"
                    >
                      {KASAI_LINKAI_PARK.ADDRESS}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center h-[50vh] mt-10">
            <GoogleMap
              apiKey={ENV.GOOGLE_MAP_API_KEY}
              center={KASAI_LINKAI_PARK.COORDINATES}
              position={KASAI_LINKAI_PARK.COORDINATES}
              zoom={ZOOM}
            />
          </div>
        </div>
      </SectionTemplate>
    </div>
  )
}
