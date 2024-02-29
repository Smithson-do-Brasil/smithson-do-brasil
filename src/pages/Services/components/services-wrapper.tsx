import { ServicesItem } from './services-item'

export function ServicesWrapper() {
  return (
    <div className="container space-y-10 pb-16 lg:space-y-20">
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
          icon="Cctv"
          title="CFTV"
          description="Serviço realizado por profissionais capacitados, contando com a melhor
          tecnologia e segurança. Instalação em locais estratégicos para garantir a segurança
          do local."
        />
        <ServicesItem
          icon="PcCase"
          title="Reparo em Hardware"
          description="Especialistas em hardware prontos para reparar seus computadores computadores
          pessoais e empresariais. Soluções rápidas e confiáveis para garantir o funcionamento ideal
          dos seus dispositivos."
        />
        <ServicesItem
          icon="Code"
          title="Desenvolvimento Web"
          description="Contamos com uma equipe qualificada e pronta para entregar projetos de
          qualidade com o máximo de desempenho e qualidade."
        />
        <ServicesItem
          icon="Cctv"
          title="CFTV"
          description="Serviço realizado por profissionais capacitados, contando com a melhor
          tecnologia e segurança. Instalação em locais estratégicos para garantir a segurança
          do local."
        />
        <ServicesItem
          icon="PcCase"
          title="Reparo em Hardware"
          description="Especialistas em hardware prontos para reparar seus computadores computadores
          pessoais e empresariais. Soluções rápidas e confiáveis para garantir o funcionamento ideal
          dos seus dispositivos."
        />
      </div>
    </div>
  )
}
