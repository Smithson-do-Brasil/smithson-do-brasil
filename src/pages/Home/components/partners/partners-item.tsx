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
          delay: 4000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {data.map((partner, index) => (
          <CarouselItem
            key={index}
            className="group flex basis-1/2 justify-center ease-in-out md:basis-1/3 lg:basis-1/4"
          >
            <a
              href={partner.url}
              target="_blank"
              className="flex w-full max-w-56 items-center justify-center"
              rel="noreferrer"
            >
              <figure>
                <img
                  src={partner.image}
                  alt={partner.title}
                  className="max-w-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-125"
                />
                <figcaption className="hidden">{partner.title}</figcaption>
              </figure>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
