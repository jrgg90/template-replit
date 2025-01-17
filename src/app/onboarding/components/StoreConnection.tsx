'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { InputWithLabel } from '@/components/ui/input-with-label-animation'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const StoreConnection = () => {
  const [storeUrl, setStoreUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { user } = useAuth()

  const handleConnect = async () => {
    try {
      setLoading(true)
      setError('')

      // Extract domain from URL if needed
      const domain = storeUrl.includes('http') 
        ? new URL(storeUrl).hostname 
        : storeUrl

      const response = await fetch('/api/shopify/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shopDomain: domain,
          userId: user?.uid
        })
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      // Redirect to Shopify authorization
      window.location.href = data.authUrl
    } catch (error) {
      setError('Failed to connect to Shopify. Please try again.')
      console.error('Error connecting store:', error)
    } finally {
      setLoading(false)
    }
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
            error={error}
            className="flex-1"
          />
          <button
            onClick={handleConnect}
            disabled={loading || !storeUrl}
            className="px-8 h-12 bg-[#131F42] text-white rounded-lg hover:bg-[#1c2b5d] 
              transition-colors font-normal whitespace-nowrap flex-shrink-0 text-base
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <LoadingSpinner className="w-5 h-5" />
            ) : (
              'Conecta tu tienda'
            )}
          </button>
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  )
}

export default StoreConnection 