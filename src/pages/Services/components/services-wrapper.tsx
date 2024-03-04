import { ServicesItem } from './services-item'

export function ServicesWrapper() {
  return (
    <div className="container space-y-10 pb-16 lg:space-y-20">
      <h1 className="text-center text-4xl font-bold text-foreground lg:text-7xl">
        Nossos serviços
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServicesItem
          library="lucide"
          icon="Code"
          title="Desenvolvimento de Sites"
          description="Contamos com uma equipe qualificada e pronta para entregar projetos de qualidade com o máximo de desempenho e qualidade. Possuímos em nosso portfólio sites institucionais, e-commerce, blogs e landing pages."
        />
        <ServicesItem
          library="lucide"
          icon="Cctv"
          title="CFTV"
          description="Serviço realizado por profissionais capacitados, contando com a melhor
          tecnologia e segurança. Instalação em locais estratégicos para garantir a segurança
          do local."
        />
        <ServicesItem
          library="lucide"
          icon="PcCase"
          title="Reparo em Hardware"
          description="Especialistas em hardware prontos para reparar seus computadores computadores
          pessoais e empresariais. Soluções rápidas e confiáveis para garantir o funcionamento ideal
          dos seus dispositivos."
        />
        <ServicesItem
          library="simple-icons"
          icon="Microscope"
          title="Microsoft 365"
          description="Contamos com soluções de consultoria e implementação de Microsoft 365 para sua empresa (Aplicações Empresariais, Plataformas de Comunicação, Infraestrutura)."
        />
      </div>
    </div>
  )
}
