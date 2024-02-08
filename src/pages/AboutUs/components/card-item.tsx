export type CardItemProps = {
  number: string
  title: string
  aosDirection?: string
}

export function CardItem({ number, title, aosDirection }: CardItemProps) {
  return (
    <div
      className="flex flex-col items-center rounded-sm border border-muted-foreground p-8"
      data-aos={aosDirection}
      data-aos-duration="1000"
    >
      <p className="text-4xl font-bold">+{number}</p>
      <p className="font-medium text-muted-foreground">{title}</p>
    </div>
  )
}
