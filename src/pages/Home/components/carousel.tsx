import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

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
      <CarouselContent className="h-[60vh]">
        <CarouselItem>
          <div className="relative h-full">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="cyber.jpg"
              alt="Banner"
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src="cyber-mobile.jpg"
              alt="Banner"
              className="h-full w-full object-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
                O futuro da tecnologia é agora.
              </h1>
              <p className="text-sm font-semibold text-muted-foreground lg:text-xl">
                Soluções inovadoras e personalizadas para as suas necessidades.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-full">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="motherboard.jpg"
              alt="Banner"
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src="motherboard-mobile.jpg"
              alt="Banner"
              className="h-full w-full object-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
                Transforme a sua forma de trabalhar com a nossa expertise em TI.
              </h1>
              <p className="text-sm font-semibold text-muted-foreground lg:text-xl">
                Somos a sua parceira ideal para o sucesso na era digital.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-full">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="code.jpg"
              alt="Banner"
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src="code-mobile.jpg"
              alt="Banner"
              className="h-full w-full object-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
                Tecnologia que faz a diferença: Soluções em TI que impulsionam o
                seu negócio.
              </h1>
              <p className="font-semibold text-muted-foreground sm:text-sm lg:text-xl">
                Redução de custos e otimização de recursos.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </ShadcnCarousel>
  )
}
