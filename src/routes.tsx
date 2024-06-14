import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './pages/_layout'
import { NotFound } from './pages/404'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Policies } from './pages/Policies'
import { Services } from './pages/Services'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/quem-somos',
        element: <AboutUs />,
      },
      {
        path: '/servicos',
        element: <Services />,
      },
      {
        path: '/contato',
        element: <Contact />,
      },
      {
        path: '/politicas-de-privacidade-e-seguranca/',
        element: <Policies />,
      },
    ],
  },
])
