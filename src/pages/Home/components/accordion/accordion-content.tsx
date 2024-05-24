import { ReactNode } from 'react'

import { AccordionContent as ShadcnAccordionContent } from '@/components/ui/accordion'

interface AccordionContentProps {
  children: ReactNode
}

export function AccordionContent({ children }: AccordionContentProps) {
  return <ShadcnAccordionContent>{children}</ShadcnAccordionContent>
}
