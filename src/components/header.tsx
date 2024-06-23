import { Link } from 'react-router-dom'

import { HeaderMobile } from './header-mobile'
import { Logo } from './logo'
import { Nav } from './nav'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  // const navLinks = [
  //   { title: 'Home', to: '/' },
  //   { title: 'Sobre', to: '/quem-somos' },
  //   { title: 'Serviços', to: '/servicos' },
  //   { title: 'Contato', to: '/contato' },
  // ]

  const temporaryNavLinks = [
    // { title: 'Home', to: '#introduction' },
    { title: 'Sobre', to: '#aboutUs' },
    { title: 'Serviços', to: '#services' },
    { title: 'Contato', to: '#contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 hidden  bg-zinc-50 dark:bg-zinc-950 lg:block">
        <div className="flex h-16 items-center justify-between gap-6 px-20 py-3">
          <Link to="/" className="h-full">
            <Logo />
          </Link>

          <Nav.Root className="space-x-4 lg:space-x-6">
            {temporaryNavLinks.map((link, index) => (
              // <Nav.Link key={index} to={link.to}>
              //   {link.title}
              // </Nav.Link>
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

      <HeaderMobile navLinks={temporaryNavLinks} />
    </>
  )
}
