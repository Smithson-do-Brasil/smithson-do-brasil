import { icons } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ServicesItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function ServicesItem({ icon, title, description }: ServicesItemProps) {
  const LucideIcon = icons[icon]

  return (
    <Card className="flex flex-col items-center justify-between gap-2">
      <CardHeader>
        <LucideIcon size={64} />
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-xl text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
