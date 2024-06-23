import { icons } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface DnaItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function DnaItem({ icon, title, description }: DnaItemProps) {
  const LucideIcon = icons[icon]

  return (
    <Card className="flex min-h-80 flex-col items-center justify-between rounded-2xl rounded-bl-none border-[10px] border-r-[4px] border-t-[4px] border-zinc-950 p-6 text-zinc-950 shadow-2xl dark:border-teal-200 dark:text-teal-200 dark:shadow-zinc-600">
      <CardHeader className="w-full items-start justify-start p-0">
        <LucideIcon className="h-14 w-14 lg:h-10 lg:w-10" />
      </CardHeader>
      <CardContent className="space-y-1 p-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
