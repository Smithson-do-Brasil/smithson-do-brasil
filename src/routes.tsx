import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { AboutUs } from './pages/about-us'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Layout } from './pages/layout'
import { Services } from './pages/services'

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
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
