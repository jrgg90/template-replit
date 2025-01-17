'use client'

import { useState } from 'react'

const StoreConnection = () => {
  const [storeUrl, setStoreUrl] = useState('')

  const handleConnect = () => {
    console.log('Connecting store:', storeUrl)
  }

  const handleFileUpload = () => {
    console.log('Opening file upload dialog')
  }

  return (
    <div className="space-y-10">
      {/* Main Section */}
      <div className="text-center">
        <h2 className="text-2xl font-light text-gray-900">
          Conecta tu tienda y sincroniza tus productos
        </h2>
        <p className="mt-3 text-gray-600 font-light">
          Los necesitamos para comenzar tu proceso de pre-exportación
        </p>
      </div>

      {/* Store URL Input */}
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-4">
          <input
            type="text"
            value={storeUrl}
            onChange={(e) => setStoreUrl(e.target.value)}
            placeholder="Ingresa la URL de tu tienda"
            className="flex-1 h-12 px-4 rounded-lg border border-gray-200 focus:border-[#131F42] focus:ring-1 focus:ring-[#131F42] transition-colors font-light"
          />
          <button
            onClick={handleConnect}
            className="px-8 h-12 bg-[#131F42] text-white rounded-lg hover:bg-[#1c2b5d] transition-colors font-light"
          >
            Conecta tu tienda
          </button>
        </div>

        {/* Alternative Option */}
        <div className="mt-6 text-center">
          <button
            onClick={handleFileUpload}
            className="text-[#131F42] hover:text-[#1c2b5d] text-sm font-light"
          >
            Si prefieres, sube tu CSV o PDF aquí
          </button>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-3 mt-16">
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
  )
}

export default StoreConnection 