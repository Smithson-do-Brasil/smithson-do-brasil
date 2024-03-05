import { icons } from 'lucide-react'

interface DnaItemProps {
  icon: keyof typeof icons
  title: string
}

export function DnaItem({ icon, title }: DnaItemProps) {
  const LucideIcon = icons[icon]

  return (
    <article className="flex flex-col items-center gap-3 p-7">
      <LucideIcon size={64} className="text-[#4C6FF7]" />
      <h2 className="text-lg lg:text-2xl">{title}</h2>
    </article>
  )
}
