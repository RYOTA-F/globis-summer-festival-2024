import { AccessSection } from '../../features/home/Access/Access'
import { RouteSection } from '../../features/access/Route/Route'

export default function AccessPage() {
  return (
    <>
      <AccessSection isLinkButton={false} />
      <RouteSection />
    </>
  )
}
