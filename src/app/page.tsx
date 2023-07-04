import { prisma } from '@/lib/prisma'

import { Trip } from '@/components/Trip'

async function getTrips() {
  const trips = await prisma.trip.findMany()

  return trips
}

export default async function Home() {
  const trips = await getTrips()

  console.log({ trips })

  return (
    <main>
      <h1>Main</h1>
      <Trip />
    </main>
  )
}
