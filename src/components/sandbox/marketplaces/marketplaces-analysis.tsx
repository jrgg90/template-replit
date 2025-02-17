"use client"

interface Marketplace {
  id: string
  name: string
  logo: string
  monthlyTransactions: string
  competition: 'low' | 'medium' | 'high'
  marketRelevance: number
  categories: string[]
  recommendationScore: number
}

const marketplaces: Marketplace[] = [
  {
    id: 'amazon',
    name: 'Amazon Canada',
    logo: '/logos-partners-png/amazon.png',
    monthlyTransactions: '2.5M+',
    competition: 'medium',
    marketRelevance: 92,
    categories: ['Home & Kitchen', 'Beauty & Personal Care'],
    recommendationScore: 95
  },
  {
    id: 'walmart',
    name: 'Walmart CA',
    logo: '/logos-partners-png/walmart.png',
    monthlyTransactions: '850K+',
    competition: 'low',
    marketRelevance: 78,
    categories: ['Home Goods', 'Personal Care'],
    recommendationScore: 82
  },
  {
    id: 'etsy',
    name: 'Etsy',
    logo: '/logos-partners-png/etsy.png',
    monthlyTransactions: '320K+',
    competition: 'low',
    marketRelevance: 65,
    categories: ['Handmade', 'Natural Products'],
    recommendationScore: 76
  }
]

export function MarketplacesAnalysis() {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100/50">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium text-gray-400">Análisis de Marketplaces</h3>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-blue-50/50 text-blue-600 rounded-full text-xs">
              Canadá
            </span>
            <span className="px-2 py-0.5 bg-green-50/50 text-green-600 rounded-full text-xs">
              3 Marketplaces Analizados
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="px-4 py-3">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100/50">
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">Marketplace</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">Transacciones/Mes</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">Competencia</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-400">Relevancia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/50">
            {marketplaces.map((marketplace) => (
              <tr key={marketplace.id} className="group hover:bg-gray-50/50">
                <td className="px-2 py-3">
                  <div className="flex items-center gap-2">
                    <img 
                      src={marketplace.logo} 
                      alt={marketplace.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {marketplace.name}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <span className="text-sm text-gray-600">
                    {marketplace.monthlyTransactions}
                  </span>
                </td>
                <td className="px-2 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                    ${marketplace.competition === 'low' ? 'bg-green-50 text-green-600' :
                      marketplace.competition === 'medium' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                    {marketplace.competition === 'low' ? 'Baja' :
                     marketplace.competition === 'medium' ? 'Media' :
                     'Alta'}
                  </span>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${marketplace.marketRelevance}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {marketplace.marketRelevance}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendation */}
      <div className="px-4 py-3 bg-blue-50/30 border-t border-blue-100/50">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100/50 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Recomendación</h4>
            <p className="text-xs text-gray-600">
              Basado en tu inventario y objetivos, recomendamos comenzar con Amazon Canada debido a su alto volumen de transacciones y relevancia de mercado para tus categorías de productos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 