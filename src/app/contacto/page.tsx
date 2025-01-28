'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ContactPage() {
  useEffect(() => {
    // Limpiar cualquier instancia previa de Typeform
    const existingScript = document.querySelector('script[src*="typeform"]')
    if (existingScript) {
      existingScript.remove()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <div 
        data-tf-live="01JHKYZ8H2JA8N56CS9MX5TAK1"
        data-tf-popup="true"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Exbordia Contact Form"
        data-tf-auto-open="true"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
      ></div>
      <Script 
        src="//embed.typeform.com/next/embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
} 