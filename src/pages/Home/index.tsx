import { Helmet } from 'react-helmet-async'

import { Banner } from './components/banner'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex items-center justify-center">
        <Banner />
      </div>
    </>
  )
}
