import { prisma } from '@/lib/prisma'
import { TripItem } from './TripItem'

async function getRecommendedTrips() {
  const trips = await prisma.trip.findMany({
    where: {
      recommended: true,
    },
  })

  return trips
}

export async function RecommendedTrips() {
  const recommendedTrips = await getRecommendedTrips()

  return (
    <div className="container mx-auto mt-5 px-5 space-y-[1.125rem]">
      <div className="flex items-center gap-2">
        <hr className="w-full border-t border-light-gray" />
        <h2 className="font-medium leading-6 whitespace-nowrap">
          Destinos recomendados
        </h2>
        <hr className="w-full border-t border-light-gray" />
      </div>

      <div className="flex flex-col items-center gap-5">
        {recommendedTrips.map((trip) => {
          return <TripItem key={trip.id} trip={trip} />
        })}
      </div>
    </div>
  )
}
