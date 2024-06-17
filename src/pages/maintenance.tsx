import { ConstructionIcon } from 'lucide-react'

export function Maintenance() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-12">
      <ConstructionIcon className="h-12 w-12 text-foreground" />
      <div className="space-y-4 text-center">
        <h1 className="font-ppformula text-2xl font-bold lg:text-4xl">
          Site em Construção
        </h1>
        <p className="text-sm text-foreground lg:text-lg">
          Estamos trabalhando duro para trazer a você uma nova experiência
          incrível!
        </p>
        <p className="text-sm text-foreground lg:text-lg">
          Nosso site está passando por uma reforma completa e em breve estará
          disponível com muitas novidades e melhorias.
        </p>
        <p className="text-sm text-foreground lg:text-lg">
          Fique ligado e não perca as atualizações!
        </p>
        <p className="text-sm text-foreground lg:text-lg">
          Enquanto isso, sinta-se à vontade para entrar em contato conosco
          através de nossas redes sociais ou pelo e-mail:{' '}
          <span className="font-bold underline">contato@smithson.com.br</span>
        </p>
        <p className="text-sm text-foreground lg:text-lg">
          Obrigado pela paciência e compreensão!
        </p>
      </div>
    </div>
  )
}
