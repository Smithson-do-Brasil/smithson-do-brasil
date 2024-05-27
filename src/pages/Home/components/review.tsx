import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent } from '@/components/ui/carousel'

import { ReviewItem } from './review-item'

export function Review() {
  return (
    <section className="space-y-9 bg-[#2364AA] py-16">
      <h2 className="text-center text-3xl font-bold text-zinc-50 lg:text-5xl">
        Confirme com quem já está conosco
      </h2>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-mx-6">
          <ReviewItem
            review="Ótimo atendimento, resolveram meu problema rapidamente e foram honestos com o orçamento."
            name="Gabriel Miguel"
          />
          <ReviewItem
            review="Empresa 1000!! Sempre solucionam meus problemas, muita rapidez e eficiência! O atendimento é ótimo, muito solicitos e atenciosos. Recomendo pra todo mundo!!"
            name="Letícia Jardim"
          />
          <ReviewItem
            review="Trabalho impecável, meu computador foi montado perfeitamente e entregue antes do prazo. Recomendo muito!"
            name="João Gabriel Ramos"
          />
          <ReviewItem
            review="Marcelo é um excelente profissional. Recomendo por sua honestidade e qualidade do serviço."
            name="Renata Ferreira"
          />
          <ReviewItem
            review="Serviço de qualidade e confiança. Se precisar, pode chamar!"
            name="Lorenzo Dellano"
          />
        </CarouselContent>
      </Carousel>
    </section>
  )
}
