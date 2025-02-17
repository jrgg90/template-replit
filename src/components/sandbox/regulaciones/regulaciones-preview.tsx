"use client"

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

      {/* Certifications List */}
      <div className="divide-y divide-gray-100/50">
        {certifications.map((cert) => (
          <div key={cert.id} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  cert.status === 'completed' ? 'bg-green-500' :
                  cert.status === 'in_progress' ? 'bg-yellow-500' :
                  'bg-gray-300'
                }`} />
                <h4 className="text-sm font-medium text-gray-900">{cert.name}</h4>
                {cert.required && (
                  <span className="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-xs font-medium">
                    Requerido
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-2 pl-4">{cert.description}</p>
            <div className="flex items-center justify-between text-xs pl-4">
              <span className="text-gray-500">
                Fecha límite: {new Date(cert.deadline).toLocaleDateString()}
              </span>
              <span className={`px-2 py-0.5 rounded-full ${
                cert.status === 'completed' ? 'bg-green-50 text-green-600' :
                cert.status === 'in_progress' ? 'bg-yellow-50 text-yellow-600' :
                'bg-gray-50 text-gray-600'
              }`}>
                {cert.status === 'completed' ? 'Completado' :
                 cert.status === 'in_progress' ? 'En Proceso' :
                 'Pendiente'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 