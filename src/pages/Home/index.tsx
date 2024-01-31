import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { Carousel } from './components/carousel'

export function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Helmet title="Home" />
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
        <Carousel />

        <section
          className="container flex flex-col items-center justify-between gap-6 py-8 lg:flex-row xl:h-screen xl:gap-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-medium text-foreground xl:text-6xl">
              Materializamos estratégias em soluções digitais
            </h1>

            <p className="text-xl text-muted-foreground xl:text-2xl">
              Na era da Transformação Digital, o nosso propósito é acelerar os
              negócios dos nossos clientes com inteligência e tecnologia. Aqui,
              toda jornada de transformação é tratada como única.
            </p>

            <Link to="/">
              <Button className="bg-[#4C6FF7] text-lg text-zinc-50 hover:bg-[#4C6FF7] hover:brightness-75">
                Saiba mais
              </Button>
            </Link>
          </div>

          <img src="image.svg" alt="" className="w-full" />
        </section>
      </div>
    </>
  )
}
