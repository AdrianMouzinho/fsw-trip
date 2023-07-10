import Image from 'next/image'

import farmIcon from '@/assets/farm-icon.svg'
import resortIcon from '@/assets/resort-icon.svg'
import hotelIcon from '@/assets/hotel-icon.svg'
import innIcon from '@/assets/inn-icon.svg'
import cottageIcon from '@/assets/cottage-icon.svg'
import touristSpotIcon from '@/assets/touristc-spot-icon.svg'

export function QuickSearch() {
  return (
    <div className="container mx-auto mt-5 px-5 space-y-4">
      <div className="flex items-center gap-2">
        <hr className="w-full border-t border-light-gray" />
        <h2 className="font-medium leading-6 whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <hr className="w-full border-t border-light-gray" />
      </div>

      <div className="grid grid-cols-3 grid-flow-row gap-5">
        <button className="flex flex-col items-center gap-2">
          <Image src={hotelIcon} alt="" className="h-6" />
          <span className="text-sm">Hotéis</span>
        </button>

        <button className="flex flex-col items-center gap-2">
          <Image src={resortIcon} alt="" className="h-6" />
          <span className="text-sm">Resorts</span>
        </button>

        <button className="flex flex-col items-center gap-2">
          <Image src={innIcon} alt="" className="h-6" />
          <span className="text-sm">Pousadas</span>
        </button>

        <button className="flex flex-col items-center gap-2">
          <Image src={cottageIcon} alt="" className="h-6" />
          <span className="text-sm">Chalés</span>
        </button>

        <button className="flex flex-col items-center gap-2">
          <Image src={farmIcon} alt="" className="h-6" />
          <span className="text-sm">Fazendas</span>
        </button>

        <button className="flex flex-col items-center gap-2">
          <Image src={touristSpotIcon} alt="" className="h-6" />
          <span className="text-sm">Pontos turísticos</span>
        </button>
      </div>
    </div>
  )
}
