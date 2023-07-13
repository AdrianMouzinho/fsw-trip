import { differenceInDays } from 'date-fns'

export function getTotalPrice(
  startDate: Date,
  endDate: Date,
  pricePerDay: number,
) {
  const total = differenceInDays(endDate, startDate) * pricePerDay

  return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
