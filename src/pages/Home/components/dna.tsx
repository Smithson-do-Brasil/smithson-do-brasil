import { DnaItem } from './dna-item'

export function Dna() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <h1 className="text-5xl font-medium text-foreground">Nosso DNA</h1>

      <div className="grid w-full lg:grid-cols-3">
        <DnaItem icon="HeartHandshake" title="Entrega de Valor" />
        <DnaItem icon="CodeSquare" title="Pluralidade Técnica" />
        <DnaItem icon="Heart" title="Paixão" />
      </div>
    </div>
  )
}
