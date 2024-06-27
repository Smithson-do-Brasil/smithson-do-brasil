import { ReactNode } from 'react'

interface FooterMenuProps {
  title: string
  children: ReactNode
}

export function FooterMenu({ title, children }: FooterMenuProps) {
  return (
    <div className="space-y-2">
      <h2 className="font-bold text-lg text-foreground">{title}</h2>
      {children}
    </div>
  )
}
