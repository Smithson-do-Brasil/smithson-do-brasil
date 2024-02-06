export type CardItemProps = {
  number: string
  title: string
}

export function CardItem({ number, title }: CardItemProps) {
  return (
    <div className="flex flex-col items-center rounded-sm border border-zinc-600 p-8">
      <p className="text-4xl font-bold">+{number}</p>
      <p className="font-medium text-muted-foreground">{title}</p>
    </div>
  )
}
