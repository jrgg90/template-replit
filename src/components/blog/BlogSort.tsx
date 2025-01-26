'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

export function BlogSort() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentSort = searchParams.get('sort') || 'newest'

  const handleSort = (value: string) => {
    router.push(`/blog?sort=${value}`)
  }

  return (
    <div className="relative inline-block">
      <select
        value={currentSort}
        onChange={(e) => handleSort(e.target.value)}
        className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 
          text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#131F42] cursor-pointer"
      >
        <option value="newest">Más recientes</option>
        <option value="oldest">Más antiguos</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  )
} 