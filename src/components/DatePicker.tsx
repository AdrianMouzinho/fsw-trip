import { LegacyRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker'
import ptBr from 'date-fns/locale/pt-BR'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pt-BR', ptBr)

interface InputProps extends ReactDatePickerProps {
  errorMessage?: string | null
}

function Input(
  { className, errorMessage = null, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) {
  const inputClassName = twMerge(
    className,
    'h-10 w-full px-2 text-sm text-dark-purple rounded-lg border border-light-gray placeholder:text-gray outline-none focus:ring-1 focus:ring-purple transition-all',
    errorMessage ? 'border-red' : 'focus:ring-1 focus:ring-purple',
  )

  return (
    <div className="flex flex-col gap-1">
      <DatePicker
        locale="pt-BR"
        wrapperClassName="w-full"
        className={inputClassName}
        enableTabLoop={false}
        {...rest}
      />

      {errorMessage && <span className="text-sm text-red">{errorMessage}</span>}
    </div>
  )
}

export default forwardRef(Input)
