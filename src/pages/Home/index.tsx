import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { Carousel } from './components/carousel'
import { Dna } from './components/dna'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
        <section>
          <Carousel />

          <Dna />
        </section>

        <section className="container flex flex-col items-center justify-between gap-6 py-8 lg:flex-row xl:h-screen xl:gap-20">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-medium text-foreground xl:text-6xl">
              Desbloqueie o Potencial do Seu Negócio com Soluções Digitais
              Personalizadas
            </h1>

            <p className="text-xl text-muted-foreground xl:text-2xl">
              A Smithson do Brasil acredita que cada negócio é único. Por isso,
              oferecemos soluções digitais sob medida que se adaptam às suas
              necessidades específicas. Seja para aumentar a eficiência
              operacional, expandir seu alcance no mercado ou impulsionar suas
              vendas, temos a solução ideal para você.
            </p>

            <Link to="/services">
              <Button className="bg-[#4C6FF7] text-lg text-zinc-50 hover:bg-[#4C6FF7] hover:brightness-75">
                Saiba mais
              </Button>
            </Link>
          </div>

          <img src="image.svg" alt="Banner" className="w-full" />
        </section>
      </div>
      <div className="flex flex-col items-center gap-8 bg-[#4C6FF7] p-16">
        <h2 className="text-center text-2xl font-medium text-zinc-50 lg:text-4xl">
          Acelere seu negócio hoje
        </h2>

        <Link to="/contact">
          <Button className="bg-zinc-50 text-lg text-zinc-950 hover:bg-zinc-50 hover:brightness-90 dark:bg-zinc-950 dark:text-zinc-50 lg:text-xl">
            Entre em contato
          </Button>
        </Link>
      </div>
    </>
  )
}
