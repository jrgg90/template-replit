"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { RequirementsList } from "@/components/regulatory/requirements-list"

interface MarketCardProps {
  country: string
  flag: string
  score: number
  description: string
  isExpanded?: boolean
  onToggle?: () => void
  metrics?: {
    demandGrowth: number
    marketplaceTraffic: number
    marketSize: number
  }
  analysis?: {
    cost: string
    competition: string
    regulation: string
  }
}

function MarketCard({ 
  country, 
  flag, 
  score, 
  description, 
  isExpanded, 
  onToggle,
  metrics,
  analysis 
}: MarketCardProps) {
  return (
    <motion.div 
      layout
      className={`bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden
        ${!isExpanded ? 'h-[182px]' : ''}`}
    >
      <div 
        className="p-8 cursor-pointer max-w-[480px]"
        onClick={onToggle}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{flag}</span>
            <h3 className="text-3xl font-medium">{country}</h3>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-medium">{score}</span>
            <span className="text-base text-gray-500">/100</span>
          </div>
        </div>

        {/* Description */}
        <div className="pr-8">
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>
        
        {/* Expanded Content */}
        {isExpanded && metrics && analysis && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-8 mt-8 border-t border-gray-100"
          >
            <div className="space-y-8">
              {/* Metrics */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-lg">Crecimiento de Demanda</span>
                    <span className="font-medium text-lg">{metrics.demandGrowth}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#131F42] rounded-full"
                      style={{ width: `${metrics.demandGrowth}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-lg">Tráfico Marketplaces</span>
                    <span className="font-medium text-lg">{metrics.marketplaceTraffic}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#131F42] rounded-full"
                      style={{ width: `${metrics.marketplaceTraffic}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-lg">Tamaño de Mercado</span>
                    <span className="font-medium text-lg">{metrics.marketSize}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#131F42] rounded-full"
                      style={{ width: `${metrics.marketSize}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Analysis */}
              <div className="grid grid-cols-3 gap-12 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-gray-500 text-base mb-2">Costo</p>
                  <p className="font-medium text-lg">{analysis.cost}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-base mb-2">Competencia</p>
                  <p className="font-medium text-lg">{analysis.competition}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-base mb-2">Regulación</p>
                  <p className="font-medium text-lg">{analysis.regulation}</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full mt-8 py-4 px-6 bg-[#131F42] text-white rounded-xl font-medium text-lg"
              >
                Explorar con Exbordia
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function MarketResearchLanding() {
  const [expandedCountry, setExpandedCountry] = useState<string>("Francia")

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Link href="/sandbox" className="text-gray-600 hover:text-gray-900">
              ← Volver al Sandbox
            </Link>
          </div>
        </div>
      </header>
      
      {/* Regulatory Requirements Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Regulaciones
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Cumplimiento regulatorio
                  <span className="block font-medium">simplificado.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Mantén el control de tus requisitos regulatorios y certificaciones necesarias para cada mercado.
                </p>
              </div>
            </div>

            {/* Right Column - Requirements List */}
            <div className="flex-1">
              <RequirementsList />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pt-44 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8">
            <MarketCard
              country="Francia"
              flag="🇫🇷"
              score={89}
              description="Mercado con alto poder adquisitivo y fuerte demanda de productos premium."
              isExpanded={expandedCountry === "Francia"}
              onToggle={() => setExpandedCountry(expandedCountry === "Francia" ? "" : "Francia")}
              metrics={{
                demandGrowth: 85,
                marketplaceTraffic: 92,
                marketSize: 78
              }}
              analysis={{
                cost: "Medio",
                competition: "Moderada",
                regulation: "Media"
              }}
            />

            <MarketCard
              country="Alemania"
              flag="🇩🇪"
              score={86}
              description="Mayor economía de Europa con consumidores tech-savvy y alta adopción de e-commerce."
              isExpanded={expandedCountry === "Alemania"}
              onToggle={() => setExpandedCountry(expandedCountry === "Alemania" ? "" : "Alemania")}
              metrics={{
                demandGrowth: 82,
                marketplaceTraffic: 88,
                marketSize: 90
              }}
              analysis={{
                cost: "Alto",
                competition: "Alta",
                regulation: "Alta"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
} 