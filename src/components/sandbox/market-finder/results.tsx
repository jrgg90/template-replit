export function MarketFinderResults() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Aquí irían los resultados de la búsqueda */}
      <div className="p-6 bg-white rounded-xl border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🇺🇸</span>
          <h3 className="text-lg font-medium text-gray-900">Estados Unidos</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tamaño de mercado</span>
            <span className="font-medium">$320B</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Crecimiento anual</span>
            <span className="font-medium">12.4%</span>
          </div>
        </div>
      </div>
    </div>
  )
} 