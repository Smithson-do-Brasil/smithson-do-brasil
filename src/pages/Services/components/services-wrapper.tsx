import { useAllPrismicDocumentsByType } from '@prismicio/react'

import { ServicesItem } from './services-item'

export function ServicesWrapper() {
  const [documents] = useAllPrismicDocumentsByType('services')

  console.log(documents)

  return (
    <div className="container space-y-10 pb-16 lg:space-y-20">
      <h1 className="text-center text-4xl font-bold text-foreground lg:text-7xl">
        Nossos serviços
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {documents?.map((document) => (
          <ServicesItem
            key={document.id}
            icon={document.data.icon}
            title={document.data.service_name[0].text}
            description={document.data.description[0].text}
            id={document.id}
          />
        ))}
      </div>
    </div>
  )
}
