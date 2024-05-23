import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { Input as ShadcnInput } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { ContactFormSchema } from './form'

type FormFieldId = 'name' | 'email' | 'tel' | 'message'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: FormFieldId
  type?: string
  placeholder: string
  asTextarea?: boolean
  register: UseFormRegister<ContactFormSchema>
  error: string
}

export function Input({
  id,
  type = 'text',
  placeholder,
  asTextarea = false,
  register,
  error,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      {asTextarea ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          className="rounded-sm bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-950"
          {...register(id)}
          {...rest}
        />
      ) : (
        <ShadcnInput
          id={id}
          type={type}
          placeholder={placeholder}
          className="rounded-sm bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-950"
          {...register(id)}
          {...rest}
        />
      )}
      <span>
        <span className="text-xs text-red-500">{error}</span>
      </span>
    </div>
  )
}
