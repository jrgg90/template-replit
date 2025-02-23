'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { languages } from './settings'

const runsOnServerSide = typeof window === 'undefined'

// Configuración básica para i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => 
    import(`./locales/${language}/${namespace}.json`)))
  .init({
    supportedLngs: languages,
    fallbackLng: 'es',
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
    interpolation: {
      escapeValue: false
    }
  })

export function useTranslation(ns: string, lng?: string) {
  const ret = useTranslationOrg(ns)
  if (lng && ret.i18n.language !== lng) {
    ret.i18n.changeLanguage(lng)
  }
  return ret
} 