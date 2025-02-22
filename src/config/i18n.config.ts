import type { InitOptions } from 'i18next'

export const defaultNS = 'common'
export const defaultLang = 'en'
export const languages = ['en', 'es'] as const

export const fallbackLng = defaultLang

// Definimos los paths para cada idioma
export const languagePaths = {
  en: {
    home: '/',
    pricing: '/pricing',
    blog: '/blog',
    useCases: '/use-cases'
  },
  es: {
    home: '/',
    pricing: '/precios',
    blog: '/blog',
    useCases: '/casos-de-uso'
  }
} as const

export const getLocalizedPath = (lang: string, path: keyof typeof languagePaths.en) => {
  return `/${lang}${languagePaths[lang as keyof typeof languagePaths][path]}`
}

export const i18nConfig: InitOptions = {
  defaultNS,
  fallbackLng,
  supportedLngs: languages,
  ns: ['common'],
  load: 'languageOnly',
  interpolation: {
    escapeValue: false
  }
} 