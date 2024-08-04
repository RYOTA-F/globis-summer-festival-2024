import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'
import { H4 } from '../../../components/elements/heading/H4/H4'

export const ARIA_LABEL = 'about-section' as const

export function AboutSection() {
  return (
    <section className="bg-white py-10" aria-label={ARIA_LABEL}>
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-2 items-center gap-16"
          style={{ gridTemplateColumns: '3fr 4fr' }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="/about.webp"
              alt="GLOBIS Summer Festival"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full">
            <H3>ABOUT</H3>
            <H2>GLOBIS夏祭りとは</H2>
            <H4 fontSize="text-3xl">夏の終わりと出会いの始まり</H4>
            <H4>〜はじける青春〜</H4>
            <p className="text-t text-base mt-4">
              GLOBIS生に関わる誰もが楽しめる夏祭りイベントを開催します！！その名も「GLOBIS夏祭り2024」！！キャッチコピーは、『夏の終わりと出会いの始まり〜はじける青春〜』ということで、大人の青春をみんなで楽しみましょう！！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
