import { AccessSection } from '../../features/home/Access/Access'
import { RouteSection } from '../../features/access/Route/Route'
import { VenueSection } from '../../features/access/Venue/Venue'

export default function AccessPage() {
  return (
    <>
      <VenueSection />
      <AccessSection isLinkButton={false} />
      <RouteSection />
    </>
  )
}
