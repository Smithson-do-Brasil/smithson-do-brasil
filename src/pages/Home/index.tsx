import { Helmet } from 'react-helmet-async'

import { Carousel } from './components/carousel'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex items-center justify-center">
        <Carousel />
      </div>
    </>
  )
}
