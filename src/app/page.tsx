import { SITE } from '@/constants/global'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh] text-t">
      <div className="justify-center">
        <h1 className="text-2xl font-bold">{SITE.TITLE}特設ページ</h1>
        <h2 className="flex justify-center mt-5 text-xl ">
          このページは準備中です
        </h2>
      </div>
    </main>
  )
}
