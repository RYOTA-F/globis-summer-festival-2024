import { MainSection } from '../features/home/Main/Main'
import { AboutSection } from '../features/home/About/About'
import { ContentsSection } from '../features/home/Contents/Contents'
import { AriaMapSection } from '../features/home/AriaMap/AriaMap'
import { AccessSecion } from '../features/home/Access/Access'

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <ContentsSection />
      <AriaMapSection />
      <AccessSecion />
    </main>
  )
}
