import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export function Button({
  className,
  ...rest
}: ComponentPropsWithoutRef<'button'>) {
  const buttonClassName = twMerge(
    className,
    'text-sm font-semibold p-2 text-white bg-purple rounded-lg hover:bg-violet-800 transition-colors',
  )

  return (
    <button className={buttonClassName} {...rest}>
      {rest.children}
    </button>
  )
}
