"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

// Datos simulados
const recommendedMarkets = [
  {
    id: 1,
    country: "Francia",
    flag: "🇫🇷",
    score: 89,
    description: "Mercado con alto poder adquisitivo y fuerte demanda de productos premium.",
    metrics: {
      demandGrowth: 85,
      marketplaceTraffic: 92,
      marketSize: 78,
    },
    details: {
      cost: "Medio",
      competition: "Moderada",
      regulation: "Media"
    }
  },
  {
    id: 2,
    country: "Alemania",
    flag: "🇩🇪",
    score: 86,
    description: "Mayor economía de Europa con consumidores tech-savvy y alta adopción de e-commerce.",
    metrics: {
      demandGrowth: 82,
      marketplaceTraffic: 95,
      marketSize: 90,
    },
    details: {
      cost: "Alto",
      competition: "Alta",
      regulation: "Alta"
    }
  },
  {
    id: 3,
    country: "España",
    flag: "🇪🇸",
    score: 82,
    description: "Puerta de entrada a mercados hispanos con creciente adopción digital.",
    metrics: {
      demandGrowth: 75,
      marketplaceTraffic: 85,
      marketSize: 70,
    },
    details: {
      cost: "Bajo",
      competition: "Moderada",
      regulation: "Media"
    }
  }
]

export default function MarketResearchPage() {
  const [expandedMarket, setExpandedMarket] = useState<number | null>(null)

  const toggleMarket = (marketId: number) => {
    setExpandedMarket(expandedMarket === marketId ? null : marketId)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
          Descubre Nuevos Mercados para tu Marca
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Exbordia ha analizado múltiples factores para recomendarte los mejores países para expandir tu negocio.
        </p>
      </div>

      {/* Search and Title Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-gray-900">Mercados Recomendados</h2>
        <button className="flex items-center gap-2 px-5 py-2.5 text-[#0F172A] bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
          <Search className="h-4 w-4" />
          <span className="text-sm font-medium">Explorar más mercados</span>
        </button>
      </div>

      {/* Market Cards */}
      <div className="grid grid-cols-3 gap-6">
        {recommendedMarkets.map((market) => (
          <Card 
            key={market.id}
            className="overflow-hidden transition-all duration-200"
          >
            {/* Card Header - Always visible */}
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleMarket(market.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{market.flag}</span>
                  <h3 className="text-xl font-medium text-gray-900">{market.country}</h3>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-light text-[#0F172A]">{market.score}</span>
                  <span className="text-sm text-gray-500">/100</span>
                </div>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {market.description}
              </p>
              <div className="flex justify-end mt-4">
                {expandedMarket === market.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>

            {/* Expanded Content */}
            {expandedMarket === market.id && (
              <div className="border-t">
                <div className="p-6 space-y-6">
                  {/* Metrics */}
                  <div className="space-y-4">
                    <MetricBar 
                      label="Crecimiento de Demanda" 
                      value={market.metrics.demandGrowth} 
                    />
                    <MetricBar 
                      label="Tráfico Marketplace" 
                      value={market.metrics.marketplaceTraffic} 
                    />
                    <MetricBar 
                      label="Tamaño de Mercado" 
                      value={market.metrics.marketSize} 
                    />
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <DetailBox label="Costo" value={market.details.cost} />
                    <DetailBox label="Competencia" value={market.details.competition} />
                    <DetailBox label="Regulación" value={market.details.regulation} />
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-[#0F172A] text-white rounded-lg py-3 text-base font-medium hover:bg-[#1E293B] transition-colors">
                    Explorar con Exbordia
                  </button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-gray-900">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#0F172A] rounded-full transition-all duration-500" 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  )
}

function DetailBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  )
} 