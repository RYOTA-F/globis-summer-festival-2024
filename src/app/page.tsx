import { SITE } from '@/constants/global'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[calc(100vh-112px)] text-t">
      <div className="justify-center">
        <h1 className="text-2xl font-bold">{SITE.TITLE} 特設ページ</h1>
        <h2 className="flex justify-center mt-5 text-xl ">Comming soon...</h2>
      </div>
    </main>
  )
}
