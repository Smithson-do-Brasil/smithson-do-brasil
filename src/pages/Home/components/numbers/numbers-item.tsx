interface NumbersItemProps {
  number: number
  title: string
}

export function NumbersItem({ number, title }: NumbersItemProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-5xl font-bold lg:text-7xl">{number}+</p>
      <p className="text-lg font-bold lg:text-xl">{title}</p>
    </div>
  )
}
