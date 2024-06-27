import { Outlet, ScrollRestoration } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Whatsapp } from '@/components/whatsapp'

export function Layout() {
  return (
    <div>
      <Header />

      <div>
        <ScrollRestoration />

        <Outlet />

        <Whatsapp />
        <ScrollToTop />
      </div>

      <Footer />
    </div>
  )
}
