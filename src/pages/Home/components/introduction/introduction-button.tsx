import { ArrowRightIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'

type IntroductionButtonProps = ComponentProps<'button'> & {
  href: string
  title: string
}

export function IntroductionButton({
  href,
  title,
  ...props
}: IntroductionButtonProps) {
  return (
    <a href={href} className="w-full md:w-max">
      <Button
        className={twMerge(
          'flex w-full items-center gap-2 rounded-full text-base font-medium hover:brightness-90 sm:w-max lg:text-lg',
          props.className,
        )}
      >
        {title}
        <ArrowRightIcon />
      </Button>
    </a>
  )
}
