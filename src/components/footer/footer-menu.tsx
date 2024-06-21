import { ReactNode } from 'react'

interface FooterMenuProps {
  title: string
  children: ReactNode
}

export function FooterMenu({ title, children }: FooterMenuProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>

      {children}
    </div>
  )
}
