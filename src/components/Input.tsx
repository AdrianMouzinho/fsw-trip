import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string | null
}

function Input(
  { className, errorMessage = null, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) {
  const inputClassName = twMerge(
    className,
    'h-10 w-full px-2 text-sm text-dark-purple rounded-lg border border-light-gray placeholder:text-gray outline-none transition-all',
    errorMessage ? 'border-red' : 'focus:ring-1 focus:ring-purple',
  )

  return (
    <div className="flex flex-col gap-1">
      <input ref={ref} className={inputClassName} {...rest} />

      {errorMessage && <span className="text-sm text-red">{errorMessage}</span>}
    </div>
  )
}

export default forwardRef(Input)
