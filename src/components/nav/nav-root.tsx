import { ReactNode } from 'react'

export interface NavRootProps {
  children: ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">{children}</nav>
  )
}
