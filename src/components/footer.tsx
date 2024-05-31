import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { FooterMenu } from './footer-menu'
import { Nav } from './nav'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer className="container space-y-8 px-8 pb-8">
      <div className="flex flex-col items-end justify-between overflow-hidden rounded-2xl bg-[#2364AA] sm:flex-row">
        <div className="w-full space-y-3 py-12 pl-8 sm:w-2/4">
          <h2 className="text-3xl font-bold text-zinc-50 lg:text-5xl">
            Tudo em um só lugar!
          </h2>
          <p className="text-lg text-zinc-50 lg:text-xl">
            Quem diria que era possível, não?
          </p>
          <Button className="rounded-full bg-zinc-50 text-[#2364AA] hover:bg-zinc-50 hover:brightness-90">
            Entre em contato
          </Button>
        </div>

        <img src="hero-image.png" alt="" className="w-full sm:w-2/4" />
      </div>

      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Smithson do Brasil</h3>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/felipecfvbastos/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin className="dark:text-zinc-50" size={20} />
            </a>
            <a
              href="https://www.instagram.com/smithsondobrasil/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram className="dark:text-zinc-50" size={20} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <SiWhatsapp className="dark:text-zinc-50" size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <SiFacebook className="dark:text-zinc-50" size={20} />
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
            <Nav.Link to="/servicos" data-current={false}>
              Desenvolvimento e criação de sites
            </Nav.Link>
            <Nav.Link to="/servicos" data-current={false}>
              Portaria e interfonia
            </Nav.Link>
            <Nav.Link to="/servicos" data-current={false}>
              Travas eletrônicas
            </Nav.Link>
            <Nav.Link to="/servicos" data-current={false}>
              Sistemas de monitoramento (CFTV)
            </Nav.Link>
            <Nav.Link to="/servicos" data-current={false}>
              Tráfego pago
            </Nav.Link>
            <Nav.Link to="/servicos" data-current={false}>
              Microsoft 365
            </Nav.Link>
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

      <Separator />

      <div className="flex flex-col items-center justify-between gap-2 lg:flex-row lg:gap-0">
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
    </footer>
  )
}
