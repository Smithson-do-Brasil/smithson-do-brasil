import { Link } from 'react-router-dom'

import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="flex flex-col items-center gap-8 bg-[#4C6FF7] p-16">
        <h1 className="text-center text-2xl font-medium text-zinc-50 lg:text-4xl">
          Acelere seu negócio hoje
        </h1>

        <Link to="/contact">
          <Button className="bg-zinc-50 text-lg text-zinc-950 lg:text-xl">
            Entre em contato
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-center p-3 text-center">
        &copy; {new Date().getFullYear()}, Smithson do Brasil - CNPJ
        00.460.978/0001-36. Todos os direitos reservados.
      </div>
    </footer>
  )
}
