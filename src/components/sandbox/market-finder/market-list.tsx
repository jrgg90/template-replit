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
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-100">
        <h3 className="text-2xl font-medium text-gray-900">
          Mercados Recomendados para tu Producto
        </h3>
      </div>

      {/* Column Headers */}
      <div className="px-8 py-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center">
          <div className="w-[280px]">
            <span className="text-sm font-medium text-gray-500">País</span>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="w-[180px] text-center">
              <span className="text-sm font-medium text-gray-500">Búsquedas Mensuales</span>
            </div>
            <div className="w-[200px] text-center">
              <span className="text-sm font-medium text-gray-500">Nivel de Competencia</span>
            </div>
            <div className="w-[180px] text-center">
              <span className="text-sm font-medium text-gray-500">Ingreso Promedio (USD)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market List */}
      <div className="divide-y divide-gray-100">
        {markets.map((market) => (
          <div 
            key={market.id}
            className="px-8 py-6 flex items-center hover:bg-gray-50 transition-colors"
          >
            {/* Left: Ranking, Flag, and Name */}
            <div className="w-[280px] flex items-center gap-4">
              <span className="text-xl font-medium text-gray-400">
                {market.id}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{market.flag}</span>
                <span className="text-lg font-medium text-gray-900 whitespace-nowrap">{market.name}</span>
              </div>
            </div>

            {/* Right: Metrics */}
            <div className="flex-1 flex justify-between items-center">
              {/* Search Volume */}
              <div className="w-[180px] text-center">
                <span className="text-xl font-medium text-gray-900">
                  {market.searchVolume}
                </span>
                <span className="block text-sm text-gray-500 mt-1">búsquedas/mes</span>
              </div>

              {/* Competition Level */}
              <div className="w-[200px] flex flex-col items-center">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-2.5 w-20 rounded-full bg-gray-100 overflow-hidden">
                    <div 
                      className={`h-full ${
                        market.competition === 'Very low' ? 'w-1/4 bg-green-500' :
                        market.competition === 'Low' ? 'w-2/4 bg-blue-500' :
                        market.competition === 'Medium' ? 'w-3/4 bg-yellow-500' :
                        'w-full bg-red-500'
                      }`}
                    />
                  </div>
                  <span className="text-xl text-gray-900">{market.competition}</span>
                </div>
              </div>

              {/* Market Size */}
              <div className="w-[180px] text-center">
                <span className="text-xl font-medium text-gray-900">
                  {market.marketSize}
                </span>
                <span className="block text-sm text-gray-500 mt-1">mensual</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 