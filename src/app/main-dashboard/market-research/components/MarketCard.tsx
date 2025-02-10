import { Card } from "@/components/ui/card"

interface MarketCardProps {
  market: {
    country: string
    flag: string
    score: number
    demandGrowth: number
    marketplaceTraffic: number
    marketSize: number
    entryCost: string
    competition: string
    regulations: string
    description: string
  }
}

export function MarketCard({ market }: MarketCardProps) {
  return (
    <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{market.flag}</span>
            <h3 className="text-xl font-medium text-gray-900">{market.country}</h3>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-3xl font-light text-blue-600">{market.score}</span>
            <span className="text-sm text-gray-500">/100</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-gray-600 leading-relaxed">{market.description}</p>

        {/* Metrics */}
        <div className="space-y-4">
          <MetricBar 
            label="Crecimiento de Demanda" 
            value={market.demandGrowth} 
          />
          <MetricBar 
            label="Tráfico Marketplace" 
            value={market.marketplaceTraffic} 
          />
          <MetricBar 
            label="Tamaño de Mercado" 
            value={market.marketSize} 
          />
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-3">
          <InfoTag label="Costo" value={market.entryCost} />
          <InfoTag label="Competencia" value={market.competition} />
          <InfoTag label="Regulación" value={market.regulations} />
        </div>

        {/* CTA Button */}
        <button className="w-full bg-blue-600 text-white rounded-lg py-3 text-base font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow">
          Explorar con Exbordia
        </button>
      </div>
    </Card>
  )
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="text-gray-900 font-semibold">{value}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  )
}

function InfoTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-3 bg-gray-50 rounded-lg">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  )
} 