'use client'

import { GoogleMap as GMap, LoadScript, Marker } from '@react-google-maps/api'
import { CONTAINER_STYLE } from '../../../constants/google'

interface Position {
  lat: number
  lng: number
}
interface Center extends Position {}

interface MapProps {
  apiKey: string
  center: Center
  position: Position
  zoom: number
}

export function GoogleMap({ apiKey, center, position, zoom }: MapProps) {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GMap mapContainerStyle={CONTAINER_STYLE} center={center} zoom={zoom}>
        <Marker position={position} />
      </GMap>
    </LoadScript>
  )
}
