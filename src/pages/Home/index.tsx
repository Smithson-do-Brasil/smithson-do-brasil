import { Helmet } from 'react-helmet-async'

import { Dna } from './components/dna'
import { Introduction } from './components/introduction'
import { Numbers } from './components/numbers'
import { Partners } from './components/partners'
import { Services } from './components/services'

export function Home() {
  return (
    <>
      <Helmet title="Home" />

      <div className="space-y-24">
        <Introduction />
        <Partners />
        <Numbers />
        <Dna />
        <Services />
      </div>
    </>
  )
}
