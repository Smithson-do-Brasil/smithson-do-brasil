interface NumbersItemProps {
  number: number
  title: string
}

export function NumbersItem({ number, title }: NumbersItemProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-5xl lg:text-7xl">{number}+</p>
      <p className="font-bold text-lg lg:text-xl">{title}</p>
    </div>
  )
}
