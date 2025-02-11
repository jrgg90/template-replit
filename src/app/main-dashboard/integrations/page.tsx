"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type IntegrationType = 'marketplace' | 'logistics' | 'other'
type ConnectionStatus = 'connected' | 'not_connected' | 'error'

interface Integration {
  id: string
  name: string
  type: IntegrationType
  icon: string
  status: ConnectionStatus
}

const integrations: Integration[] = [
  // Marketplaces
  { id: 'gmail', name: 'Gmail', type: 'marketplace', icon: '/icons/gmail.svg', status: 'error' },
  { id: 'notion', name: 'Notion', type: 'marketplace', icon: '/icons/notion.svg', status: 'connected' },
  { id: 'affinity', name: 'Affinity', type: 'marketplace', icon: '/icons/affinity.svg', status: 'not_connected' },
  { id: 'airtable', name: 'Airtable', type: 'marketplace', icon: '/icons/airtable.svg', status: 'not_connected' },
  { id: 'anthropic', name: 'Anthropic', type: 'marketplace', icon: '/icons/anthropic.svg', status: 'not_connected' },
  
  // Logistics
  { id: 'dhl', name: 'DHL', type: 'logistics', icon: '/icons/dhl.svg', status: 'not_connected' },
  { id: 'fedex', name: 'FedEx', type: 'logistics', icon: '/icons/fedex.svg', status: 'not_connected' },
  { id: 'ups', name: 'UPS', type: 'logistics', icon: '/icons/ups.svg', status: 'not_connected' },
  
  // Other
  { id: 'customs', name: 'Agentes Aduanales', type: 'other', icon: '/icons/customs.svg', status: 'not_connected' },
  { id: 'payments', name: 'Pagos Internacionales', type: 'other', icon: '/icons/payments.svg', status: 'not_connected' },
]

export default function IntegrationsPage() {
  const [selectedType, setSelectedType] = useState<IntegrationType>('marketplace')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredIntegrations = integrations.filter(integration => 
    integration.type === selectedType &&
    integration.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
          Gestiona tus Integraciones
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Conéctate con marketplaces, logística y otros servicios en un solo clic.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar integraciones..."
            className="pl-10 h-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 border-b">
          {(['marketplace', 'logistics', 'other'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                selectedType === type
                  ? "border-[#0F172A] text-[#0F172A]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              )}
            >
              {type === 'marketplace' ? 'Marketplaces' : 
               type === 'logistics' ? 'Logística' : 'Otros'}
            </button>
          ))}
        </div>
      </div>

      {/* Integrations List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredIntegrations.map((integration) => (
          <Card 
            key={integration.id}
            className="overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {integration.status === 'connected' ? 'Conectado' : 
                     integration.status === 'error' ? 'Error de conexión' : 
                     'Sin conectar'}
                  </p>
                </div>
              </div>
              <Button
                variant={integration.status === 'connected' ? 'outline' : 'default'}
                className={cn(
                  "min-w-[100px]",
                  {
                    'bg-gray-100 hover:bg-gray-200 text-gray-700': integration.status === 'connected',
                    'bg-[#0F172A] hover:bg-[#1E293B] text-white': integration.status !== 'connected'
                  }
                )}
              >
                {integration.status === 'connected' ? 'Conectado' :
                 integration.status === 'error' ? 'Reconectar' :
                 'Conectar'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 