import { TripHeader } from '@/components/TripHeader'
import { TripReservation } from '@/components/TripReservation'
import { prisma } from '@/lib/prisma'

interface TripDetailsProps {
  params: {
    id: string
  }
}

async function getTripDetails(tripId: string) {
  const trip = await prisma.trip.findUniqueOrThrow({
    where: {
      id: tripId,
    },
  })

  return trip
}

export default async function TripDetails({ params }: TripDetailsProps) {
  const trip = await getTripDetails(params.id)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-5">
        <TripHeader trip={trip} />

        <div className="px-5 flex flex-col">
          <TripReservation />
        </div>
      </div>
    </div>
  )
}
