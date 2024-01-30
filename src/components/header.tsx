import { Computer } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/" className="flex items-center gap-2">
          <Computer className="text-md font-bold text-foreground" />
          <h1 className="text-md font-bold text-foreground">
            Smithson do Brasil
          </h1>
        </Link>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">Sobre nós</NavLink>
          <NavLink to="/services">Nossos serviços</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>

        <div className="ml-auto flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
