'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/lib/hooks/useDebounce'

export function BlogSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')
  const debouncedSearch = useDebounce(searchTerm, 300)

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/blog?q=${encodeURIComponent(debouncedSearch)}`)
    } else {
      router.push('/blog')
    }
  }, [debouncedSearch, router])

  return (
    <div className="relative w-full max-w-xl mx-auto mb-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar artículos..."
        className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 
          focus:border-[#131F42] focus:ring-1 focus:ring-[#131F42] 
          transition-colors text-base"
      />
    </div>
  )
} 