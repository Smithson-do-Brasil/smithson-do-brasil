import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { Input as ShadcnInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { ContactFormSchema } from './form'

type FormFieldId = 'firstName' | 'lastName' | 'email' | 'tel' | 'message'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: FormFieldId
  type?: string
  label: string
  asTextarea?: boolean
  register: UseFormRegister<ContactFormSchema>
  error: string
}

export function Input({
  id,
  type = 'text',
  label,
  asTextarea = false,
  register,
  error,
  ...rest
}: InputProps) {
  return (
    <div className="space-y-1">
      <Label
        htmlFor={id}
        className={`text-foreground ${error && 'text-red-500'}`}
      >
        {label}
        <span className="text-red-500">*</span>
      </Label>
      {asTextarea ? (
        <Textarea
          id={id}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-transparent pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
          {...register(id)}
          {...rest}
        />
      ) : (
        <ShadcnInput
          id={id}
          type={type}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-transparent pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
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
