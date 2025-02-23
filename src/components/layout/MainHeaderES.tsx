"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"
import { routes } from "@/config/routes"
import { useState } from "react"

export function MainHeaderES() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={routes.es.home}>
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
              <Link href={routes.es.blog}>
                Blog
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className="text-[#131F42] font-light"
            >
              <Link href={routes.es.useCases}>
                Casos de Uso
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className="text-[#131F42] font-light"
            >
              <Link href={routes.es.pricing}>
                Precios
              </Link>
            </Button>
            <LoginButton lang="es" />
            <Link
              href="https://tally.so/r/mYx0b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8">
                Solicitar Info
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menú</span>
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
              href={routes.es.blog}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href={routes.es.useCases}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos de Uso
            </Link>
            <Link 
              href={routes.es.pricing}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </Link>
            <LoginButton lang="es" />
            <Link
              href="https://tally.so/r/mYx0b0"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px]">
                Solicitar Info
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 