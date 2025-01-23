'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProductDetailsForm } from './components/ProductDetailsForm'

export default function ProductDetailsPage() {
  const router = useRouter()

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
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

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-8 mt-4 border-t border-gray-100">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="text-gray-500 border border-gray-200 hover:bg-gray-50 
            hover:text-gray-700 font-light px-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Regresar a selección de productos
        </Button>
        <Button
          onClick={() => router.push('/onboarding/review')}
          className="bg-[#131F42] text-white hover:bg-[#1c2b5d] 
            font-light px-6 text-sm"
        >
          Continuar
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
} 