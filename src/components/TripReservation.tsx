'use client'

import { Controller, useForm } from 'react-hook-form'

import { Button } from './Button'
import DatePicker from './DatePicker'
import Input from './Input'

interface TripReservationProps {
  maxGuests: number
  startDate: Date
  endDate: Date
}

interface TripReservationForm {
  guests: string
  startDate: Date | null
  endDate: Date | null
}

export function TripReservation({
  endDate,
  startDate,
  maxGuests,
}: TripReservationProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TripReservationForm>()

  const selectedStartDate = watch('startDate')
  const selectedEndDate = watch('endDate')

  function searchTrips(data: any) {
    console.log({ data })
  }

  return (
    <form
      onSubmit={handleSubmit(searchTrips)}
      className="w-full grid grid-cols-4 gap-3 pb-10 border-b border-light-gray"
    >
      <Controller
        name="startDate"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Data de início é obrigatória.',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            placeholderText="Data de início"
            onChange={onChange}
            selected={value}
            minDate={startDate}
            maxDate={selectedEndDate ?? endDate}
            errorMessage={errors.startDate?.message}
          />
        )}
      />

      <Controller
        name="endDate"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Data final é obrigatória.',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            placeholderText="Data final"
            onChange={onChange}
            selected={value}
            minDate={selectedStartDate ?? startDate}
            maxDate={endDate}
            errorMessage={errors.startDate?.message}
          />
        )}
      />

      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Número de hóspedes é obrigatório.',
          },
        })}
        type="number"
        placeholder={`Número de hóspedes (máximo ${maxGuests})`}
        errorMessage={errors.guests?.message}
      />

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
