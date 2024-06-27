import { AboutUsAnimate } from './about-us-animate'
import { AboutUsHeroImage } from './about-us-hero-image'

export function AboutUs() {
  return (
    <div className="relative py-28">
      <section className="container flex items-end gap-12 text-end">
        <AboutUsHeroImage />

        <div className="flex w-full flex-col items-end gap-12">
          <h2 className="font-ppformula text-6xl font-bold italic">
            Quem somos nós?
          </h2>
          <p className="flex flex-col items-end gap-4 text-end font-medium text-xl">
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
          <h3 className="font-ppformula text-4xl font-bold italic">
            Somos experts em manter as coisas <br /> funcionando como deveriam.
          </h3>
        </div>
      </section>

      <div className="absolute left-0 top-2/4 w-full -translate-y-2/4">
        <AboutUsAnimate />
      </div>
    </div>
  )
}
