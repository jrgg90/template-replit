'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { languages } from './settings'

const runsOnServerSide = typeof window === 'undefined'

// Configuración básica para i18next
const i18nConfig = {
  supportedLngs: languages,
  fallbackLng: 'es',
  lng: undefined,
  detection: {
    order: ['path', 'htmlTag', 'cookie', 'navigator'],
  },
  preload: runsOnServerSide ? languages : []
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => 
    import(`@/locales/${language}/${namespace}.json`)))
  .init(i18nConfig)

export function useTranslation(namespace: string, options = {}) {
  const [lng, setLng] = useState(i18next.language)

  useEffect(() => {
    if (!lng) return
    i18next.changeLanguage(lng)
  }, [lng])

  return useTranslationOrg(namespace, options)
} 