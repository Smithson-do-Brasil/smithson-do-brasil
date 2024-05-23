import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { Form } from './form'

export function Introduction() {
  return (
    <section className="bg-[url('introduction.png')] bg-cover bg-center bg-no-repeat py-14 lg:py-28">
      <div className="container flex flex-col items-center gap-8 lg:flex-row">
        <div className="space-y-4">
          <div className="flex w-max cursor-pointer items-center gap-2 rounded-full bg-zinc-50 p-1">
            <Badge className="bg-[#2364AA] text-zinc-50 hover:bg-[#2364AA]">
              Novidades
            </Badge>

            <p className="text-sm font-medium text-zinc-950">
              Confira nosso desenvolvimento de sites
            </p>

            <ArrowRightIcon color="#08090A" size={20} />
          </div>

          <h1 className="text-5xl font-bold text-foreground text-zinc-50 xl:text-7xl">
            Informática e Tecnologia ao seu alcance.
          </h1>

          <p className="text-base font-medium text-foreground text-zinc-50 xl:text-xl">
            Assistência técnica eficiente quando o assunto é informática e
            tecnologia - do físico ao digital.
          </p>

          <button className="rounded-full bg-[#2364AA] px-8 py-2 text-base font-medium text-zinc-50">
            Saiba mais
          </button>
        </div>

        <Form />
      </div>
    </section>
  )
}
