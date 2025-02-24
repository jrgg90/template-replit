"use client"

import Link from "next/link"
import Image from "next/image"
import { routes } from "@/config/routes"
import { Language } from "@/types"
import { usePathname } from 'next/navigation'

interface FooterProps {
  lang: Language
}

export function FooterEN({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  
  // Mapear las rutas de inglés a español
  const getSpanishPath = () => {
    if (pathname.includes('/blog-en')) return '/es/blog-es'
    if (pathname.includes('/home')) return '/es/inicio'
    if (pathname.includes('/use-cases')) return '/es/casos-de-uso'
    if (pathname.includes('/pricing')) return '/es/precios'
    return '/es/inicio' // fallback a inicio
  }

  const esPath = getSpanishPath()

  return (
    <footer className="bg-[#131F42] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Use Cases */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Use Cases</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={routes.en.useCases}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Market Research
                </Link>
              </li>
              <li>
                <Link 
                  href={routes.en.useCases}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Marketplaces
                </Link>
              </li>
              <li>
                <Link 
                  href={routes.en.useCases}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shopify Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={routes.en.pricing}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href={routes.en.blog}
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
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
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

          {/* Selector de idioma */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Language</h3>
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">EN</span>
              <Link 
                href={esPath}
                className="text-gray-300 hover:text-white transition-colors"
              >
                ES
              </Link>
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
                © {currentYear} Exbordia. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 