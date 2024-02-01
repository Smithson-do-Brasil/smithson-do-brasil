import { Helmet } from 'react-helmet-async'

import { Form } from './components/form'

export function Contact() {
  return (
    <>
      <Helmet title="Contato" />
      <div className="container flex flex-col items-center justify-center gap-12 py-12 md:h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl text-foreground">Fale conosco</h1>

          <p className="text-xl text-muted-foreground">
            Agradecemos o seu interesse em nos procurar. Use o formulário abaixo
            e entraremos em contato em breve.
          </p>
        </div>

        <Form />

        {/* <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-muted-foreground">
            Se preferir, fale conosco pelo telefone abaixo:
          </h1>

          <a
            href="https://api.whatsapp.com/send?phone=5521964430605&text=Boa%20tarde%20Marcelo,%20gostaria%20de%20tirar%20d%C3%BAvidas%20com%20voc%C3%AA."
            className="w-max text-[#4C6FF7] underline"
            target="_blank"
            rel="noreferrer"
          >
            (21) 964443-0605
          </a>
        </div> */}
      </div>
    </>
  )
}
