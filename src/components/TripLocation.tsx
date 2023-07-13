import Image from 'next/image'
import map from '@/assets/map.png'
import { SecondaryButton } from './SecondaryButton'

interface TripLocationProps {
  location: string
  description: string | null
}

export function TripLocation({ location, description }: TripLocationProps) {
  return (
    <div className="space-y-5 mt-10 mb-5 px-5">
      <h2 className="font-semibold text-dark-purple">Localização</h2>

      <div className="relative h-64 w-full">
        <Image src={map} alt={location} fill className="object-cover rounded" />
      </div>

      <div
        className="space-y-1.5
      "
      >
        <h3 className="font-semibold text-dark-purple">{location}</h3>

        {description && (
          <p className="text-xs leading-5 text-dark-purple">{description}</p>
        )}
      </div>

      <SecondaryButton className="block w-full">
        Ver no Google Maps
      </SecondaryButton>
    </div>
  )
}
