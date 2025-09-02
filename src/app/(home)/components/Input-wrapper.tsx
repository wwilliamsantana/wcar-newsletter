import { Mail } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

export function InputWrapper({ className, ...props }: ComponentProps<'input'>) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center px-3 py-2 gap-2 border border-zinc-800 rounded-sm  ',
        className,
      )}
    >
      <Mail className="w-4 h-4  text-zinc-600" />
      <input
        placeholder="Seu e-mail principal"
        className={' outline-none w-64 text-sm  placeholder:text-zinc-500 '}
        {...props}
      />
    </div>
  )
}
