export function Banner() {
  return (
    <div className="relative">
      <div className="absolute h-full w-full bg-zinc-950 opacity-70"></div>
      <img src="banner.png" alt="" className="w-full bg-cover" />

      <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-foreground text-zinc-50">
          Há mais de 30 anos acelerando negócios
        </h1>
        <p className="text-xl font-semibold text-zinc-100">
          Soluções digitais de alto impacto com inteligência e tecnologia para
          gigantes do mercado
        </p>
      </div>
    </div>
  )
}
