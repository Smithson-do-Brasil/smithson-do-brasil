import { Helmet } from 'react-helmet-async'

import { Form } from './components/form'

export function Contact() {
  return (
    <>
      <Helmet title="Contato" />
      <div className="container flex flex-col items-center justify-center gap-12 py-12 md:h-screen">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl text-foreground">Fale conosco</h1>

          <p className="text-xl text-muted-foreground">
            Agradecemos o seu interesse em nos procurar. Use o formulário abaixo
            e entraremos em contato em breve.
          </p>
        </div>

        <Form />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.883365723487!2d-43.3972182882957!3d-22.917672438175153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8f59f2840d1%3A0x25077c1eae0c3c88!2sSmithson%20do%20Brasil%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1709237917909!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  )
}
