import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export function SecondaryButton({
  className,
  ...rest
}: ComponentPropsWithoutRef<'button'>) {
  const buttonClassName = twMerge(
    className,
    'text-sm font-semibold p-2 text-purple bg-white border border-purple rounded-lg hover:bg-slate-50 transition-colors',
  )

  return (
    <button className={buttonClassName} {...rest}>
      {rest.children}
    </button>
  )
}
