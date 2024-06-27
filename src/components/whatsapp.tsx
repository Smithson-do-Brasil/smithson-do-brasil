import { SiWhatsapp } from '@icons-pack/react-simple-icons'

export function Whatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5521999991051&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
      className="fixed bottom-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp p-2"
      target="_blank"
      rel="noreferrer"
    >
      <SiWhatsapp className="text-white" />
    </a>
  )
}
