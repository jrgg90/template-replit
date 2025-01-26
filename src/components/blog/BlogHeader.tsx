'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { LoginButton } from '@/components/auth/LoginButton'

export function BlogHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/exbordia-logo.png"
              alt="Exbordia Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              asChild
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <Link href="/blog">Blog</Link>
            </Button>
            <LoginButton />
            <Link href="/contacto" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8">
                Solicitar Información
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 