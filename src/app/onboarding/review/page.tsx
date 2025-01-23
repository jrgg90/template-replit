'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { Loader2, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ReviewPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState({
    hasProducts: false,
    hasCompanyInfo: false,
    submissionDate: null as string | null
  })

  useEffect(() => {
    if (user) {
      checkStatus()
    }
  }, [user])

  const checkStatus = async () => {
    try {
      // Verificar productos (ya sea por Shopify o archivos subidos)
      const filesCollection = collection(db, "product_files", user!.uid, "files")
      const filesSnapshot = await getDocs(filesCollection)
      const shopifyDoc = await getDoc(doc(db, "shopify_connections", user!.uid))
      
      // Verificar información de empresa
      const companyDoc = await getDoc(doc(db, "company_info", user!.uid))

      setStatus({
        hasProducts: !filesSnapshot.empty || shopifyDoc.exists(),
        hasCompanyInfo: companyDoc.exists(),
        submissionDate: new Date().toLocaleDateString()
      })
    } catch (error) {
      console.error('Error checking status:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <div className="flex justify-between items-baseline">
          <div className="text-left">
            <h2 className="text-4xl tracking-tight">
              <span className="font-light text-gray-600">Estamos revisando tu caso</span>
              <span className="font-medium text-[#131F42]"> - te mantendremos informado</span>
            </h2>
            <p className="mt-3 text-base text-gray-600 font-light">
              Nuestro equipo está analizando la información proporcionada
            </p>
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
        {/* Submission Status */}
        <div className="flex items-start gap-4 pb-6 border-b">
          <div className="rounded-full p-1 bg-blue-50">
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Solicitud recibida</h3>
            <p className="text-sm text-gray-500 mt-1">
              Hemos recibido tu solicitud el {status.submissionDate}. 
              Te notificaremos por correo electrónico cuando hayamos revisado tu caso.
            </p>
          </div>
        </div>

        {/* Pending Actions (if any) */}
        {(!status.hasProducts || !status.hasCompanyInfo) && (
          <div className="flex items-start gap-4">
            <div className="rounded-full p-1 bg-amber-50">
              <AlertCircle className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Acciones pendientes</h3>
              <div className="space-y-3 mt-3">
                {!status.hasProducts && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      No hemos detectado información de tus productos
                    </p>
                    <Button
                      onClick={() => router.push('/onboarding')}
                      variant="outline"
                      size="sm"
                    >
                      Agregar productos
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
                
                {!status.hasCompanyInfo && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      Falta información de tu empresa
                    </p>
                    <Button
                      onClick={() => router.push('/onboarding/company-info')}
                      variant="outline"
                      size="sm"
                    >
                      Completar información
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="pt-6 border-t">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Próximos pasos:</h4>
          <ol className="space-y-2">
            <li className="text-sm text-gray-600">1. Revisaremos la información proporcionada</li>
            <li className="text-sm text-gray-600">2. Te contactaremos si necesitamos información adicional</li>
            <li className="text-sm text-gray-600">3. Recibirás un correo con el resultado de la evaluación</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 