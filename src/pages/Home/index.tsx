import { Helmet } from 'react-helmet-async'

import { Introduction } from './components/introduction'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Introduction />
    </>
  )
}
