import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Accordion } from '@/components/accordion'
import { Button } from '@/components/ui/button'

import { ServicesItem } from './services-item'

export function Services() {
  return (
    <section className="container space-y-10 lg:space-y-20" id="services">
      <h2 className="font-bold font-ppformula text-6xl italic">
        Alguns de nossos serviços...
      </h2>

      <Accordion.Root>
        <Accordion.Item value="item-1">
          <Accordion.Trigger title="Assistência Técnica" />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>Reparo de Dispositivos</li>
              <li>Manutenção Preventiva</li>
              <li>Suporte Remoto</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger title="Hardware" />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>Montagem e configuração de computadores</li>
              <li>
                Venda e instalação de periféricos (impressoras, scanners, etc.)
              </li>
              <li>
                Upgrade de componentes (memória RAM, disco rígido, placa
                gráfica)
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger title="Sites e Aplicações" />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>Projeção e Desenvolvimento</li>
              <li>Plataformas Personalizados:</li>
              <li>SEO e Otimização de Performance</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4">
          <Accordion.Trigger title="Sistemas" />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>
                Implementação de sistemas de gestão empresarial e customer
                relationship management
              </li>
              <li>Desenvolvimento e evolução de sistemas de rede</li>
              <li>
                Integração de sistemas para automação de processos internos
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className="flex flex-col items-center gap-8 lg:gap-24">
        <h2 className="font-bold font-ppformula text-6xl italic">Tem mais!</h2>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <ServicesItem
            icon="Cctv"
            title="Sistemas de Monitoramento"
            description="Serviço realizado por profissionais capacitados, com tecnologia e segurança de ponta. Instalação estratégica para garantir a segurança do local."
          />
          <ServicesItem
            icon="Code"
            title="Desenvolvimento de Sites"
            description="Equipe qualificada pronta para entregar projetos de qualidade, incluindo sites institucionais, e-commerce, blogs e landing pages."
          />
          <ServicesItem
            icon="PcCase"
            title="Reparo em Hardware"
            description="Especialistas prontos para reparar computadores pessoais e empresariais. Soluções rápidas e confiáveis para o funcionamento ideal dos dispositivos."
          />
          <ServicesItem
            icon="Grid2x2"
            title="Microsoft 365"
            description="Soluções de consultoria e implementação de Microsoft 365 para sua empresa, incluindo Aplicações Empresariais, Plataformas de Comunicação e Infraestrutura."
          />
          <ServicesItem
            icon="Megaphone"
            title="Tráfego Pago"
            description="Maximize a visibilidade online da sua empresa com o tráfego pago. Direcionamos o público certo para o seu site, aumentando a exposição e impulsionando as conversões."
          />
          <ServicesItem
            icon="ShoppingCart"
            title="Venda de Computadores"
            description="Ampla seleção de computadores de qualidade, incluindo modelos empresariais e pessoais, para impulsionar a produtividade e segurança do seu negócio."
          />
        </div>

        <Link to="#contact">
          <Button className="gap-1 rounded-3xl bg-zinc-950 p-4 font-medium text-base text-zinc-50 hover:brightness-90 dark:bg-teal-200 dark:text-zinc-950 lg:text-lg">
            Fale conosco
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
