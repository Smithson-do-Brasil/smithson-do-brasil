import { AccordionTrigger as ShadcnAccordionTrigger } from '@/components/ui/accordion'

interface AccordionTriggerProps {
  title: string
}

export function AccordionTrigger({ title }: AccordionTriggerProps) {
  return (
    <ShadcnAccordionTrigger className="font-bold text-2xl lg:text-4xl">
      {title}
    </ShadcnAccordionTrigger>
  )
}
