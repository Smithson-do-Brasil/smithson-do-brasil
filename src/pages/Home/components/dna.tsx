import { Badge } from '@/components/ui/badge'

import { DnaItem } from './dna-item'

export function Dna() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:gap-20">
      <div className="container space-y-8 text-center">
        <Badge className="border-2 border-[#2364AA] bg-muted px-5 py-2 text-2xl font-medium text-[#2364AA] hover:bg-muted">
          Nossa essência
        </Badge>
        <h2 className="text-center text-3xl font-bold lg:text-5xl">
          O DNA da <span className="text-[#2364AA]">Smithson do Brasil</span>{' '}
          :-)
        </h2>

        <p className="text-lg font-medium lg:text-2xl">
          Diga adeus às complexidades do passado e desbloqueie um caminho mais
          prático para o sucesso de sua operação. Dê boas vindas à{' '}
          <strong className="text-[#2364AA]">
            era da simplicidade e eficiência.
          </strong>
        </p>
      </div>

      <div className="container grid w-full gap-6 lg:grid-cols-3">
        <DnaItem
          icon="HeartHandshake"
          title="Entrega de Valor para Empresas e Pessoas"
          description="Diga adeus às complexidades do passado e desbloqueie um caminho mais prático para o sucesso. É simples como parece e nós fazemos!"
        />
        <DnaItem
          icon="BarChart4"
          title="Evolução do Negócio e Impacto Funcional"
          description="Diga adeus às complexidades do passado e desbloqueie um caminho mais prático para o sucesso. É simples como parece e nós fazemos!"
        />
        <DnaItem
          icon="Wrench"
          title="Expertise Técnica e Excelência Operacional"
          description="Diga adeus às complexidades do passado e desbloqueie um caminho mais prático para o sucesso. É simples como parece e nós fazemos!"
        />
      </div>
    </section>
  )
}
