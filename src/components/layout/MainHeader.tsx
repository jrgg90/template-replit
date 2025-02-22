"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"
import { useTranslation } from "@/app/i18n/client"
import { Language } from "@/types"

interface MainHeaderProps {
  lang: Language
}

export function MainHeader({ lang }: MainHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation('common')

  // Definir las rutas directamente según el idioma
  const getBlogPath = (lang: Language) => {
    return lang === 'es' ? '/es/blog-es' : '/en/blog-en'
  }

  const getUseCasesPath = (lang: Language) => {
    return lang === 'es' ? '/es/casos-de-uso' : '/en/use-cases'
  }

  const getPricingPath = (lang: Language) => {
    return lang === 'es' ? '/es/precios' : '/en/pricing'
  }

  const getHomePath = (lang: Language) => {
    return lang === 'es' ? '/es/inicio' : '/en/home'
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={getHomePath(lang)}>
              <Image 
                src="/exbordia-logo.png" 
                alt="Exbordia Logo" 
                width={140} 
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              asChild
              className="text-[#131F42] font-light"
            >
              <Link href={getBlogPath(lang)}>
                {t('header.navigation.blog')}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className="text-[#131F42] font-light"
            >
              <Link href={getUseCasesPath(lang)}>
                {t('header.navigation.useCases')}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className="text-[#131F42] font-light"
            >
              <Link href={getPricingPath(lang)}>
                {t('header.navigation.pricing')}
              </Link>
            </Button>
            <LoginButton />
            <Link
              href="https://tally.so/r/mYx0b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8">
                {t('header.navigation.requestInfo')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href={getBlogPath(lang)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.navigation.blog')}
            </Link>
            <Link 
              href={getUseCasesPath(lang)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.navigation.useCases')}
            </Link>
            <Link 
              href={getPricingPath(lang)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.navigation.pricing')}
            </Link>
            <LoginButton />
            <Link
              href="https://tally.so/r/mYx0b0"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px]">
                {t('header.navigation.requestInfo')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 