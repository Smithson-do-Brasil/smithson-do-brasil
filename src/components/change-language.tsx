import { BR, US } from 'country-flag-icons/react/3x2'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function ChangeLanguage() {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLanguage('en')}>
          <US className="mr-2 h-[1.2rem] w-[1.2rem]" />
          Inglês
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage('pt')}>
          <BR className="mr-2 h-[1.2rem] w-[1.2rem]" />
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
