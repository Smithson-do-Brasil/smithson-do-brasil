import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { Accordion } from './accordion'
import { ServicesItem } from './services-item'

export function Services() {
  return (
    <section className="container space-y-10 lg:space-y-20">
      <Accordion.Root>
        <Accordion.Item value="item-1">
          <Accordion.Trigger title="Hardware" />
          <Accordion.Content>
            <ul className="space-y-4 text-base font-medium lg:text-xl">
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
        <Accordion.Item value="item-2">
          <Accordion.Trigger title="Sistemas" />
          <Accordion.Content>
            <ul className="space-y-4 text-base font-medium lg:text-xl">
              <li>
                Implementação de sistemas de gestão empresarial (ERP) e customer
                relationship management (CRM)
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
        <h2 className="text-center text-2xl font-bold lg:text-4xl">
          E não para por aí...
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <ServicesItem
            icon="Code"
            title="Desenvolvimento de Sites"
            description="Equipe qualificada pronta para entregar projetos de qualidade, incluindo sites institucionais, e-commerce, blogs e landing pages."
          />
          <ServicesItem
            icon="Cctv"
            title="CFTV"
            description="Serviço realizado por profissionais capacitados, com tecnologia e segurança de ponta. Instalação estratégica para garantir a segurança do local."
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

        <Link to="/servicos">
          <Button className="rounded-3xl bg-[#2364AA] p-4 text-base font-medium hover:bg-[#3a75b4] lg:text-lg">
            Conheça nossos serviços
          </Button>
        </Link>
      </div>
    </section>
  )
}
