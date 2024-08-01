import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslations from '../locales/en.json'
import ptTranslations from '../locales/pt.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ...enTranslations,
      },
      pt: {
        ...ptTranslations,
      },
    },
    lng: 'pt-BR',
  })
