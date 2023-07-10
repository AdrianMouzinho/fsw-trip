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

      <form className="w-full max-w-[938px] flex flex-col gap-4">
        <Input type="text" placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker
            placeholderText="Primeira data"
            onChange={() => {}}
            className="w-full"
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>

        <Button type="submit">Pesquisar</Button>
      </form>
    </main>
  )
}
