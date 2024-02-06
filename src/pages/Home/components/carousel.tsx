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
              src="banner.png"
              alt="Banner"
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src="banner-mobile.png"
              alt="Banner"
              className="h-full w-full object-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
                Há mais de 30 anos acelerando negócios
              </h1>
              <p className="text-sm font-semibold text-muted-foreground lg:text-xl">
                Soluções digitais de alto impacto com inteligência e tecnologia
                para gigantes do mercado
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-full">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="banner.png"
              alt="Banner"
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src="banner-mobile.png"
              alt="Banner"
              className="h-full w-full object-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
                Há mais de 30 anos acelerando negócios
              </h1>
              <p className="text-sm font-semibold text-muted-foreground lg:text-xl">
                Soluções digitais de alto impacto com inteligência e tecnologia
                para gigantes do mercado
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-full">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="banner.png"
              alt="Banner"
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src="banner-mobile.png"
              alt="Banner"
              className="h-full w-full object-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
                Há mais de 30 anos acelerando negócios
              </h1>
              <p className="font-semibold text-muted-foreground sm:text-sm lg:text-xl">
                Soluções digitais de alto impacto com inteligência e tecnologia
                para gigantes do mercado
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </ShadcnCarousel>
  )
}
