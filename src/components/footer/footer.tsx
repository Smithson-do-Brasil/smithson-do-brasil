import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Form } from '../form'
import { Nav } from '../nav'
import { Separator } from '../ui/separator'
import { FooterAnimation } from './footer-animation'
import { FooterMenu } from './footer-menu'

export function Footer() {
  return (
    <footer className="bg-teal-200 pt-16 dark:bg-zinc-950">
      <section className="container relative flex items-end justify-between overflow-hidden rounded-lg bg-muted px-0 text-foreground dark:bg-teal-200 dark:text-zinc-950">
        <div className="w-full space-y-3 px-4 py-8 sm:w-2/4 lg:px-8 lg:py-12">
          <img
            src="icon-footer.svg"
            alt=""
            className="absolute left-8 top-11"
          />
          <h2 className="text-3xl font-bold lg:text-5xl">
            Tudo em um só lugar!
          </h2>
          <p className="text-lg lg:text-xl">
            Quem diria que era possível, não?
          </p>
        </div>

        <img src="/hero-image.png" alt="" className="m-0 h-full" />
      </section>

      <section className="relative flex items-center justify-between overflow-hidden bg-teal-200 px-20 py-24 text-zinc-950 dark:bg-zinc-950">
        <div className="space-y-5">
          <h3 className="font-ppformula text-6xl font-bold dark:text-teal-200">
            Fale Conosco
          </h3>
          <p className="text-xl font-medium dark:text-teal-200">
            Precisando de suporte técnico ou
            <br /> gostaria de discutir seu próximo
            <br /> projeto?
          </p>
          <p className="text-xl font-medium dark:text-teal-200">
            Estamos aqui.
          </p>
        </div>

        <Form className="z-10 w-2/4" />

        <FooterAnimation />
      </section>

      <section className="bg-zinc-950">
        <div className="container flex justify-between py-8 text-zinc-50">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Smithson do Brasil</h3>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/smithson-do-brasil/"
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:brightness-90"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/smithsondobrasil/"
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:brightness-90"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:brightness-90"
              >
                <SiFacebook size={20} />
              </a>
            </div>
          </div>

          <FooterMenu title="Institucional">
            <Nav.Root className="flex flex-col items-start gap-1">
              <Nav.Link to="/quem-somos">A Smithson</Nav.Link>
              <Nav.Link to="/contato">Carreiras</Nav.Link>
            </Nav.Root>
          </FooterMenu>

          <FooterMenu title="Serviços e soluções">
            <Nav.Root className="flex flex-col items-start gap-1">
              <Nav.Link to="/servicos">
                Desenvolvimento e criação de sites
              </Nav.Link>
              <Nav.Link to="/servicos">Portaria e interfonia</Nav.Link>
              <Nav.Link to="/servicos">Travas eletrônicas</Nav.Link>
              <Nav.Link to="/servicos">
                Sistemas de monitoramento (CFTV)
              </Nav.Link>
              <Nav.Link to="/servicos">Tráfego pago</Nav.Link>
              <Nav.Link to="/servicos">Microsoft 365</Nav.Link>
            </Nav.Root>
          </FooterMenu>

          <FooterMenu title="Fale conosco">
            <Nav.Root className="flex flex-col items-start gap-1">
              <Nav.Link to="tel:+5521970452371">
                <Phone size={16} />
                (21) 97045-2371
              </Nav.Link>
              <Nav.Link to="https://api.whatsapp.com/send?l=pt&phone=5521970452371&text=Ol%C3%A1!%20Vim%20do%20site%20e%20preciso%20de%20ajuda.">
                <SiWhatsapp size={16} />
                (21) 97045-2371
              </Nav.Link>
              <Nav.Link to="mailto:contato@smithson.com.br">
                <Mail size={16} />
                contato@smithson.com.br
              </Nav.Link>
            </Nav.Root>
          </FooterMenu>
        </div>
      </section>

      <Separator />

      <section className="bg-zinc-950">
        <div className="container flex flex-col items-center justify-between py-4 text-zinc-50 lg:flex-row lg:gap-0">
          <p className="text-center text-sm">
            &copy;{new Date().getFullYear()} Smithson do Brasil - CNPJ
            00.460.978/0001-36.
          </p>

          <Link
            to="/politicas-de-privacidade-e-seguranca"
            className="text-sm hover:underline"
          >
            Politicas de Privacidade e Segurança
          </Link>
        </div>
      </section>
    </footer>
  )
}
