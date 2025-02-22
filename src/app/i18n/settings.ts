export const languages = ['es', 'en'] as const
export const defaultLanguage = 'es' as const

export type Language = typeof languages[number]

export const getOptions = (lang = defaultLanguage, ns = 'common') => {
  return {
    supportedLngs: languages,
    fallbackLng: defaultLanguage,
    lng: lang,
    ns: [ns],
    defaultNS: 'common',
    fallbackNS: 'common'
  }
} 