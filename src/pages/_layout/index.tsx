import { Outlet, ScrollRestoration } from 'react-router-dom'

import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header'
import { Whatsapp } from '@/components/whatsapp'

export function Layout() {
  return (
    <div>
      <Header />

      <div>
        <ScrollRestoration />

        <Outlet />

        <Whatsapp />
      </div>

      <Footer />
    </div>
  )
}
