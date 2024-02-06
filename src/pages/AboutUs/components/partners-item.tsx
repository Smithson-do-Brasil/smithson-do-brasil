export type PartnersItemProps = {
  image: string
  title: string
  url: string
}

export function PartnersItem({ image, title, url }: PartnersItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex w-full items-center justify-center rounded-sm bg-zinc-100 p-4 dark:bg-foreground lg:p-8"
      rel="noreferrer"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img src={image} alt={title} className="max-w-full" />
    </a>
  )
}
