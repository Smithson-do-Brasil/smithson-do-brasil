import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Whatsapp } from '@/components/whatsapp'

export function Layout() {
  return (
    <div>
      <Header />

      <div>
        <Outlet />

        <Whatsapp />
      </div>

      <Footer />
    </div>
  )
}
