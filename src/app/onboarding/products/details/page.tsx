'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { ProductDetailsForm } from './components/ProductDetailsForm'

export default function ProductDetailsPage() {
  const router = useRouter()

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        {/* Botón Volver */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Regresar a selección de productos</span>
        </button>

        <div className="flex justify-between items-baseline">
          <div className="text-left">
            <h2 className="text-4xl tracking-tight">
              <span className="font-light text-gray-600">Proporciona información detallada</span>
              <span className="font-medium text-[#131F42]"> de tus productos</span>
            </h2>
            <p className="mt-3 text-base text-gray-600 font-light">
              Esta información es necesaria para el proceso de exportación
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-sm border">
        <ProductDetailsForm />
      </div>
    </div>
  )
} 