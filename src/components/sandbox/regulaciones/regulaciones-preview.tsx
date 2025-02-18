"use client"

import { motion } from "framer-motion"

interface Certification {
  id: string
  name: string
  description: string
  required: boolean
  status: 'pending' | 'in_progress' | 'completed'
  deadline: string
  priority: 'high' | 'medium' | 'low'
}

const certifications: Certification[] = [
  {
    id: 'fda',
    name: 'FDA Registration',
    description: 'Registro de establecimiento y listado de productos cosméticos ante la FDA',
    required: true,
    status: 'in_progress',
    deadline: '2024-06-30',
    priority: 'high'
  },
  {
    id: 'safety',
    name: 'Safety Assessment',
    description: 'Evaluación de seguridad de productos y documentación de ingredientes',
    required: true,
    status: 'pending',
    deadline: '2024-07-15',
    priority: 'high'
  },
  {
    id: 'labeling',
    name: 'US Labeling Requirements',
    description: 'Etiquetado conforme a regulaciones de la FDA para cosméticos',
    required: true,
    status: 'completed',
    deadline: '2024-05-01',
    priority: 'high'
  }
]

export function RegulacionesPreview() {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100/50">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium text-gray-400">Requisitos Regulatorios</h3>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-blue-50/50 text-blue-600 rounded-full text-xs">
              3 Requeridos
            </span>
            <span className="px-2 py-0.5 bg-green-50/50 text-green-600 rounded-full text-xs">
              1 Completado
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        {/* FDA Registration */}
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-[#131F42] mb-1">FDA Registration</h4>
            <p className="text-xs text-gray-600 mb-2">Registro de establecimiento y listado de productos cosméticos ante la FDA</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Fecha límite: 6/29/2024</span>
              <span className="px-2 py-0.5 bg-amber-50/50 text-amber-600 rounded-full text-xs">En Proceso</span>
            </div>
          </div>
        </div>

        {/* Safety Assessment */}
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-[#131F42] mb-1">Safety Assessment</h4>
            <p className="text-xs text-gray-600 mb-2">Evaluación de seguridad de productos y documentación de ingredientes</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Fecha límite: 7/14/2024</span>
              <span className="px-2 py-0.5 bg-gray-50/50 text-gray-600 rounded-full text-xs">Pendiente</span>
            </div>
          </div>
        </div>

        {/* US Labeling Requirements */}
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-[#131F42] mb-1">US Labeling Requirements</h4>
            <p className="text-xs text-gray-600 mb-2">Etiquetado conforme a regulaciones de la FDA para cosméticos</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Fecha límite: 4/30/2024</span>
              <span className="px-2 py-0.5 bg-green-50/50 text-green-600 rounded-full text-xs">Completado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 