import { Computer } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NavLink } from '../nav-link'
import { ThemeToggle } from '../theme/theme-toggle'

export function Desktop() {
  return (
    <header className="sticky top-0 z-50 hidden bg-zinc-50 dark:bg-zinc-950 lg:block">
      <div className="flex h-16 items-center justify-between gap-6 px-6">
        <Link to="/">
          <Computer className="text-foreground" size={28} />
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
    </header>
  )
}
