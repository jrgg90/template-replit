"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Plus, ChevronRight, ShoppingBag, AlertCircle, Sparkles } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Datos simulados para la demo
const connectedMarketplaces = [
  {
    country: "Estados Unidos",
    flag: "🇺🇸",
    platforms: [
      { name: "Amazon US", status: "connected", products: 156 },
      { name: "eBay US", status: "pending", products: 0 },
      { name: "Walmart", status: "available", products: 0 },
    ]
  },
  {
    country: "España",
    flag: "🇪🇸",
    platforms: [
      { name: "Amazon ES", status: "connected", products: 89 },
      { name: "eBay ES", status: "available", products: 0 },
    ]
  },
  {
    country: "México",
    flag: "🇲🇽",
    platforms: [
      { name: "Amazon MX", status: "connected", products: 134 },
      { name: "Mercado Libre", status: "connected", products: 98 },
    ]
  }
]

const products = [
  {
    id: 1,
    name: "Bolso de Cuero Premium",
    image: "/product-1.jpg",
    marketplace: "Amazon US",
    status: "published",
    optimizationScore: 85,
    suggestions: 3,
  },
  // ... más productos
]

export default function ProductListingsPage() {
  const [selectedMarketplace, setSelectedMarketplace] = useState("Amazon US")
  const [expandedCountries, setExpandedCountries] = useState<string[]>(["Estados Unidos"])

  const toggleCountry = (country: string) => {
    setExpandedCountries(prev => 
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
          Tus Marketplaces y Product Listings
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Administra Tus marketplaces globales y optimiza tus productos para cada mercado.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Marketplaces */}
        <div className="col-span-12 md:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Tus Marketplaces</h2>
            <Button variant="outline" size="sm" className="h-8">
              <Plus className="h-4 w-4 mr-1" />
              Nuevo
            </Button>
          </div>

          {/* Marketplaces List */}
          <div className="space-y-3">
            {connectedMarketplaces.map((country) => (
              <Card key={country.country} className="overflow-hidden">
                <button
                  onClick={() => toggleCountry(country.country)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{country.flag}</span>
                    <span className="font-medium text-gray-900">{country.country}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedCountries.includes(country.country) ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {expandedCountries.includes(country.country) && (
                  <div className="border-t divide-y">
                    {country.platforms.map((platform) => (
                      <div
                        key={platform.name}
                        className="p-3 flex items-center justify-between hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <ShoppingBag className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{platform.name}</p>
                            <p className="text-xs text-gray-500">
                              {platform.status === 'connected' 
                                ? `${platform.products} productos` 
                                : 'Sin conectar'}
                            </p>
                          </div>
                        </div>
                        {platform.status === 'connected' ? (
                          <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                            Conectado
                          </span>
                        ) : (
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Conectar
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column - Products */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Tus Productos</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="pl-9 h-9 w-[250px] rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[130px] h-9 text-sm">
                  <SelectValue placeholder="Filtrar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="published">Publicados</SelectItem>
                  <SelectItem value="pending">Pendientes</SelectItem>
                  <SelectItem value="optimizable">Optimizables</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Table */}
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                      Producto
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                      Estado
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                      Optimización
                    </th>
                    <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-gray-100" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.marketplace}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          Publicado
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#0F172A] rounded-full" 
                              style={{ width: `${product.optimizationScore}%` }} 
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-700">
                            {product.optimizationScore}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" className="h-8">
                          <Sparkles className="h-4 w-4 mr-1 text-[#0F172A]" />
                          Optimizar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 