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
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          Descubre Nuevos Mercados para tu Marca
        </h1>
        <p className="text-lg text-muted-foreground">
          Exbordia ha analizado múltiples factores para recomendarte los mejores países para expandir tu negocio.
        </p>
      </div>

      {/* Market Search Section */}
      <div className="max-w-xl mx-auto">
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Command className="h-5 w-5 text-muted-foreground" />
              <h2 className="font-semibold">Explorar Mercados</h2>
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un país para analizar" />
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

      {/* Recommended Markets Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Mercados Recomendados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>

      {/* Market Comparison Table */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Comparación de Mercados</h2>
        <MarketComparisonTable markets={recommendedMarkets} />
      </div>
    </div>
  )
} 