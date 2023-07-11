import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'
import { Trip } from '@prisma/client'

interface TripHeaderProps {
  trip: Trip
}

export function TripHeader({ trip }: TripHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-52 w-full">
        <Image
          src={trip.coverUrl}
          alt={trip.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-5 space-y-1">
        <h1 className="text-xl leading-5 font-semibold text-dark-purple">
          {trip.name}
        </h1>

        <span className="flex items-center gap-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs leading-5 font-medium underline">
            {trip.location}
          </p>
        </span>

        <p className="text-xs leading-3">
          <span className="font-medium text-purple">
            R${trip.pricePerDay.toString()}
          </span>{' '}
          por noite
        </p>
      </div>
    </div>
  )
}
