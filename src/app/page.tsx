import { MainSection } from '../features/home/Main/Main'
import { ContentsSection } from '../features/home/Contents/Contents'
import { AriaMapSection } from '../features/home/AriaMap/AriaMap'
import { AccessSecion } from '../features/home/Access/Access'

export default function Home() {
  return (
    <main>
      <MainSection />
      <ContentsSection />
      <AriaMapSection />
      <AccessSecion />
    </main>
  )
}
