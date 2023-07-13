import Image from 'next/image'
import map from '@/assets/map.png'
import { SecondaryButton } from './SecondaryButton'

interface TripLocationProps {
  location: string
}

export function TripLocation({ location }: TripLocationProps) {
  return (
    <div className="space-y-5 mt-10 mb-5 px-5">
      <h2 className="font-semibold text-dark-purple">Localização</h2>

      <div className="relative h-64 w-full">
        <Image src={map} alt="" fill className="object-cover rounded" />
      </div>

      <h3 className="font-semibold text-dark-purple">{location}</h3>

      <SecondaryButton className="block w-full">
        Ver no Google Maps
      </SecondaryButton>
    </div>
  )
}
