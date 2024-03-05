import { Helmet } from 'react-helmet-async'

import { Cards } from './components/cards'
import { Partners } from './components/partners'
import { Timeline } from './components/timeline'

export function AboutUs() {
  return (
    <main className="container mb-12 flex flex-col gap-8 pt-8">
      <Helmet title="Sobre nós" />

      <Timeline />

      <Cards />

      <Partners />
    </main>
  )
}
