import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const contactForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  tel: z.string().min(10),
  message: z.string(),
})

export type ContactForm = z.infer<typeof contactForm>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ContactForm>()

  async function handleSignUp(data: ContactForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Mensagem enviada com sucesso.', {
        duration: 5000,
        icon: '📬',
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }
  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="w-2/4 space-y-4 rounded-lg bg-zinc-800 p-8"
    >
      <div className="space-y-1">
        <Label htmlFor="firstName" className="text-zinc-50">
          Nome<span className="text-red-500">*</span>
        </Label>
        <Input
          id="firstName"
          type="text"
          {...register('firstName')}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-b-zinc-50 bg-zinc-800 pl-0 font-medium text-zinc-50 focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="lastName" className="text-zinc-50">
          Sobrenome<span className="text-red-500">*</span>
        </Label>
        <Input
          id="lastName"
          type="text"
          {...register('lastName')}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-b-zinc-50 bg-zinc-800 pl-0 font-medium text-zinc-50 focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email" className="text-zinc-50">
          Seu melhor e-mail<span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="text"
          {...register('email')}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-b-zinc-50 bg-zinc-800 pl-0 font-medium text-zinc-50 focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="tel" className="text-zinc-50">
          Telefone (com DDD)<span className="text-red-500">*</span>
        </Label>
        <Input
          id="tel"
          type="tel"
          {...register('tel')}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-b-zinc-50 bg-zinc-800 pl-0 font-medium text-zinc-50 focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message" className="text-zinc-50">
          Mensagem<span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          className="rounded-none border-x-0 border-b-2 border-t-0 border-b-zinc-50 bg-zinc-800 pl-0 font-medium text-zinc-50 focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>
      <Button
        disabled={isSubmitting}
        className="w-1/3 bg-[#4C6FF7] text-zinc-50 hover:bg-[#4C6FF7] hover:brightness-90"
        type="submit"
      >
        Entrar em contato
      </Button>
    </form>
  )
}
