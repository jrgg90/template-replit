"use client"

interface Market {
  id: number
  flag: string
  name: string
  searchVolume: string
  competition: 'Very low' | 'Low' | 'Medium' | 'High'
  marketSize: string
}

const markets: Market[] = [
  {
    id: 1,
    flag: "🇺🇸",
    name: "Estados Unidos",
    searchVolume: "21m",
    competition: "Medium",
    marketSize: "$34.4k",
  },
  {
    id: 2,
    flag: "🇩🇪",
    name: "Alemania",
    searchVolume: "13m",
    competition: "Medium",
    marketSize: "$39.4k",
  },
  {
    id: 3,
    flag: "🇪🇸",
    name: "España",
    searchVolume: "12m",
    competition: "Very low",
    marketSize: "$26.1k",
  },
]

export function MarketList() {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 overflow-hidden">
      {/* Column Headers */}
      <div className="px-5 py-2.5 border-b border-gray-100/50">
        <div className="flex items-center">
          <div className="w-[180px]">
            <span className="text-xs font-medium text-gray-400">País</span>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="w-[120px] text-center">
              <span className="text-xs font-medium text-gray-400">Búsquedas Mensuales</span>
            </div>
            <div className="w-[120px] text-center">
              <span className="text-xs font-medium text-gray-400">Nivel de Competencia</span>
            </div>
            <div className="w-[120px] text-center">
              <span className="text-xs font-medium text-gray-400">Ingreso Promedio (USD)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market List */}
      <div className="divide-y divide-gray-100/50">
        {markets.map((market) => (
          <div 
            key={market.id}
            className="px-5 py-3.5 flex items-center hover:bg-white/80 transition-colors"
          >
            {/* Left: Ranking, Flag, and Name */}
            <div className="w-[180px] flex items-center gap-3">
              <span className="text-sm font-medium text-gray-400/80">
                {market.id}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-lg">{market.flag}</span>
                <span className="text-sm font-medium text-gray-900">{market.name}</span>
              </div>
            </div>

            {/* Right: Metrics */}
            <div className="flex-1 flex justify-between items-center">
              {/* Search Volume */}
              <div className="w-[120px] text-center">
                <span className="text-sm font-medium text-gray-900">
                  {market.searchVolume}
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">búsquedas/mes</span>
              </div>

              {/* Competition Level */}
              <div className="w-[120px] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-10 rounded-full bg-gray-100/70 overflow-hidden">
                    <div 
                      className={`h-full ${
                        market.competition === 'Very low' ? 'w-1/4 bg-green-500/80' :
                        market.competition === 'Low' ? 'w-2/4 bg-blue-500/80' :
                        market.competition === 'Medium' ? 'w-3/4 bg-yellow-500/80' :
                        'w-full bg-red-500/80'
                      }`}
                    />
                  </div>
                  <span className="text-sm text-gray-900">{market.competition}</span>
                </div>
              </div>

              {/* Market Size */}
              <div className="w-[120px] text-center">
                <span className="text-sm font-medium text-gray-900">
                  {market.marketSize}
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">mensual</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 