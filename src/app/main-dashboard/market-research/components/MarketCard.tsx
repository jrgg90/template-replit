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
    <Card className="overflow-hidden">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{market.flag}</span>
            <h3 className="font-semibold">{market.country}</h3>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary">{market.score}</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">{market.description}</p>

        {/* Metrics */}
        <div className="space-y-3">
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
        <div className="grid grid-cols-3 gap-2 text-sm">
          <InfoTag label="Costo" value={market.entryCost} />
          <InfoTag label="Competencia" value={market.competition} />
          <InfoTag label="Regulación" value={market.regulations} />
        </div>

        {/* CTA Button */}
        <button className="w-full bg-primary text-primary-foreground rounded-lg py-2 text-sm font-medium hover:bg-primary/90">
          Explorar con Exbordia
        </button>
      </div>
    </Card>
  )
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full" 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  )
}

function InfoTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-2 bg-secondary rounded-lg">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
} 