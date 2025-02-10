"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Command } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MarketCard } from "./components/MarketCard"
import { MarketComparisonTable } from "./components/MarketComparisonTable"

// Datos simulados
const recommendedMarkets = [
  {
    id: 1,
    country: "Francia",
    flag: "🇫🇷",
    score: 89,
    demandGrowth: 85,
    marketplaceTraffic: 92,
    marketSize: 78,
    entryCost: "Medio",
    competition: "Moderada",
    regulations: "Media",
    description: "Mercado con alto poder adquisitivo y fuerte demanda de productos premium.",
  },
  {
    id: 2,
    country: "Alemania",
    flag: "🇩🇪",
    score: 86,
    demandGrowth: 82,
    marketplaceTraffic: 95,
    marketSize: 90,
    entryCost: "Alto",
    competition: "Alta",
    regulations: "Alta",
    description: "Mayor economía de Europa con consumidores tech-savvy y alta adopción de e-commerce.",
  },
  {
    id: 3,
    country: "España",
    flag: "🇪🇸",
    score: 82,
    demandGrowth: 75,
    marketplaceTraffic: 85,
    marketSize: 70,
    entryCost: "Bajo",
    competition: "Moderada",
    regulations: "Media",
    description: "Puerta de entrada a mercados hispanos con creciente adopción digital.",
  },
]

export default function MarketResearchPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("")

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto pt-8">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
          Descubre Nuevos Mercados para tu Marca
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Exbordia ha analizado múltiples factores para recomendarte los mejores países para expandir tu negocio.
        </p>
      </div>

      {/* Recommended Markets Section - Ahora es la sección principal */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-light text-gray-900">Mercados Recomendados</h2>
            <p className="mt-2 text-gray-600">Basado en tu perfil de negocio y objetivos de expansión</p>
          </div>
          {/* Botón de explorar movido aquí */}
          <button 
            onClick={() => document.getElementById('exploreMarkets')?.focus()}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Command className="h-4 w-4" />
            <span className="text-sm font-medium">Explorar otros mercados</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>

      {/* Market Search Section - Ahora menos prominente */}
      <div className="max-w-2xl mx-auto opacity-75 hover:opacity-100 transition-opacity">
        <Card className="p-4 shadow-sm border bg-white/50 backdrop-blur-sm">
          <div className="space-y-3">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger id="exploreMarkets" className="w-full h-10 text-sm">
                <SelectValue placeholder="Buscar otros países..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portugal">🇵🇹 Portugal</SelectItem>
                <SelectItem value="italy">🇮🇹 Italia</SelectItem>
                <SelectItem value="netherlands">🇳🇱 Países Bajos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>

      {/* Market Comparison Table */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900">Comparación de Mercados</h2>
          <p className="mt-2 text-gray-600">Análisis detallado de métricas clave por país</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <MarketComparisonTable markets={recommendedMarkets} />
        </div>
      </div>
    </div>
  )
} 