import { Helmet } from 'react-helmet-async'

import { ServicesItems } from './components/services-items'

export function Services() {
  return (
    <>
      <Helmet title="Nossos serviços" />
      <div className="space-y-10 lg:space-y-28">
        <div className="relative">
          <div className="absolute h-full w-full bg-zinc-950 opacity-40"></div>
          <img
            src="image-service.png"
            alt="Image"
            className="hidden w-full lg:block"
          />
          <img
            src="image-service-mobile.png"
            alt="Image"
            className="block w-full lg:hidden"
          />
        </div>
        <ServicesItems />
      </div>
    </>
  )
}
