import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { Home } from './pages/home'
import { Layout } from './pages/layout'

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
    ],
  },
])
