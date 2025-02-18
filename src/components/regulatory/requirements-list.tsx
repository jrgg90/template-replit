"use client"

interface RequirementProps {
  title: string
  description: string
  dueDate: string
  status: 'required' | 'pending' | 'completed' | 'in-progress'
}

export function RequirementsList() {
  const requirements: RequirementProps[] = [
    {
      title: "FDA Registration",
      description: "Registro de establecimiento y listado de productos cosméticos ante la FDA",
      dueDate: "6/29/2024",
      status: 'in-progress'
    },
    {
      title: "Safety Assessment",
      description: "Evaluación de seguridad de productos y documentación de ingredientes",
      dueDate: "7/14/2024",
      status: 'pending'
    },
    {
      title: "US Labeling Requirements",
      description: "Etiquetado conforme a regulaciones de la FDA para cosméticos",
      dueDate: "4/30/2024",
      status: 'completed'
    }
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium text-[#131F42]">Requisitos Regulatorios</h3>
        <div className="flex items-center gap-2">
          <span className="text-[#131F42] font-medium">3 Requeridos</span>
          <span className="text-green-700 font-medium">1 Completado</span>
        </div>
      </div>

      <div className="space-y-4">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            {/* Status Indicator */}
            <div className="flex-shrink-0 mt-1">
              {req.status === 'required' && (
                <div className="w-3 h-3 rounded-full bg-[#131F42]" />
              )}
              {req.status === 'pending' && (
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              )}
              {req.status === 'completed' && (
                <div className="w-3 h-3 rounded-full bg-green-700" />
              )}
              {req.status === 'in-progress' && (
                <div className="w-3 h-3 rounded-full bg-amber-500" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-medium text-[#131F42] mb-1">{req.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">{req.description}</p>
                </div>
                {req.status === 'required' && (
                  <span className="px-3 py-1 text-sm font-medium bg-red-50 text-red-600 rounded-full">
                    Requerido
                  </span>
                )}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Fecha límite:</span>
                  <span className="text-sm font-medium text-[#131F42]">{req.dueDate}</span>
                </div>
                {req.status === 'completed' && (
                  <span className="px-3 py-1 text-sm font-medium bg-green-50 text-green-700 rounded-full">
                    Completado
                  </span>
                )}
                {req.status === 'pending' && (
                  <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">
                    Pendiente
                  </span>
                )}
                {req.status === 'in-progress' && (
                  <span className="px-3 py-1 text-sm font-medium bg-amber-50 text-amber-600 rounded-full">
                    En Proceso
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 