import { ReactNode } from 'react'

import { Accordion } from '@/components/ui/accordion'

interface AccordionRootProps {
  children: ReactNode
}

export function AccordionRoot({ children }: AccordionRootProps) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      {children}
    </Accordion>
  )
}
