export type MarketplaceStatus = 'connected' | 'pending' | 'available'

export interface Marketplace {
  name: string
  status: MarketplaceStatus
  products: number
  platform: 'amazon' | 'ebay' | 'walmart' | 'shopify' | 'mercadolibre'
}

export interface MarketplaceCountry {
  country: string
  flag: string
  platforms: Marketplace[]
} 