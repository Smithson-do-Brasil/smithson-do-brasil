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
    reset,
  } = useForm<ContactForm>()

  async function handleSignUp(data: ContactForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Mensagem enviada com sucesso.', {
        duration: 5000,
        icon: '📬',
      })

      reset()
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="w-full space-y-4 rounded-lg bg-zinc-200 p-8 dark:bg-zinc-800 lg:w-2/4"
    >
      <div className="space-y-1">
        <Label htmlFor="firstName" className="text-foreground">
          Nome<span className="text-red-500">*</span>
        </Label>
        <Input
          id="firstName"
          type="text"
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-zinc-200 pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
          {...register('firstName')}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="lastName" className="text-foreground">
          Sobrenome<span className="text-red-500">*</span>
        </Label>
        <Input
          id="lastName"
          type="text"
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-zinc-200 pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
          {...register('lastName')}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email" className="text-foreground">
          Seu melhor e-mail<span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="text"
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-zinc-200 pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
          {...register('email')}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="tel" className="text-foreground">
          Telefone (com DDD)<span className="text-red-500">*</span>
        </Label>
        <Input
          id="tel"
          type="tel"
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-zinc-200 pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
          {...register('tel')}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message" className="text-foreground">
          Mensagem<span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          className="rounded-none border-x-0 border-b-2 border-t-0 border-zinc-950 bg-zinc-200 pl-0 font-medium text-foreground focus-visible:border-b-[#4C6FF7] focus-visible:shadow-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 dark:border-b-zinc-50 dark:bg-zinc-800"
          {...register('message')}
        />
      </div>
      <Button
        disabled={isSubmitting}
        className="w-max bg-[#4C6FF7] text-lg text-zinc-50 hover:bg-[#4C6FF7] hover:brightness-90"
        type="submit"
      >
        Entrar em contato
      </Button>
    </form>
  )
}
