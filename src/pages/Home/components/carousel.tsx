import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel as ShadcnCarousel,
  CarouselContent,
} from '@/components/ui/carousel'

import { CarouselItem } from './carousel-item'

export function Carousel() {
  return (
    <ShadcnCarousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent className="h-[60vh] lg:h-screen">
        <CarouselItem
          title="Soluções inovadoras e personalizadas para as suas necessidades."
          description="O futuro da tecnologia é agora."
          image="cyber.jpg"
        />
        <CarouselItem
          title="Somos a sua parceira ideal para o sucesso na era digital."
          description="Transforme a sua forma de trabalhar com a nossa expertise em TI."
          image="motherboard.jpg"
        />
        <CarouselItem
          title="Redução de custos e otimização de recursos."
          description="Tecnologia que faz a diferença: Soluções em TI que impulsionam o
          seu negócio."
          image="code-mobile.jpg"
        />
      </CarouselContent>
    </ShadcnCarousel>
  )
}
