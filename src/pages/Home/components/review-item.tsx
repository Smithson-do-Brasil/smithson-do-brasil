import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CarouselItem } from '@/components/ui/carousel'

interface ReviewItemProps {
  review: string
  name: string
}

export function ReviewItem({ review, name }: ReviewItemProps) {
  return (
    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
      <div className="flex h-full flex-col gap-4 rounded-lg bg-zinc-50 p-6 text-zinc-950">
        <div className="flex items-start gap-2">
          <Avatar>
            <AvatarImage src={`https://ui-avatars.com/api/?name=${name}`} />
            <AvatarFallback>{name.slice(0, 1).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="space-y-0.5">
            <p className="text-lg font-bold">{name}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold">{review}</h3>
      </div>
    </CarouselItem>
  )
}
