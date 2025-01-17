'use client'

import { useState } from 'react'
import { InputWithLabel } from '@/components/ui/input-with-label-animation'

const StoreConnection = () => {
  const [storeUrl, setStoreUrl] = useState('')

  const handleConnect = () => {
    console.log('Connecting store:', storeUrl)
  }

  const handleFileUpload = () => {
    console.log('Opening file upload dialog')
  }

  return (
    <div className="space-y-12">
      {/* Main Section */}
      <div className="text-left max-w-2xl">
        <h2 className="text-4xl tracking-tight">
          <span className="font-light text-gray-600">Conecta tu tienda Shopify</span>
          <span className="font-medium text-[#131F42]"> y sincroniza tus productos</span>
        </h2>
        <p className="mt-3 text-base text-gray-600 font-light">
          Los necesitamos para comenzar tu proceso de pre-exportación
        </p>
      </div>

      {/* Store URL Input */}
      <div className="max-w-2xl flex flex-col items-center">
        <div className="flex gap-4 w-full">
          <InputWithLabel
            id="store-url"
            label="URL de tu tienda en Shopify (ej: store.myshopify.com)"
            value={storeUrl}
            onChange={(e) => setStoreUrl(e.target.value)}
          />
          <button
            onClick={handleConnect}
            className="px-8 h-12 bg-[#131F42] text-white rounded-lg hover:bg-[#1c2b5d] transition-colors font-normal whitespace-nowrap flex-shrink-0 text-base"
          >
            Conecta tu tienda
          </button>
        </div>

        {/* Alternative Option */}
        <div className="mt-8 text-center">
          <button
            onClick={handleFileUpload}
            className="text-base text-gray-500 hover:text-gray-700 font-medium transition-colors"
          >
            Si prefieres, sube tu CSV o PDF aquí
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-colors ${
                step === 0 ? 'bg-[#131F42]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoreConnection 