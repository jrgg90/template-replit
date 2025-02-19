'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Precios', href: '/precios' },
  // ... otros links existentes ...
]

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isPublicRoute = ['/', '/casos-de-uso', '/blog', '/sandbox', '/precios', '/contacto'].includes(pathname)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/exbordia-logo.png" alt="Exbordia Logo" className="h-8" />
          </Link>

          <div className="flex items-center gap-6">
            {/* Solo mostrar LoginButton en rutas públicas */}
            {isPublicRoute && <LoginButton />}
          </div>
        </div>
      </div>
    </header>
  )
} 