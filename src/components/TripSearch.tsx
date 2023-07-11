'use client'

import Input from './Input'
import DatePicker from './DatePicker'
import { CurrencyInput } from './CurrencyInput'
import { Button } from './Button'

export function TripSearch() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-5 pt-5 bg-black/5 bg-[url(../assets/world-map.svg)] bg-cover bg-center bg-no-repeat">
      <h1 className="text-xl font-semibold text-center text-dark-purple">
        Encontre sua próxima <span className="text-purple">viagem!</span>
      </h1>

      <form className="w-full max-w-[938px] grid grid-cols-4 gap-4">
        <Input type="text" placeholder="Onde você quer ir?" className="" />

        <DatePicker placeholderText="Primeira data" onChange={() => {}} />

        <CurrencyInput placeholder="Orçamento" />

        <Button type="submit" className="col-span-full">
          Pesquisar
        </Button>
      </form>
    </main>
  )
}
