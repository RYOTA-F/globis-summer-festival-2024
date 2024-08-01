import { H2 } from '../../../components/elements/heading/H2/H2'
import { H3 } from '../../../components/elements/heading/H3/H3'
import { H4 } from '../../../components/elements/heading/H4/H4'

export function AboutSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/about.webp"
              alt="GLOBIS Summer Festival"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <H3>ABOUT</H3>
            <H2>GLOBIS夏祭りとは</H2>
            <H4 fontSize="text-3xl">夏の終わりと出会いの始まり</H4>
            <H4>〜はじける青春〜</H4>
            <p className="text-t text-base mt-4">
              GLOBIS生に関わる誰もが楽しめる夏祭りイベントを開催します!!
            </p>
            <p className="text-t text-base">その名も「GLOBIS夏祭り2024」!!</p>
            <p className="text-t text-base">
              キャッチコピーは、『夏の終わりと出会いの始まり
              〜はじける青春〜』ということで、大人の青春をみんなで楽しみましょう！！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
