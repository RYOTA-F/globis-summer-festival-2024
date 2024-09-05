import { MainSection } from '../features/home/Main/Main'
import { AboutSection } from '../features/home/About/About'
import { InformationSection } from '../features/home/Information/Information'
// import { ContentsSection } from '../features/home/Contents/Contents'
import { AreaMapSection } from '../features/home/AreaMap/AreaMap'
import { ScheduleSection } from '../features/home/Schedule/Schedule'
import { AccessSection } from '../features/home/Access/Access'

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <InformationSection />
      <AreaMapSection />
      <ScheduleSection />
      {/* TODO: コンテンツ */}
      {/* <ContentsSection /> */}
      <AccessSection />
    </>
  )
}
