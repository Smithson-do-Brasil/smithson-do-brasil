import { icons } from 'lucide-react'

interface DnaItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function DnaItem({ icon, title, description }: DnaItemProps) {
  const LucideIcon = icons[icon]

  return (
    <div className="flex h-72 flex-col items-center justify-between rounded-3xl bg-[#2364AA] p-7 text-zinc-50 lg:h-96">
      <LucideIcon className="h-16 w-16 lg:h-24 lg:w-24" />
      <div className="space-y-2">
        <h2 className="text-xl font-bold lg:text-3xl">{title}</h2>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
    </div>
  )
}
