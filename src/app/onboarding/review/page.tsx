'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function ReviewPage() {
  const router = useRouter()

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
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p>Estado de la revisión aquí...</p>
      </div>
    </div>
  )
} 