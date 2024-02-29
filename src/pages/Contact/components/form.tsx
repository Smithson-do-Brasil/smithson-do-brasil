import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

import { Input } from './input'
import { Loading } from './loading'

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'O nome é obrigatório.'),
  lastName: z.string().min(1, 'O sobrenome é obrigatório.'),
  email: z.string().email('Insira um e-mail válido.'),
  tel: z.string().min(10, 'Insira um telefone válido.'),
  message: z.string().min(1, 'A mensagem é obrigatória.'),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleContactUs(data: ContactFormSchema) {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      toast.success('Mensagem enviada com sucesso.', {
        duration: 5000,
        icon: '📬',
      })

      reset()
    } catch (error) {
      console.log(error)

      toast.error('Erro ao enviar a mensagem.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleContactUs)}
      className="w-full space-y-4 rounded-lg bg-transparent p-8 dark:bg-zinc-800 lg:w-2/4"
    >
      <Input
        id="firstName"
        type="text"
        label="Nome"
        register={register}
        error={errors.firstName?.message || ''}
      />
      <Input
        id="lastName"
        type="text"
        label="Sobrenome"
        register={register}
        error={errors.lastName?.message || ''}
      />
      <Input
        id="email"
        type="email"
        label="Seu melhor e-mail"
        register={register}
        error={errors.email?.message || ''}
      />
      <Input
        id="tel"
        type="tel"
        label="Telefone (com DDD)"
        register={register}
        error={errors.tel?.message || ''}
      />
      <Input
        id="message"
        label="Mensagem"
        asTextarea
        register={register}
        error={errors.message?.message || ''}
      />

      <Button
        disabled={isSubmitting}
        className="w-full bg-[#4C6FF7] text-lg text-zinc-50 hover:bg-[#4C6FF7] hover:brightness-90"
        type="submit"
      >
        {isSubmitting ? <Loading /> : 'Entrar em contato'}
      </Button>
    </form>
  )
}
