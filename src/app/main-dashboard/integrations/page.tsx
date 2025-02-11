"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

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

  const getButtonProps = (status: ConnectionStatus) => {
    switch (status) {
      case 'connected':
        return {
          className: "text-sm px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200",
          children: "Conectado"
        }
      case 'error':
        return {
          className: "text-sm px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700",
          children: "Reconectar"
        }
      default:
        return {
          className: "text-sm px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700",
          children: "Conectar"
        }
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Gestiona tus Integraciones
        </h1>
        <p className="text-gray-600">
          Conéctate con marketplaces, logística y otros servicios en un solo clic.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Buscar integraciones..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b">
        {(['marketplace', 'logistics', 'other'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={cn(
              "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
              selectedType === type
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            )}
          >
            {type === 'marketplace' ? 'Marketplaces' : 
             type === 'logistics' ? 'Logística' : 'Otros'}
          </button>
        ))}
      </div>

      {/* Integrations List */}
      <Card className="divide-y">
        {filteredIntegrations.map((integration) => (
          <div
            key={integration.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                {/* Placeholder para el ícono */}
                <div className="w-5 h-5 bg-gray-300 rounded" />
              </div>
              <span className="text-sm font-medium text-gray-900">
                {integration.name}
              </span>
            </div>
            <button {...getButtonProps(integration.status)} />
          </div>
        ))}
      </Card>
    </div>
  )
} 