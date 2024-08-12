import { MainSection } from '../features/home/Main/Main'
import { AboutSection } from '../features/home/About/About'
import { InformationSection } from '../features/home/Information/Information'
import { ContentsSection } from '../features/home/Contents/Contents'
import { AriaMapSection } from '../features/home/AriaMap/AriaMap'
import { AccessSection } from '../features/home/Access/Access'

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <InformationSection />
      <AriaMapSection />
      {/* TODO: コンテンツ */}
      {/* <ContentsSection /> */}
      <AccessSection />
    </>
  )
}
