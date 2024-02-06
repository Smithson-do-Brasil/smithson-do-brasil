import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export type Partners = {
  image: string
  title: string
  url: string
}

interface PartnersData {
  data: Partners[]
}

export function PartnersItem({ data }: PartnersData) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {data.map((partner, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center md:basis-1/2 lg:basis-1/3"
          >
            <a
              href={partner.url}
              target="_blank"
              className="relative flex w-full items-center justify-center rounded-sm p-4 dark:bg-foreground lg:p-8"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={partner.image}
                alt={partner.title}
                className="max-w-full"
              />

              <div className="absolute z-50 h-full w-full bg-[rgba(255,255,255,0.5)] transition-all dark:bg-[rgba(0,0,0,0.6)] dark:hover:bg-transparent"></div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
