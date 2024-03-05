import { Mail, MapPin, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Form } from './components/form'

export function Contact() {
  return (
    <>
      <Helmet title="Contato" />
      <div className="container flex flex-col items-center justify-center gap-12 py-12 xl:flex-row">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Entre em contato conosco
          </h2>

          <p className="text-lg text-muted-foreground">
            Estamos ansiosos para ouvir de você! Por favor, preencha o
            formulário abaixo e entraremos em contato o mais breve possível.
          </p>

          <Form />
        </div>

        <section className="space-y-8 rounded-lg bg-zinc-100 p-8">
          <h2 className="text-2xl font-bold text-zinc-950">
            Outras formas de contato
          </h2>
          <p className="text-lg text-zinc-950">
            Se preferir, sinta-se à vontade para entrar em contato conosco pelos
            meios abaixo. Estamos disponíveis para ajudá-lo de qualquer maneira
            que precisar.
          </p>

          <section className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin size={24} className="fill-muted" />
              <p className="text-zinc-950">
                Avenida dos Mananciais, 1720 - Taquara, RJ
              </p>
            </div>
            <a
              href="mailto:chamados@smithson.com.br?subject=Orçamento&body=Gostaria de entrar em contato"
              className="flex gap-2"
              rel="noreferrer"
              target="_blank"
            >
              <Mail size={24} className="fill-muted" />
              <p className="text-zinc-950">chamados@smithson.com.br</p>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521999991051&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
              className="flex gap-2"
              rel="noreferrer"
              target="_blank"
            >
              <Phone size={24} className="fill-muted" />
              <p className="text-zinc-950">(21) 99999-1051</p>
            </a>
          </section>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.883365723487!2d-43.3972182882957!3d-22.917672438175153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8f59f2840d1%3A0x25077c1eae0c3c88!2sSmithson%20do%20Brasil%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1709237917909!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </>
  )
}
