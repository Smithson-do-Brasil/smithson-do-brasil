import { CarouselItem as CarouselItemShadcn } from '@/components/ui/carousel'

interface CarouselItemProps {
  title: string
  description: string
  image: string
}

export function CarouselItem({ title, description, image }: CarouselItemProps) {
  return (
    <CarouselItemShadcn>
      <div className="relative h-full">
        <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
        <img src={image} alt="Banner" className="h-full w-full object-cover" />

        <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold text-zinc-50 lg:text-5xl">
            {title}
          </h2>
          <p className="text-sm font-semibold text-zinc-300 lg:text-xl">
            {description}
          </p>
        </div>
      </div>
    </CarouselItemShadcn>
  )
}
