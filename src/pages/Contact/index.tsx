import { Helmet } from 'react-helmet-async'

import { Form } from './components/form'

export function Contact() {
  return (
    <>
      <Helmet title="Contato" />
      <div className="container flex h-screen flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl">Fale conosco</h1>

          <p className="text-xl text-muted-foreground">
            Agradecemos o seu interesse em nos procurar. Use o formulário abaixo
            e entraremos em contato em breve.
          </p>
        </div>

        <Form />
      </div>
    </>
  )
}
