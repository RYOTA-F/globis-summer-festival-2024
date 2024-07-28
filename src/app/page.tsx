import { MainSection } from '../features/home/Main/Main'
import { AccessSecion } from '../features/home/Access/Access'
import { AriaMapSection } from '../features/home/AriaMap/AriaMap'

export default function Home() {
  return (
    <main>
      <MainSection />
      <AriaMapSection />
      <AccessSecion />
    </main>
  )
}
