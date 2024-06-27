import { AboutUsHeroImage } from './about-us-hero-image'

export function AboutUs() {
  return (
    <div className="relative md:py-8 lg:py-28">
      <section className="container flex flex-col items-end gap-4 text-center lg:flex-row lg:gap-12 lg:text-end">
        <AboutUsHeroImage />

        <div className="flex w-full flex-col items-center gap-4 lg:items-end lg:gap-12">
          <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
            Quem somos nós?
          </h2>
          <p className="flex flex-col items-center gap-4 font-medium text-base lg:items-end lg:text-xl">
            <span>
              A empresa que você chama quando está com problemas <br />
              ou quando quer evitar eles...
            </span>
            <span>
              Precisando de computadores novos?
              <br />
              Seu sistema precisa de um update?
              <br />
              Seu site não tem propósito?
            </span>
            <span>Fale conosco.</span>
          </p>
          <h3 className="font-bold font-ppformula text-2xl italic lg:text-4xl">
            Somos experts em manter as coisas <br /> funcionando como deveriam.
          </h3>
        </div>
      </section>
    </div>
  )
}
