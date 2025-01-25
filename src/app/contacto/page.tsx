'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  useEffect(() => {
    // Mejorar la carga del script de Typeform
    const loadTypeform = async () => {
      try {
        // @ts-ignore
        if (window.tf) return

        // Cargar el script de Typeform
        const script = document.createElement('script')
        script.src = '//embed.typeform.com/next/embed.js'
        script.async = true
        
        // Esperar a que el script se cargue completamente
        await new Promise((resolve, reject) => {
          script.onload = resolve
          script.onerror = reject
          document.body.appendChild(script)
        })

        // Dar tiempo adicional para que Typeform se inicialice
        setTimeout(() => {
          // @ts-ignore
          if (window.tf) {
            // @ts-ignore
            window.tf.createWidget()
          }
        }, 1000)
      } catch (error) {
        console.error('Error loading Typeform:', error)
      }
    }

    loadTypeform()

    // Cleanup
    return () => {
      const script = document.querySelector('script[src*="typeform"]')
      if (script) {
        script.remove()
      }
    }
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
          data-tf-opacity="100"
          data-tf-iframe-props="title=Exbordia Contact Form"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          className="h-screen w-full"
        />
      </div>
    </div>
  )
} 