import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type NavRootProps = ComponentProps<'nav'> & {
  children: ReactNode
}

export function NavRoot({ children, ...props }: NavRootProps) {
  return (
    <nav className={twMerge('flex items-center', props.className)}>
      {children}
    </nav>
  )
}
