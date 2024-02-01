export function ServicesItems() {
  return (
    <div className="container space-y-10 pb-16 lg:space-y-32">
      <h1 className="text-center text-4xl font-bold text-foreground lg:text-7xl">
        Nossos serviços
      </h1>

      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <div className="space-y-4 lg:space-y-8">
          <h1 className="text-2xl font-bold text-foreground dark:text-foreground lg:text-5xl">
            Desenvolvimento de Software
          </h1>
          <p className="text-sm font-semibold dark:text-muted-foreground lg:text-xl">
            Desenvolvemos soluções digitais de alto impacto com inteligência e
            tecnologia para gigantes do mercado
          </p>
        </div>

        <img src="developer.svg" alt="" className="w-full lg:w-2/4" />
      </div>
    </div>
  )
}
