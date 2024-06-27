import { ReactNode } from 'react'

import { AccordionItem as ShadcnAccordionItem } from '@/components/ui/accordion'

interface AccordionItemProps {
  children: ReactNode
  value: string
}

export function AccordionItem({ children, value }: AccordionItemProps) {
  return (
    <ShadcnAccordionItem value={value} className="border-b-foreground">
      {children}
    </ShadcnAccordionItem>
  )
}
