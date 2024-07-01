import { SiInstagram, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Form } from '../form'
import { Nav } from '../nav'
import { Separator } from '../ui/separator'
import { FooterIcon } from './footer-icon'
import { FooterMenu } from './footer-menu'

export function Footer() {
  return (
    <footer className="bg-teal-200 pt-16 dark:bg-zinc-950" id="contact">
      <section className="container relative flex flex-col-reverse overflow-hidden text-foreground lg:flex-row lg:items-end lg:justify-between lg:rounded-lg lg:bg-muted lg:px-0">
        <div className="w-full bg-muted px-4 py-8 text-center lg:w-2/4 lg:space-y-3 lg:bg-transparent lg:px-8 lg:py-12 lg:text-start">
          <FooterIcon />
          <h2 className="font-bold text-2xl lg:text-4xl">
            Tudo em um só lugar!
          </h2>
          <p className="text-base lg:text-xl">
            Quem diria que era possível, não?
          </p>
        </div>

        <img src="/hero-image.png" alt="" className="m-0 h-full max-w-full" />
      </section>

      <section className="relative flex flex-col items-center justify-between gap-4 overflow-hidden bg-teal-200 px-8 py-8 text-zinc-950 dark:bg-zinc-950 lg:flex-row lg:gap-0 lg:px-20 lg:py-24">
        <div className="w-full space-y-2 text-center lg:w-2/4 lg:space-y-5 lg:text-start">
          <h3 className="font-bold font-ppformula text-4xl text-foreground lg:text-6xl">
            Fale Conosco
          </h3>
          <p className="font-medium text-base text-foreground md:text-xl lg:max-w-80">
            Precisando de suporte técnico ou gostaria de discutir seu próximo
            projeto?
          </p>
          <p className="font-medium text-base text-foreground lg:text-xl">
            Estamos aqui.
          </p>
        </div>

        <Form className="z-10 lg:w-2/4" />
      </section>

      <section className="bg-muted text-zinc-950">
        <div className="container flex flex-col justify-between gap-4 py-8 text-zinc-50 lg:flex-row">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl text-foreground">
              Smithson do Brasil
            </h3>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/smithson-do-brasil/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-all hover:brightness-90"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/smithsondobrasil/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-all hover:brightness-90"
              >
                <SiInstagram size={20} />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-all hover:brightness-90"
              >
                <SiFacebook size={20} />
              </a> */}
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
              <Nav.Link to="mailto:contato@smithson.com.br">
                <Mail size={16} />
                contato@smithson.com.br
              </Nav.Link>
            </Nav.Root>
          </FooterMenu>
        </div>
      </section>

      <Separator className="bg-foreground" />

      <section className="bg-muted">
        <div className="container flex flex-col items-start justify-between gap-1 py-4 text-xs dark:text-zinc-50 lg:flex-row lg:gap-0 lg:text-sm">
          <p className="space-x-1">
            &copy; <span>{new Date().getFullYear()} Smithson do Brasil</span>
          </p>

          <Link
            to="/politicas-de-privacidade-e-seguranca"
            className="underline"
          >
            Politicas de Privacidade e Segurança
          </Link>
        </div>
      </section>
    </footer>
  )
}
