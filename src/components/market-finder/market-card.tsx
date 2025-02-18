"use client"

import { motion } from "framer-motion"

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

export function MarketCard({ 
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
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
        ${!isExpanded ? 'h-[140px]' : ''}`}
    >
      <div 
        className="p-6 cursor-pointer w-[340px]"
        onClick={onToggle}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{flag}</span>
            <h3 className="text-xl font-medium">{country}</h3>
          </div>
          <div className="flex items-baseline">
            <span className="text-xl font-medium">{score}</span>
            <span className="text-sm text-gray-500">/100</span>
          </div>
        </div>

        {/* Description */}
        <div className="pr-4">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Expanded Content */}
        {isExpanded && metrics && analysis && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-6 mt-6 border-t border-gray-100"
          >
            <div className="space-y-6">
              {/* Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Crecimiento de Demanda</span>
                    <span className="font-medium text-sm">{metrics.demandGrowth}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#131F42] rounded-full"
                      style={{ width: `${metrics.demandGrowth}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Tráfico Marketplaces</span>
                    <span className="font-medium text-sm">{metrics.marketplaceTraffic}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#131F42] rounded-full"
                      style={{ width: `${metrics.marketplaceTraffic}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Tamaño de Mercado</span>
                    <span className="font-medium text-sm">{metrics.marketSize}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#131F42] rounded-full"
                      style={{ width: `${metrics.marketSize}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Analysis */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-gray-500 text-xs mb-1">Costo</p>
                  <p className="font-medium text-sm">{analysis.cost}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-xs mb-1">Competencia</p>
                  <p className="font-medium text-sm">{analysis.competition}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-xs mb-1">Regulación</p>
                  <p className="font-medium text-sm">{analysis.regulation}</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full mt-6 py-3 px-4 bg-[#131F42] text-white rounded-lg font-medium text-sm"
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