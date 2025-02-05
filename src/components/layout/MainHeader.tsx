'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/exbordia-logo.png"
              alt="Exbordia Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-white border-b md:hidden transition-all duration-200 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/blog"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-base font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="px-4">
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  // aquí iría la lógica original del LoginButton
                }}
                className="text-gray-600 hover:bg-gray-50 rounded-lg text-base font-light py-2"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            asChild
            className="text-[#131F42] font-light"
          >
            <Link href="/blog">
              Blog
            </Link>
          </Button>
          <LoginButton />
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8">
              Solicitar Información
            </Button>
          </a>
        </div>

        {/* Mobile CTA - Always visible */}
        <div className="md:hidden">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-6 text-sm">
              Solicitar Información
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
} 