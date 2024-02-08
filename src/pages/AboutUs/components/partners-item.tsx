import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
            className="group flex justify-center ease-in-out md:basis-1/2 lg:basis-1/3"
          >
            <a
              href={partner.url}
              target="_blank"
              className="flex w-full items-center justify-center rounded-sm border-2 border-muted p-4 lg:p-8"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={partner.image}
                alt={partner.title}
                className="max-w-full transition-all duration-300 ease-in-out group-hover:scale-110"
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6" />
      <CarouselNext className="-right-6" />
    </Carousel>
  )
}
