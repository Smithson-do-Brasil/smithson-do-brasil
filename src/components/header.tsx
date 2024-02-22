import { Facebook, Instagram, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { title: 'Home', to: '/' },
    { title: 'Sobre nós', to: '/about-us' },
    { title: 'Nossos serviços', to: '/services' },
    { title: 'Contato', to: '/contact' },
  ]

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 hidden  bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(0,0,0,0.5)] lg:block">
        <div className="flex h-16 items-center justify-between gap-6 px-6">
          <Link to="/" className="h-full">
            <img
              src="logo-2.svg"
              alt=""
              className="hidden h-full w-full dark:block"
            />
            <img
              src="logo-2-white.svg"
              alt=""
              className="block h-full w-full dark:hidden"
            />
          </Link>

          <nav className="flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.to}>
                {link.title}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <header className="sticky top-0 z-50 flex items-center justify-between bg-zinc-50 p-4 dark:bg-zinc-950 lg:hidden">
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerTrigger
            className="bg-transparent"
            onClick={() => setOpen(true)}
          >
            <Menu className="text-zinc-950 dark:text-zinc-50" />
          </DrawerTrigger>
          <DrawerContent className="flex h-full w-[50%] flex-col">
            <DrawerHeader className="flex w-full items-center justify-start gap-2 p-4">
              <a
                href="https://facebook.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </DrawerHeader>

            <Separator className="w-full bg-zinc-950 dark:bg-zinc-50" />

            <nav className="flex flex-col space-y-4 p-4 lg:space-y-6">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className="text-sm font-medium"
                  onClick={handleClose}
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>

        <Link to="/">
          <img
            src="logo-2.svg"
            alt=""
            className="hidden h-24 w-24 dark:block"
          />
          <img
            src="logo-2-white.svg"
            alt=""
            className="block h-24 w-24 dark:hidden"
          />
        </Link>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>
    </>
  )
}
