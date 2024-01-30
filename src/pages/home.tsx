import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen items-center justify-center">
        <div className="relative">
          <video
            src="video.mp4"
            className="w-[100%]"
            autoPlay
            playsInline
            muted
            loop
          ></video>

          <div className="absolute left-2/4 top-[10%] flex -translate-x-2/4 flex-col items-center gap-6">
            <h1 className="text-5xl font-bold text-zinc-50">
              Há mais de 30 anos acelerando negócios
            </h1>
            <p className="text-xl font-semibold text-muted-foreground">
              Soluções digitais de alto impacto com inteligência e tecnologia
              para gigantes do mercado
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
