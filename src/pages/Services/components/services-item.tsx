import { icons } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface ServicesItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function ServicesItem({ icon, title, description }: ServicesItemProps) {
  const LucideIcon = icons[icon]
  return (
    <Card className="flex flex-col items-center gap-2">
      <CardHeader>
        <LucideIcon size={64} />
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button>Saiba mais</Button>
      </CardFooter>
    </Card>
  )
}
