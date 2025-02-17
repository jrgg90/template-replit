"use client"

import { useState } from 'react'
import { MarketFinderHeader } from '@/components/sandbox/market-finder/header'
import { MarketFinderSearch } from '@/components/sandbox/market-finder/search'
import { MarketList } from '@/components/sandbox/market-finder/market-list'

export default function MarketFinderPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketFinderHeader />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <MarketFinderSearch 
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <MarketList />
      </main>
    </div>
  )
} 