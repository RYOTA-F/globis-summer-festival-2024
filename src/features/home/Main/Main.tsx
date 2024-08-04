import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'main' as const

export function MainSection() {
  return (
    <section
      className="h-[calc(100vh-64px)] w-[100vw] flex flex-col mb-10"
      aria-label={ARIA_LABEL}
    >
      <div className="bg-ymask h-[60px]" />
      <img src="/summer_festival_2024.jpeg" className="w-full" />
      <nav className="flex justify-around items-center h-[100px] w-full px-40 bg-ymask text-blue-600 font-semibold font-serif tracking-widest">
        <a
          href={`#${SECTION_ID.ABOUT}`}
          className="flex-1 text-center h-full flex items-center justify-center"
        >
          概要
        </a>
        <a
          href={`#${SECTION_ID.INFORMATION}`}
          className="flex-1 text-center h-full flex items-center justify-center"
        >
          詳細
        </a>
        <a
          href={`#${SECTION_ID.ARIA_MAP}`}
          className="flex-1 text-center h-full flex items-center justify-center"
        >
          会場マップ
        </a>
        <a
          href={`#${SECTION_ID.CONTENTS}`}
          className="flex-1 text-center h-full flex items-center justify-center"
        >
          コンテンツ
        </a>
        <a
          href={`#${SECTION_ID.ACCESS}`}
          className="flex-1 text-center h-full flex items-center justify-center"
        >
          アクセス
        </a>
      </nav>
      <div className="bg-ymask flex-grow relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-[200%] bg-white rounded-[50%]"></div>
      </div>
    </section>
  )
}
