import { Separator } from '@/components/ui/separator'

import { NumbersItem } from './numbers-item'

export function Numbers() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:gap-20">
      <div className="container space-y-8 text-center">
        <h2 className="text-center text-3xl font-bold lg:text-5xl">
          Dados que contam a nossa história
        </h2>

        <p className="text-lg font-medium lg:text-2xl">
          Diga adeus às complexidades do passado e desbloqueie um caminho mais
          prático para o sucesso de sua operação. Dê boas vindas à{' '}
          <strong className="text-[#2364AA]">
            era da simplicidade e eficiência.
          </strong>
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <NumbersItem number={30} title="Anos de Experiência" />
        <Separator className=" bg-muted-foreground lg:h-12 lg:w-[1px]" />
        <NumbersItem number={3000} title="Clientes" />
        <Separator className="bg-muted-foreground lg:h-12 lg:w-[1px]" />
        <NumbersItem number={20} title="Soluções e Serviços" />
      </div>
    </section>
  )
}
