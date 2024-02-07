import { ServicesItem } from './services-item'

export function ServicesWrapper() {
  return (
    <div className="container space-y-10 pb-16 lg:space-y-32">
      <h1 className="text-center text-4xl font-bold text-foreground lg:text-7xl">
        Nossos serviços
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServicesItem
          icon="Code"
          title="Desenvolvimento Web"
          description="Contamos com uma equipe qualificada e pronta para entregar projetos de
          qualidade com o máximo de desempenho e qualidade."
        />
        <ServicesItem
          icon="Code"
          title="Desenvolvimento Web"
          description="Contamos com uma equipe qualificada e pronta para entregar projetos de
          qualidade com o máximo de desempenho e qualidade."
        />
        <ServicesItem
          icon="Code"
          title="Desenvolvimento Web"
          description="Contamos com uma equipe qualificada e pronta para entregar projetos de
          qualidade com o máximo de desempenho e qualidade."
        />
      </div>
    </div>
  )
}
