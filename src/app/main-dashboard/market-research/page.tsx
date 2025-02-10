"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Command, Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MarketCard } from "./components/MarketCard"

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

      {/* Recommended Markets Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-light text-gray-900">Mercados Recomendados</h2>
          </div>
          {/* Botón de explorar mejorado */}
          <button 
            className="flex items-center gap-2 px-5 py-2.5 text-[#0F172A] bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Search className="h-4 w-4" />
            <span className="text-sm font-medium">Explorar más mercados</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>
    </div>
  )
} 