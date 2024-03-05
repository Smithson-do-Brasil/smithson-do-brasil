import { CardItem, CardItemProps } from './card-item'

export function Cards() {
  const cards: CardItemProps[] = [
    { number: '25', title: 'anos de experiência' },
    { number: '30', title: 'soluções' },
    { number: '35', title: 'projetos' },
    { number: '15', title: 'empresas clientes' },
  ]

  return (
    <div
      role="region"
      aria-label="Cartões sobre a empresa"
      className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
    >
      {cards.map((card, index) => (
        <CardItem key={index} number={card.number} title={card.title} />
      ))}
    </div>
  )
}
