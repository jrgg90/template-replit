'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { InputWithLabel } from '@/components/ui/input-with-label-animation'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { Trash2, ShoppingBag, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { FileUploadModal } from './FileUploadModal'
import { toast } from 'sonner'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { setDoc } from 'firebase/firestore'
import { UploadedFiles } from './UploadedFiles'

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
  const [syncComplete, setSyncComplete] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [shouldReloadFiles, setShouldReloadFiles] = useState(0)

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

  // Check if store is already connected
  useEffect(() => {
    const checkConnectionAsync = async () => {
      if (user) {
        await checkConnection();
      }
    };
    checkConnectionAsync();
  }, [user]);

  // Check URL params for sync status
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sync') === 'success') {
      setSyncComplete(true);
      // Clean URL
      window.history.replaceState({}, '', '/onboarding');
      // Wait a moment for products to be available
      setTimeout(() => {
        router.push('/onboarding/products');
      }, 1000);
    }
  }, []);
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

  const handleFileUpload = async (file: File) => {
    if (!user) {
      toast.error('Debes iniciar sesión para subir archivos')
      return
    }

    try {
      setLoading(true)
      setUploadProgress(0)
      
      // Crear referencia en Firebase Storage
      const fileRef = ref(storage, `product-files/${user.uid}/${file.name}`)
      
      // Agregar metadatos al archivo
      const metadata = {
        customMetadata: {
          userId: user.uid,
          userEmail: user.email || 'no-email',
          uploadedAt: new Date().toISOString(),
          originalName: file.name
        }
      }

      // Usar los metadatos en la subida
      const uploadTask = uploadBytesResumable(fileRef, file, metadata)

      // Escuchar el progreso
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setUploadProgress(Math.round(progress))
        },
        (error) => {
          console.error('Error uploading:', error)
          toast.error('Error al subir el archivo')
          setLoading(false)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          const storagePath = `product-files/${user.uid}/${file.name}`
          
          // Crear un ID único para cada archivo
          const fileId = `${Date.now()}-${file.name}`
          
          // Guardar en una subcolección de archivos
          await setDoc(doc(db, "product_files", user.uid, "files", fileId), {
            fileName: file.name,
            fileUrl: downloadURL,
            fileType: file.type,
            fileSize: file.size,
            fileSizeFormatted: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
            uploadedAt: new Date().toISOString(),
            userId: user.uid,
            userEmail: user.email || 'no-email',
            status: 'pending',
            storagePath: storagePath,
            fileId: fileId,
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModified ? new Date(file.lastModified).toISOString() : null,
            processingStatus: {
              status: 'pending',
              startedAt: new Date().toISOString(),
              completedAt: null,
              error: null
            }
          })

          toast.success('Archivo subido correctamente')
          setShowUploadModal(false)
          setShouldReloadFiles(prev => prev + 1)
        }
      )
    } catch (error) {
      console.error('Error setting up upload:', error)
      toast.error('Error al preparar la subida del archivo')
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

      {/* Store URL Input or Connected State */}
      <div className="max-w-2xl flex flex-col space-y-4">
        {isConnected ? (
          <div className="w-full space-y-4">
            {/* Store URL Display y Ver Productos juntos */}
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Tienda conectada:</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="h-5 w-5 text-[#131F42]" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{storeUrl}</p>
                        <p className="text-xs text-gray-500">
                          • Conectado el {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleDisconnect}
                      disabled={loading}
                      className="h-8 w-8 p-0"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button
                  onClick={() => router.push('/onboarding/products')}
                  className="px-8 h-10 bg-[#131F42] text-white rounded-lg hover:bg-[#1c2b5d] 
                    transition-colors font-normal whitespace-nowrap flex-shrink-0 text-base"
                >
                  Ver Productos
                </Button>
              </div>
            </div>

            {/* Uploaded Files Section */}
            {user && (
              <UploadedFiles 
                userId={user.uid} 
                key={shouldReloadFiles}
              />
            )}

            {/* Upload Option - Ya sin el botón de desconectar */}
            <div className="pt-4 text-center">
              <p className="text-gray-500 text-sm">
                O{' '}
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="underline cursor-pointer hover:text-gray-700 transition-colors"
                >
                  sube tu CSV o PDF
                </button>
                {' '}con información de tus productos
              </p>
            </div>

            {/* Next Step Button - Se mantiene al final */}
            <div className="flex justify-end pt-8 mt-4 border-t border-gray-100">
              <Button
                onClick={() => router.push('/onboarding/company-info')}
                className="bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 
                  hover:text-gray-700 font-light px-6 text-sm"
              >
                Siguiente: Información de tu empresa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <>
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
                  <LoadingSpinner className="w-4 h-4" />
                ) : (
                  'Conecta tu tienda'
                )}
              </button>
            </div>
            
            {/* New Upload Option */}
            <p className="text-gray-500 text-sm text-center">
              O{' '}
              <button
                onClick={() => setShowUploadModal(true)}
                className="underline cursor-pointer hover:text-gray-700 transition-colors"
              >
                sube tu CSV o PDF
              </button>
              {' '}con información de tus productos
            </p>
          </>
        )}

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>

      <FileUploadModal
        open={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUpload={handleFileUpload}
        loading={loading}
        progress={uploadProgress}
      />

      {syncComplete && (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-2">
            <LoadingSpinner className="w-4 h-4 text-blue-600" />
            <p className="text-sm text-gray-600">Sincronizando productos...</p>
          </div>
        </div>
      )}
    </div>
  );
} 