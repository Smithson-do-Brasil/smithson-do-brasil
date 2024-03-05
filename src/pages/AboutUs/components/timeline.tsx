import { TimelineItem } from './timeline-item'

export function Timeline() {
  return (
    <section className="space-y-8">
      <h2 className="text-center text-5xl font-medium text-foreground">
        Nossa jornada
      </h2>
      <ol
        className="relative mx-4 border-s border-gray-200 dark:border-gray-700 lg:mx-0"
        role="list"
      >
        <TimelineItem
          year={1994}
          title="Início da Jornada"
          description="Foi criado a Smithson do Brasil Informática LTDA."
        />
        <TimelineItem
          year={1997}
          title="Expansão e Consolidação"
          description="Foi criado a linha de microcomputadores SMT Computer com o que há de melhor em periféricos."
        />
        <TimelineItem
          year={2002}
          title="Reconhecimento da Marca"
          description="Alcançamos o título de Integradora Microsoft OEM."
        />
      </ol>
    </section>
  )
}
