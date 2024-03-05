import { Helmet } from 'react-helmet-async'

import { ServicesWrapper } from './components/services-wrapper'

export function Services() {
  return (
    <>
      <Helmet title="Nossos serviços" />
      <section className="space-y-10 lg:space-y-28">
        <div className="relative">
          <div className="absolute h-full w-full bg-zinc-950 opacity-40"></div>
          <img
            src="image-service.png"
            alt="Banner"
            className="hidden w-full lg:block"
          />
          <img
            src="image-service-mobile.png"
            alt="Banner"
            className="block w-full lg:hidden"
          />

          <h1 className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-4xl font-bold text-zinc-50 lg:text-7xl">
            Nossos serviços
          </h1>
        </div>
        <ServicesWrapper />
      </section>
    </>
  )
}
