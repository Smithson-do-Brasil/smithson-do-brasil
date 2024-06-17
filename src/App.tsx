import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { env } from './env'
import { Maintenance } from './pages/maintenance'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="smithson-theme">
        <Helmet titleTemplate="%s | Smithson do Brasil" />
        <Toaster richColors />
        {env.VITE_MAINTENANCE_MODE ? (
          <Maintenance />
        ) : (
          <RouterProvider router={router} />
        )}
      </ThemeProvider>
    </HelmetProvider>
  )
}
