import { Search } from 'lucide-react'

interface MarketFinderSearchProps {
  value: string
  onChange: (value: string) => void
}

export function MarketFinderSearch({ value, onChange }: MarketFinderSearchProps) {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Busca un país o región..."
          className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition-all duration-200"
        />
      </div>
    </div>
  )
} 