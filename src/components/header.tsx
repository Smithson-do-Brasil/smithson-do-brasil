import { Computer } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-zinc-50 dark:bg-zinc-950">
        <div className="flex h-16 items-center justify-between gap-6 px-6">
          <Link to="/">
            <Computer className="text-md font-bold text-foreground" />
          </Link>

          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLink to="/about-us">Sobre nós</NavLink>
            <NavLink to="/services">Nossos serviços</NavLink>
            <NavLink to="/contact">Contato</NavLink>
          </nav>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
