export interface Market {
  id: string
  name: string
  flag: string
  marketSize: number
  growth: number
  competition: 'low' | 'medium' | 'high'
  regulations: 'simple' | 'moderate' | 'complex'
}

export interface SearchResult {
  market: Market
  score: number
  matchingFactors: string[]
} 