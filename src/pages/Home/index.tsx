import { Helmet } from 'react-helmet-async'

import { Introduction } from './components/introduction'
import { Partners } from './components/partners'

export function Home() {
  return (
    <>
      <Helmet title="Home" />

      <Introduction />
      <Partners />
    </>
  )
}
