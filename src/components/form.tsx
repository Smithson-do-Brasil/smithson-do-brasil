import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'
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

export function Form(props: ComponentProps<'form'>) {
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
      className={twMerge(
        'flex w-full flex-col items-center gap-4 rounded-lg bg-zinc-50 p-8',
        props.className,
      )}
    >
      <h3 className="font-bold text-xl text-zinc-950 lg:text-2xl">
        A um formulário de distância...
      </h3>
      <p className="text-center font-medium text-base text-zinc-950 lg:text-lg">
        Seus concorrentes saíram na frente enquanto você
        <br /> esperou, mas não por muito tempo.
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
        className="w-full bg-zinc-950 text-lg text-zinc-50 hover:bg-zinc-700 hover:brightness-90"
        type="submit"
      >
        {isSubmitting ? <Loading /> : 'Entrar em contato'}
      </Button>

      <p className="text-center font-medium text-sm text-zinc-950">
        Preencha o formulário para que possamos
        <br /> entrar em <strong>contato. </strong>
        <span className="underline">Estamos prontos para ajudar!</span>
      </p>
    </form>
  )
}
