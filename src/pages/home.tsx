import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen items-center justify-center">
        <Button>Enviar</Button>
      </div>
    </>
  )
}
