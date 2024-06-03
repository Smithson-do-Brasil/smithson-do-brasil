import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

import { Input } from './input'
import { Loading } from './loading'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
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
      className="flex w-full flex-col items-center gap-4 rounded-lg bg-muted p-6"
    >
      <h3 className="text-xl font-bold text-foreground lg:text-2xl">
        A um formulário de distância...
      </h3>
      <p className="text-base font-medium text-foreground lg:text-lg">
        Seus concorrentes saíram na frente enquanto você esperou, mas não por
        muito tempo.
      </p>

      <Input
        id="name"
        type="text"
        placeholder="Seu nome"
        register={register}
        error={errors.name?.message || ''}
      />
      <Input
        id="email"
        type="email"
        placeholder="Seu e-mail"
        register={register}
        error={errors.email?.message || ''}
      />
      <Input
        id="tel"
        type="tel"
        placeholder="Whatsapp ou telefone"
        register={register}
        error={errors.tel?.message || ''}
      />
      <Input
        id="message"
        placeholder="Como podemos te ajudar? Não economize em detalhes!"
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

      <p className="text-center text-sm font-medium text-foreground">
        Preencha o formulário para que possamos entrar em{' '}
        <strong>contato</strong>.{' '}
        <span className="underline">Estamos prontos para ajudar!</span>
      </p>
    </form>
  )
}
