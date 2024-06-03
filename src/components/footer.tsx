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
      <div className="flex flex-col items-end justify-between overflow-hidden rounded-lg bg-[#2364AA] sm:flex-row">
        <div className="w-full space-y-3 px-4 py-8 sm:w-2/4 lg:px-8 lg:py-12">
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

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.883365723487!2d-43.3972182882957!3d-22.917672438175153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8f59f2840d1%3A0x25077c1eae0c3c88!2sSmithson%20do%20Brasil%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1709237917909!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
