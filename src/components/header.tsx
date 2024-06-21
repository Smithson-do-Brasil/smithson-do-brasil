import { Link } from 'react-router-dom'

import { HeaderMobile } from './header-mobile'
import { Nav } from './nav'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  const navLinks = [
    { title: 'Home', to: '/' },
    { title: 'Sobre', to: '/quem-somos' },
    { title: 'Serviços', to: '/servicos' },
    { title: 'Contato', to: '/contato' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 hidden  bg-zinc-50 dark:bg-zinc-950 lg:block">
        <div className="flex h-16 items-center justify-between gap-6 px-20 py-3">
          <Link to="/" className="h-full">
            <img
              src="logo-smithson.svg"
              alt=""
              className="h-full dark:hidden"
            />
            <img
              src="logo-smithson-dark.svg"
              alt=""
              className="hidden h-full dark:block"
            />
          </Link>

          <Nav.Root className="space-x-4 lg:space-x-6">
            {navLinks.map((link, index) => (
              <Nav.Link key={index} to={link.to}>
                {link.title}
              </Nav.Link>
            ))}
          </Nav.Root>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <HeaderMobile navLinks={navLinks} />
    </>
  )
}
