'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { InputWithLabel } from '@/components/ui/input-with-label-animation'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function StoreConnection() {
  const [storeUrl, setStoreUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { user } = useAuth()
  const [isConnected, setIsConnected] = useState(false)
  const router = useRouter()

  // Check if store is already connected
  useEffect(() => {
    if (user) {
      checkConnection();
    }
  }, [user]);

  const checkConnection = async () => {
    try {
      const connectionDoc = await getDoc(doc(db, "shopify_connections", user!.uid));
      console.log("Connection data:", connectionDoc.data());
      
      if (connectionDoc.exists()) {
        setIsConnected(true);
        const { shopDomain } = connectionDoc.data();
        console.log("Shop domain:", shopDomain);
        setStoreUrl(shopDomain);
      } else {
        setIsConnected(false);
        setStoreUrl('');
      }
    } catch (error) {
      console.error('Error checking connection:', error);
    }
  };

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

  const handleDisconnect = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/shopify/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.uid })
      });

      const data = await response.json();
      if (data.success) {
        setIsConnected(false);
        setStoreUrl('');
      } else {
        setError('Failed to disconnect store');
      }
    } catch (error) {
      console.error('Error disconnecting store:', error);
      setError('Failed to disconnect store');
    } finally {
      setLoading(false);
    }
  };

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

      {/* Store URL Input or Connected State */}
      <div className="max-w-2xl flex flex-col items-center">
        {isConnected ? (
          <div className="w-full space-y-4">
            {/* Store URL Display */}
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Tienda conectada:</p>
              <p className="text-[#131F42] font-medium">
                {storeUrl || 'No store URL found'}
              </p>
              <p className="text-xs text-gray-400">Debug: {JSON.stringify({storeUrl, isConnected})}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => router.push('/products')}
                className="px-8 h-10 bg-[#131F42] text-white rounded-lg hover:bg-[#1c2b5d] 
                  transition-colors font-normal whitespace-nowrap flex-shrink-0 text-base"
              >
                Ver Productos
              </button>
              <button
                onClick={handleDisconnect}
                disabled={loading}
                className="w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg 
                  border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50"
                aria-label="Desconectar Tienda"
              >
                {loading ? (
                  <LoadingSpinner className="w-4 h-4" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ) : (
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
        )}

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
} 