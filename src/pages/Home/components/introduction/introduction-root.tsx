import { ArrowRightIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'

interface IntroductionRootProps {
  children: ReactNode
}

export function IntroductionRoot({ children }: IntroductionRootProps) {
  return (
    <div
      className="container flex flex-col items-center justify-center gap-8 py-16 text-zinc-950 dark:text-teal-200"
      id="aboutUs"
    >
      <Link to="/servicos">
        <div className="flex w-max cursor-pointer items-center gap-2 rounded-full bg-zinc-950 p-1 transition-all hover:bg-zinc-700 hover:brightness-90 dark:bg-teal-200">
          <Badge className="bg-zinc-50 p-1 text-xs text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-950 dark:text-teal-200 lg:p-2">
            Novidades
          </Badge>

          <p className="text-xs font-medium text-zinc-50 dark:text-zinc-950 lg:text-sm">
            Confira nosso desenvolvimento de sites
          </p>

          <ArrowRightIcon className="h-4 w-4 text-zinc-50 dark:text-zinc-950 lg:h-6 lg:w-6" />
        </div>
      </Link>

      <h1 className="text-center font-ppformula text-3xl font-bold lg:text-7xl">
        Assessoria em <br />
        Informática e Tecnologia
      </h1>

      <p className="text-center text-sm font-medium lg:text-2xl">
        Porque se algo não está funcionando como <br /> deveria, alguém terá uma
        bela dor de cabeça...
      </p>

      <section className="flex w-full flex-col items-center justify-center gap-2 md:flex-row lg:w-max">
        {children}
      </section>
    </div>
  )
}
