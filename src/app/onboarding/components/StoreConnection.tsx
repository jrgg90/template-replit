'use client'

import { useState } from 'react'

const StoreConnection = () => {
  const [storeUrl, setStoreUrl] = useState('')

  const handleConnect = () => {
    // Here you would handle the store connection logic
    console.log('Connecting store:', storeUrl)
  }

  const handleFileUpload = () => {
    // Here you would handle the file upload logic
    console.log('Opening file upload dialog')
  }

  return (
    <div className="space-y-8">
      {/* Main Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Conecta tu tienda y sincroniza tus productos
        </h2>
        <p className="mt-2 text-gray-600">
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
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            onClick={handleConnect}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Conecta tu tienda
          </button>
        </div>

        {/* Alternative Option */}
        <div className="mt-4 text-center">
          <button
            onClick={handleFileUpload}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Si prefieres, sube tu CSV o PDF aquí
          </button>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-2 mt-16">
        {[0, 1, 2].map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full ${
              step === 0 ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default StoreConnection 