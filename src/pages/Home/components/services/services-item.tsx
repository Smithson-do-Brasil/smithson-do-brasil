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
      <div className="rounded-3xl bg-zinc-950 p-4 dark:bg-zinc-50">
        <LucideIcon className="h-6 w-6 text-zinc-50 dark:text-zinc-950 lg:h-12 lg:w-12" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-foreground lg:text-2xl">
          {title}
        </h3>
        <p className="text-base text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}
