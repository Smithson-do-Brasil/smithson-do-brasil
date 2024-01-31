import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Carousel() {
  return (
    <ShadcnCarousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="banner.png"
              alt=""
              className="hidden w-full bg-cover md:block"
            />
            <img
              src="banner-mobile.png"
              alt=""
              className="w-full bg-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-foreground text-zinc-50 lg:text-5xl">
                Há mais de 30 anos acelerando negócios
              </h1>
              <p className="text-sm font-semibold text-zinc-100 lg:text-xl">
                Soluções digitais de alto impacto com inteligência e tecnologia
                para gigantes do mercado
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="banner.png"
              alt=""
              className="hidden w-full bg-cover md:block"
            />
            <img
              src="banner-mobile.png"
              alt=""
              className="w-full bg-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-foreground text-zinc-50 lg:text-5xl">
                Há mais de 30 anos acelerando negócios
              </h1>
              <p className="text-sm font-semibold text-zinc-100 lg:text-xl">
                Soluções digitais de alto impacto com inteligência e tecnologia
                para gigantes do mercado
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative">
            <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
            <img
              src="banner.png"
              alt=""
              className="hidden w-full bg-cover md:block"
            />
            <img
              src="banner-mobile.png"
              alt=""
              className="w-full bg-cover lg:hidden"
            />

            <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
              <h1 className="text-2xl font-bold text-foreground text-zinc-50 lg:text-5xl">
                Há mais de 30 anos acelerando negócios
              </h1>
              <p className="font-semibold text-zinc-100 sm:text-sm lg:text-xl">
                Soluções digitais de alto impacto com inteligência e tecnologia
                para gigantes do mercado
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />
    </ShadcnCarousel>
  )
}
