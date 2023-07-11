import { twMerge } from 'tailwind-merge'
import Input, { CurrencyInputProps } from 'react-currency-input-field'

interface InputProps extends CurrencyInputProps {
  errorMessage?: string | null
}

export function CurrencyInput({
  className,
  errorMessage = null,
  ...rest
}: InputProps) {
  const inputClassName = twMerge(
    className,
    'h-10 w-full px-2 text-sm text-dark-purple rounded-lg border border-light-gray placeholder:text-gray outline-none focus:ring-1 focus:ring-purple transition-all',
    errorMessage ? 'border-red' : 'focus:ring-1 focus:ring-purple',
  )

  return (
    <div className="col-span-2 flex flex-col gap-1">
      <Input
        lang="pt-BR"
        className={inputClassName}
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        {...rest}
      />

      {errorMessage && <span className="text-sm text-red">{errorMessage}</span>}
    </div>
  )
}
