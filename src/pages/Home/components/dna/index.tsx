import { DnaIcon } from './dna-icon'
import { DnaItem } from './dna-item'

export function Dna() {
  return (
    <section className="relative flex flex-col items-end justify-center gap-8 lg:gap-24">
      <div className="container space-y-5 text-center lg:text-end">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          Nossa essência
        </h2>
        <p className="ml-auto w-full font-medium text-base lg:w-2/4 lg:text-xl">
          A empresa que você chama quando está com problemas - ou quando quer
          evitar eles... na Smithson, acreditamos que a tecnologia deve ser uma
          aliada que simplifica a vida e impulsiona negócios, não o contrário.
        </p>
      </div>

      <div className="container z-10 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DnaItem
          icon="HeartHandshake"
          title="Entrega de Valor para Empresas e Pessoas"
          description="Na Smithson, nosso foco é entregar soluções que fazem a diferença. Trabalhamos para garantir que nossos clientes recebam o melhor!"
        />
        <DnaItem
          icon="BarChart4"
          title="Evolução do Negócio e Impacto Funcional"
          description="Nossa missão é acompanhar as tendências e aplicar inovações que geram o crescimento e melhoram a funcionalidade da operação."
        />
        <DnaItem
          icon="Wrench"
          title="Expertise Técnica e Excelência Operacional"
          description="Nossa equipe é composta por especialistas que dominam suas áreas e estão sempre prontos para enfrentar qualquer desafio tecnológico!"
        />
        <DnaItem
          icon="Wrench"
          title="Parceria e Confiança Duradoura"
          description="Valorizamos nossas relações de longo prazo construídas. A confiança que estabelecemos é fruto de um trabalho consistente e qualitativo!"
        />
      </div>

      <div className="absolute bottom-4 right-1/3">
        <DnaIcon />
      </div>
    </section>
  )
}
