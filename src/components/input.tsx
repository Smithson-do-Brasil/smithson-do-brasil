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
          className="rounded-sm border-0 bg-muted px-5 py-3 font-medium text-base text-foreground placeholder:text-foreground"
          {...register(id)}
          {...rest}
        />
      ) : (
        <ShadcnInput
          id={id}
          type={type}
          placeholder={placeholder}
          className="rounded-sm border-0 bg-muted px-5 py-3 font-medium text-base text-foreground placeholder:text-foreground"
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
