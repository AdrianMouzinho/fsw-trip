'use client'

import { Button } from './Button'
import DatePicker from './DatePicker'
import Input from './Input'

export function TripReservation() {
  return (
    <form className="w-full grid grid-cols-4 gap-3 pb-5 border-b border-light-gray">
      <DatePicker placeholderText="Data de início" onChange={() => {}} />

      <DatePicker placeholderText="Data final" onChange={() => {}} />

      <Input type="number" placeholder="Hóspedes" />

      <div className="col-span-full flex items-center justify-between">
        <span className="text-sm font-medium text-dark-purple">
          Total (7 noites)
        </span>

        <span className="text-sm font-medium text-dark-purple">R$2.660</span>
      </div>

      <Button type="submit" className="col-span-full">
        Reservar agora
      </Button>
    </form>
  )
}
