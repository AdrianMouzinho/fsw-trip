import Image from 'next/image'
import { Trip } from '@prisma/client'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

interface TripItemProps {
  trip: Trip
}

export function TripItem({ trip }: TripItemProps) {
  return (
    <Link href={`/trips/${trip.id}`} className="space-y-4">
      <Image
        src={trip.coverUrl}
        width={280}
        height={280}
        alt={trip.name}
        className="h-[17.5rem] w-[17.5rem] rounded-2xl"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-dark-purple">{trip.name}</h3>

        <p className="flex items-center gap-1 text-xs leading-[1.125rem]">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          {trip.location}
        </p>

        <p className="text-xs leading-[1.125rem]">
          Próxima data: {new Date(trip.startDate).toISOString()}
        </p>

        <p className="text-xs leading-[1.125rem]">
          <span className="font-medium text-purple">
            R${trip.pricePerDay.toString()}
          </span>{' '}
          por noite
        </p>
      </div>
    </Link>
  )
}
