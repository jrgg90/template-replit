"use client"

import Link from "next/link"
import Image from "next/image"
import { routes, getLocalizedPath } from "@/config/routes"
import { Language } from "@/types"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { LoginModal } from "@/components/auth/LoginModal"

interface FooterProps {
  lang: Language
}

export function FooterES({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const [isOpen, setIsOpen] = useState(false)

  // Obtener la ruta actual y convertirla a la versión en inglés
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const pathWithoutLang = currentPath.replace('/es/', '/')
  const enPath = getLocalizedPath(pathWithoutLang, 'en')

  console.log({
    currentPath,
    pathWithoutLang,
    enPath
  });

  return (
    <footer className="bg-[#131F42] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Button 
                  variant="ghost"
                  onClick={() => setIsOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Iniciar Sesión
                </Button>
              </li>
            </ul>
          </div>

          {/* Column 2 - Use Cases */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Casos de Uso</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={routes.es.useCases}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investigación de mercados
                </Link>
              </li>
              <li>
                <Link 
                  href={routes.es.useCases}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Marketplaces
                </Link>
              </li>
              <li>
                <Link 
                  href={routes.es.useCases}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shopify Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={routes.es.pricing}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link 
                  href={routes.es.blog}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:info@exbordia.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <a href="mailto:info@exbordia.com" className="hover:text-white transition-colors">
                  info@exbordia.com
                </a>
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Agregar el selector de idioma al final de la última columna */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Idioma</h3>
            <div className="flex items-center space-x-4">
              <Link 
                href={enPath}
                className="text-gray-300 hover:text-white transition-colors"
              >
                EN
              </Link>
              <span className="text-white font-medium">ES</span>
            </div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <Image 
                src="/exbordia-logo.png" 
                alt="Exbordia Logo" 
                width={140} 
                height={40}
                className="brightness-0 invert object-contain"
              />
              <p className="text-sm text-gray-300">
                © {currentYear} Exbordia. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>

      <LoginModal 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
      />
    </footer>
  )
} 