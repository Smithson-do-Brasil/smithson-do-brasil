import { Separator } from '@/components/ui/separator'

import { NumbersAnimate } from './numbers-animate'
import { NumbersIcon } from './numbers-icon'
import { NumbersItem } from './numbers-item'

export function Numbers() {
  return (
    <div className="relative space-y-24 py-32">
      <section className="container flex items-center justify-between">
        <div className="space-y-5">
          <h2 className="font-bold font-ppformula text-6xl italic">
            Nossos números
          </h2>
          <p className="w-2/4 font-medium text-xl">
            Premiada por diversas instituições como{' '}
            <span className="text-[#FF00FF]">X</span> e{' '}
            <span className="text-[#FF00FF]">Y</span> e representante direta de
            empresas como Microsoft e Intelbras, veja nossa história em cifras e
            entenda porque a Smithson é a escolha certa para assessorar sua
            organização.
          </p>
        </div>

        <NumbersIcon />
      </section>

      <div className="absolute right-0 top-8">
        <NumbersAnimate />
      </div>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <NumbersItem number={30} title="Anos de Experiência" />
          <Separator className=" bg-muted-foreground lg:h-12 lg:w-[1px]" />
          <NumbersItem number={3000} title="Clientes" />
          <Separator className="bg-muted-foreground lg:h-12 lg:w-[1px]" />
          <NumbersItem number={20} title="Soluções e Serviços" />
        </div>
      </section>
    </div>
  )
}
