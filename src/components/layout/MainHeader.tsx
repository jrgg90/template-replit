'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

export function MainHeader() {
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

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
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
          <Link href="/contacto" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8">
              Solicitar Información
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
} 