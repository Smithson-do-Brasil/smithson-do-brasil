import { CardItem } from './card-item'

export function Cards() {
  return (
    <div className="container w-full">
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <CardItem number="25" title="anos de experiência" />
        <CardItem number="20" title="empresas clientes" />
        <CardItem number="20" title="empresas clientes" />
        <CardItem number="20" title="empresas clientes" />
      </section>
    </div>
  )
}
