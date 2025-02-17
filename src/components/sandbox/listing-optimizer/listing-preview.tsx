"use client"

import Image from 'next/image'

interface ListingContent {
  title: string
  description: string
  marketplace: string
  language: string
}

const originalListing: ListingContent = {
  title: "Jabón de Coco en barra",
  description: "Jabón artesanal elaborado en pequeños lotes usando métodos tradicionales. Suave para uso diario y perfecto para todo tipo de piel. Una alternativa más natural que los jabones comerciales.",
  marketplace: "Amazon México",
  language: "es-MX"
}

const optimizedListing: ListingContent = {
  title: "Organic Coconut Bar Soap | Natural Handmade Soap | Daily Use",
  description: "Coconut Bar Soap is perfect for everyday cleansing. It's handmade in small batches using traditional methods and gentle enough for daily use. A more natural alternative to commercial soap.",
  marketplace: "Amazon USA",
  language: "en-US"
}

export function ListingPreview() {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-gray-100/50">
        <h3 className="text-xs font-medium text-gray-400">Optimización de Listing</h3>
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-100/50">
        {/* Original Listing */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              {originalListing.marketplace}
            </span>
          </div>

          <div className="relative aspect-[4/3] mb-3 rounded-lg overflow-hidden bg-gray-50">
            <Image 
              src="/casos/soap.png" 
              alt="Jabón de Coco"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900 leading-snug">
              {originalListing.title}
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              {originalListing.description}
            </p>
          </div>
        </div>

        {/* Optimized Listing */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
              {optimizedListing.marketplace}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-600">
              Optimizado
            </span>
          </div>

          <div className="relative aspect-[4/3] mb-3 rounded-lg overflow-hidden bg-gray-50">
            <Image 
              src="/casos/soap.png" 
              alt="Coconut Soap"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Image 
                src="/logos-partners-png/amazon.png" 
                alt="Amazon USA" 
                width={40}
                height={12}
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900 leading-snug">
              {optimizedListing.title}
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              {optimizedListing.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 