import { Helmet } from 'react-helmet-async'

export function AboutUs() {
  return (
    <>
      <Helmet title="Sobre nós" />
      <div className="flex h-screen items-center justify-center">
        <h1>Sobre nós</h1>
      </div>
    </>
  )
}
