export function AboutUs() {
  return (
    <div className="container flex items-center gap-10 py-28">
      <img src="/about-us.svg" alt="" className="w-full" />
      <section className="container flex flex-col items-end gap-12 text-end">
        <h2 className="font-ppformula text-6xl font-bold italic">
          Quem somos nós?
        </h2>
        <p className="flex flex-col items-end gap-4 text-end text-xl font-medium">
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
      </section>
    </div>
  )
}
