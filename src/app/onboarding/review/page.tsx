'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { Loader2, AlertCircle, CheckCircle2, ArrowRight, ClipboardList, Building2, PackageCheck } from 'lucide-react'

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
    <div className="space-y-12">
      {/* Header Section */}
      <div>
        <h2 className="text-4xl tracking-tight">
          <span className="font-light text-gray-600">Estamos revisando tu caso</span>
          <span className="font-medium text-[#131F42]"> - te mantendremos informado</span>
        </h2>
        <p className="mt-3 text-base text-gray-600 font-light">
          Nuestro equipo está analizando la información proporcionada
        </p>
      </div>

      {/* Status Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Solicitud Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-2 bg-green-50">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Solicitud recibida</h3>
              <p className="mt-1 text-sm text-gray-500">
                Hemos recibido tu solicitud el {status.submissionDate}. 
                Te notificaremos por correo electrónico cuando hayamos revisado tu caso.
              </p>
            </div>
          </div>
        </div>

        {/* Productos Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-2 bg-blue-50">
              <PackageCheck className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Información de Productos</h3>
              {status.hasProducts ? (
                <p className="mt-1 text-sm text-gray-500">
                  Has seleccionado tus productos exitosamente.{' '}
                  <Button
                    onClick={() => router.push('/onboarding/products/details')}
                    variant="link"
                    className="text-blue-600 p-0 h-auto font-normal"
                  >
                    Agregar más detalles
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </p>
              ) : (
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm text-amber-600">No hemos detectado productos seleccionados</p>
                  <Button
                    onClick={() => router.push('/onboarding')}
                    size="sm"
                    variant="outline"
                    className="ml-auto"
                  >
                    Seleccionar productos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Empresa Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-2 bg-purple-50">
              <Building2 className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Información de Empresa</h3>
              {status.hasCompanyInfo ? (
                <p className="mt-1 text-sm text-gray-500">
                  Has completado la información básica de tu empresa.
                </p>
              ) : (
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm text-amber-600">Falta información de tu empresa</p>
                  <Button
                    onClick={() => router.push('/onboarding/company-info')}
                    size="sm"
                    variant="outline"
                    className="ml-auto"
                  >
                    Completar información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recordatorio Card */}
        <div className="bg-gradient-to-br from-[#131F42]/5 to-[#131F42]/10 rounded-xl border p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-2 bg-white">
              <ClipboardList className="w-6 h-6 text-[#131F42]" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#131F42]">¿Sabías que?</h3>
              <p className="mt-1 text-sm text-gray-600">
                Entre más información proporciones sobre tus productos (dimensiones, peso, empaque),
                más rápido podremos procesar tu solicitud.{' '}
                <Button
                  onClick={() => router.push('/onboarding/products/details')}
                  variant="link"
                  className="text-[#131F42] p-0 h-auto font-normal"
                >
                  Agregar detalles ahora
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="bg-white rounded-xl border p-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Próximos pasos:</h4>
        <ol className="space-y-4">
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#131F42]/20 text-sm font-medium text-[#131F42]">
              1
            </span>
            <span>Revisaremos la información proporcionada</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#131F42]/20 text-sm font-medium text-[#131F42]">
              2
            </span>
            <span>Te contactaremos si necesitamos información adicional</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#131F42]/20 text-sm font-medium text-[#131F42]">
              3
            </span>
            <span>Recibirás un correo con el resultado de la evaluación</span>
          </li>
        </ol>
      </div>
    </div>
  )
} 