import { icons } from 'lucide-react'

interface ServicesItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function ServicesItem({ icon, title, description }: ServicesItemProps) {
  const LucideIcon = icons[icon]

  return (
    <div className="flex items-start gap-4">
      <div className="rounded-3xl bg-[#2364AA] p-4">
        <LucideIcon color="white" className="h-6 w-6 lg:h-12 lg:w-12" />
      </div>
      <div>
        <h3 className="text-xl font-bold lg:text-2xl">{title}</h3>
        <p className="text-base text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}
