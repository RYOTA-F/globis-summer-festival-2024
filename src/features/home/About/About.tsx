import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'
import { H4 } from '../../../components/elements/heading/H4/H4'
import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'about-section' as const

export function AboutSection() {
  return (
    <section
      id={SECTION_ID.ABOUT}
      className="bg-white py-10 mt-10"
      aria-label={ARIA_LABEL}
    >
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-[3fr,4fr] items-center md:gap-16 flex flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="/home/about.png"
              alt="GLOBIS Summer Festival"
              className="w-full h-auto rounded-lg shadow-lg mt-5 md:mt-0"
            />
          </div>
          <div className="text-center sm:text-left w-full">
            <H3>ABOUT</H3>
            <H2>GLOBIS夏祭りとは</H2>
            <H4>夏の終わりと出会いの始まり</H4>
            <H4>〜はじける青春〜</H4>
            <p className="text-t text-base mt-4">
              GLOBIS生に関わる誰もが楽しめる夏祭りイベントを開催します！その名も「GLOBIS夏祭り2024」！キャッチコピーは、『夏の終わりと出会いの始まり〜はじける青春〜』ということで、大人の青春をみんなで楽しみましょう！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
