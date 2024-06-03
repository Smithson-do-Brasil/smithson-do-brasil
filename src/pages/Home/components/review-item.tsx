import { CarouselItem } from '@/components/ui/carousel'

interface ReviewItemProps {
  review: string
  name: string
  role: string
  image: string
}

export function ReviewItem({ review, name, role, image }: ReviewItemProps) {
  return (
    <CarouselItem className="md:basis-1/2 md:pl-4 lg:basis-1/3">
      <div className="flex h-full flex-col gap-12 rounded-sm bg-zinc-50 p-6 text-zinc-950 md:rounded-lg">
        <img src={image} alt={name} className="ml-auto max-w-48 text-end" />

        <p className="text-base font-medium md:text-lg">{review}</p>

        <div className="space-y-0.5">
          <p className="text-base font-bold md:text-lg">{name}</p>
          <p className="text-sm text-zinc-800 md:text-base">{role}</p>
        </div>
      </div>
    </CarouselItem>
  )
}
