import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

import { Cards } from './components/cards'
import { Partners } from './components/partners'

export function AboutUs() {
  return (
    <div className="mb-12">
      <Helmet title="Sobre nós" />
      <div className="container flex h-screen flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex flex-col gap-7 text-base font-medium">
          <h1 className="text-4xl font-bold uppercase text-[#4C6FF7] lg:text-6xl">
            Líderes em soluções de TI
          </h1>
          <p>
            Com mais de 25 anos de experiência, oferecemos uma abordagem
            personalizada e inovadora para atender às necessidades únicas de
            cada empresa.
          </p>
          <p>
            Nosso objetivo é maximizar a eficiência dos nossos clientes através
            da utilização de tecnologias avançadas.
          </p>

          <Button className="w-max bg-[#4C6FF7] text-lg font-medium text-zinc-50 hover:bg-[#4C6FF7] hover:brightness-90">
            Fale Conosco
          </Button>
        </div>

        <img src="about-us.jpg" alt="Image" className="lg:w-2/4" />
      </div>

      <Cards />

      <Partners />
    </div>
  )
}
