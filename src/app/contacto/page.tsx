'use client'

import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  useEffect(() => {
    // Asegurarnos que el script de Typeform se carga después del montaje del componente
    const loadTypeform = async () => {
      // @ts-ignore
      if (window.tf) return
      const script = document.createElement('script')
      script.src = '//embed.typeform.com/next/embed.js'
      document.body.appendChild(script)
    }
    loadTypeform()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo Header */}
      <div className="fixed top-0 left-0 p-6 z-50">
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

      {/* Typeform Container */}
      <div className="flex-1 pt-24">
        <div 
          data-tf-live="01JHKYZ8H2JA8N56CS9MX5TAK1"
          className="h-screen w-full"
        />
      </div>
    </div>
  )
} 