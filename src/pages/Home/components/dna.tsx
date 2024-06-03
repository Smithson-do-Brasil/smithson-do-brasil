import { DnaItem } from './dna-item'

export function Dna() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:gap-20">
      <div className="container space-y-8 text-center">
        <h2 className="text-center text-3xl font-bold lg:text-5xl">
          O DNA da <span className="text-[#2364AA]">Smithson do Brasil</span>{' '}
          :-)
        </h2>

        <p className="text-lg font-medium lg:text-2xl">
          Diga adeus às complexidades do passado e desbloqueie um caminho mais
          prático para o sucesso da sua operação. Dê boas vindas à{' '}
          <strong className="text-[#2364AA]">
            era da simplicidade e eficiência.
          </strong>
        </p>
      </div>

      <div className="container grid w-full gap-6 lg:grid-cols-3">
        <DnaItem
          icon="HeartHandshake"
          title="Entrega de Valor para Empresas e Pessoas"
          description="Entrega de valor com soluções tecnológicas, atendimento 24/7, e excelência, superando expectativas de empresas e pessoas há 25 anos."
        />
        <DnaItem
          icon="BarChart4"
          title="Evolução do Negócio e Impacto Funcional"
          description="Transformamos negócios com soluções inovadoras, gerando impacto funcional positivo e constante evolução para empresas e pessoas."
        />
        <DnaItem
          icon="Wrench"
          title="Expertise Técnica e Excelência Operacional"
          description="Oferecemos expertise técnica de ponta e excelência operacional, garantindo soluções eficientes e resultados excepcionais para empresas e pessoas."
        />
      </div>
    </section>
  )
}
