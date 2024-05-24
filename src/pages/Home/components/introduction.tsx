import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Form } from '@/components/form'
import { Badge } from '@/components/ui/badge'

export function Introduction() {
  return (
    <section className="bg-[url('/introduction.png')] bg-cover bg-center bg-no-repeat py-14 lg:py-28">
      <div className="container flex flex-col items-center gap-8 lg:flex-row">
        <div className="space-y-2 lg:space-y-4">
          <Link to="/servicos">
            <div className="flex w-max cursor-pointer items-center gap-1 rounded-full bg-zinc-50 p-1">
              <Badge className="bg-[#2364AA] p-1 text-xs text-zinc-50 hover:bg-[#2364AA] lg:p-2">
                Novidades
              </Badge>

              <p className="text-xs font-medium text-zinc-950 lg:text-sm">
                Confira nosso desenvolvimento de sites
              </p>

              <ArrowRightIcon
                color="#08090A"
                className="h-4 w-4 lg:h-6 lg:w-6"
              />
            </div>
          </Link>

          <h1 className="text-5xl font-bold text-zinc-50 lg:text-7xl">
            Informática e Tecnologia ao seu alcance.
          </h1>

          <p className="text-base font-medium text-zinc-50 lg:text-xl">
            Assistência técnica eficiente quando o assunto é informática e
            tecnologia - do físico ao digital.
          </p>

          <Link to="/servicos">
            <button className="mt-2 rounded-full bg-[#2364AA] px-8 py-2 text-base font-medium text-zinc-50 lg:mt-4">
              Saiba mais
            </button>
          </Link>
        </div>

        <Form />
      </div>
    </section>
  )
}
