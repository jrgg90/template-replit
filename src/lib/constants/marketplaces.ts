import { MarketplaceCountry } from '@/types/marketplace'

export const DEFAULT_MARKETPLACES: MarketplaceCountry[] = [
  {
    country: "Estados Unidos",
    flag: "🇺🇸",
    platforms: [
      { name: "Shopify US", status: "connected", products: 0, platform: 'shopify' },
      { name: "Amazon US", status: "available", products: 0, platform: 'amazon' },
      { name: "eBay US", status: "available", products: 0, platform: 'ebay' },
      { name: "Walmart", status: "available", products: 0, platform: 'walmart' },
    ]
  },
  {
    country: "España",
    flag: "🇪🇸",
    platforms: [
      { name: "Amazon ES", status: "available", products: 0, platform: 'amazon' },
      { name: "eBay ES", status: "available", products: 0, platform: 'ebay' },
    ]
  },
  {
    country: "México",
    flag: "🇲🇽",
    platforms: [
      { name: "Amazon MX", status: "available", products: 0, platform: 'amazon' },
      { name: "Mercado Libre", status: "available", products: 0, platform: 'mercadolibre' },
    ]
  }
] 