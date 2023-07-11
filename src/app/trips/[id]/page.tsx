import { TripHeader } from '@/components/TripHeader'
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
      <div className="flex flex-col">
        <TripHeader trip={trip} />
      </div>
    </div>
  )
}
