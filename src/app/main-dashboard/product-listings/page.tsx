"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Plus, ChevronRight, ShoppingBag, AlertCircle, Sparkles, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useShopifyProducts } from '@/lib/hooks/useShopifyProducts'
import { DEFAULT_MARKETPLACES } from '@/lib/constants/marketplaces'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Alert } from '@/components/ui/alert'

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
    description: "Bolso de cuero genuino, hecho a mano con los más altos estándares de calidad. Ideal para uso diario y ocasiones especiales.",
    images: [
      "/product-1.jpg",
      "/product-1-alt.jpg",
      "/product-1-detail.jpg"
    ],
    price: 129.99,
    sku: "BCP-001",
    category: "Accesorios",
    inventory: 45
  },
  // ... más productos
]

export default function ProductListingsPage() {
  const [selectedMarketplace, setSelectedMarketplace] = useState("Shopify US")
  const [expandedCountries, setExpandedCountries] = useState<string[]>(["Estados Unidos"])
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const { products, loading, error } = useShopifyProducts()
  
  // Agregar logs para debugging
  console.log('Estado actual:', {
    selectedMarketplace,
    productsTotal: products.length,
    loading,
    error
  })
  
  // Actualizar el número de productos en el marketplace de Shopify
  const marketplaces = useMemo(() => {
    return DEFAULT_MARKETPLACES.map(country => ({
      ...country,
      platforms: country.platforms.map(platform => ({
        ...platform,
        products: platform.name === 'Shopify US' ? products.length : platform.products
      }))
    }))
  }, [products])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => product.marketplace === selectedMarketplace)
    console.log('Productos filtrados:', filtered.length, 'para marketplace:', selectedMarketplace)
    return filtered
  }, [products, selectedMarketplace])

  // Renderizar estados de carga y error
  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        {error}
      </Alert>
    )
  }

  const toggleCountry = (country: string) => {
    setExpandedCountries(prev => 
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    )
  }

  const toggleProduct = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
          Tus Marketplaces y Product Listings
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Administra tus marketplaces globales y optimiza tus productos para cada mercado.
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
            {marketplaces.map((country) => (
              <Card key={country.country} className="overflow-hidden hover:shadow-md transition-all duration-200">
                <div
                  onClick={() => toggleCountry(country.country)}
                  className="w-full p-6 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/75"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{country.flag}</span>
                    <span className="text-lg font-medium text-gray-900">{country.country}</span>
                  </div>
                  <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${
                    expandedCountries.includes(country.country) ? 'rotate-90' : ''
                  }`} />
                </div>
                
                {expandedCountries.includes(country.country) && (
                  <div className="border-t divide-y bg-gray-50/50">
                    {country.platforms.map((platform) => (
                      <button
                        key={platform.name}
                        onClick={() => platform.status === 'connected' && setSelectedMarketplace(platform.name)}
                        className={cn(
                          "w-full p-4 flex items-center justify-between hover:bg-white/75 transition-colors",
                          selectedMarketplace === platform.name && "bg-[#0F172A]/5 hover:bg-[#0F172A]/5",
                          platform.status !== 'connected' && "opacity-75"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "h-4 w-4 flex items-center justify-center",
                            selectedMarketplace === platform.name && "text-[#0F172A]",
                            "text-gray-400"
                          )}>
                            <ShoppingBag className="h-4 w-4" />
                          </div>
                          <div>
                            <p className={cn(
                              "text-sm font-medium",
                              selectedMarketplace === platform.name ? "text-[#0F172A]" : "text-gray-900"
                            )}>
                              {platform.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {platform.status === 'connected' 
                                ? `${platform.products} productos` 
                                : 'Sin conectar'}
                            </p>
                          </div>
                        </div>
                        {platform.status === 'connected' ? (
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            selectedMarketplace === platform.name 
                              ? "bg-[#0F172A] text-white"
                              : "bg-emerald-50 text-emerald-700"
                          )}>
                            Conectado
                          </span>
                        ) : (
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Conectar
                          </Button>
                        )}
                      </button>
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
            <div className="space-y-1">
              <h2 className="text-lg font-medium text-gray-900">Tus Productos</h2>
              <p className="text-sm text-gray-500">
                Mostrando {filteredProducts.length} productos en {selectedMarketplace}
              </p>
            </div>
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
            {loading ? (
              <div className="flex items-center justify-center p-8">
                <LoadingSpinner className="w-6 h-6" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 px-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">No hay productos</h3>
                <p className="text-sm text-gray-500">
                  {selectedMarketplace === "Shopify US" 
                    ? "Aún no has importado productos desde Shopify"
                    : "No hay productos en este marketplace"}
                </p>
              </div>
            ) : (
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
                    {filteredProducts.map((product) => (
                      <React.Fragment key={product.id}>
                        <tr 
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleProduct(product.id)}
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-gray-100 overflow-hidden">
                                {product.images?.[0] && (
                                  <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                  />
                                )}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                <p className="text-xs text-gray-500">{product.marketplace}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={cn(
                              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                              product.status === 'published' 
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            )}>
                              {product.status === 'published' ? 'Publicado' : 'Borrador'}
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
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="sm" className="h-8">
                                <Sparkles className="h-4 w-4 mr-1 text-[#0F172A]" />
                                Optimizar
                              </Button>
                              {expandedProduct === product.id && (
                                <ChevronUp className="h-4 w-4 text-gray-400" />
                              )}
                              {expandedProduct !== product.id && (
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </td>
                        </tr>
                        
                        {/* Expanded Product Details */}
                        {expandedProduct === product.id && (
                          <tr>
                            <td colSpan={4} className="bg-gray-50/50">
                              <div className="p-6 space-y-6">
                                {/* Product Details Grid */}
                                <div className="grid grid-cols-3 gap-6">
                                  {/* Left Column - Images */}
                                  <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-900">Imágenes del Producto</h4>
                                    <div className="grid grid-cols-3 gap-2">
                                      {product.images?.map((img, index) => (
                                        <div key={index} className="aspect-square rounded-lg bg-gray-100 overflow-hidden">
                                          <img 
                                            src={img} 
                                            alt={`${product.name} ${index + 1}`} 
                                            className="w-full h-full object-cover"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Middle Column - Details */}
                                  <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-900">Información del Producto</h4>
                                    <div className="space-y-2">
                                      <div>
                                        <p className="text-xs text-gray-500">SKU</p>
                                        <p className="text-sm text-gray-900">{product.sku}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Categoría</p>
                                        <p className="text-sm text-gray-900">{product.category}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Precio</p>
                                        <p className="text-sm text-gray-900">${product.price}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Inventario</p>
                                        <p className="text-sm text-gray-900">{product.inventory} unidades</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right Column - Description */}
                                  <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-900">Descripción</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      {product.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Actions Footer */}
                                <div className="flex justify-end gap-2 pt-4 border-t">
                                  {product.marketplace === "Shopify US" ? (
                                    <Button variant="outline" size="sm">
                                      <ExternalLink className="h-4 w-4 mr-1" />
                                      Ver en Shopify
                                    </Button>
                                  ) : (
                                    <Button variant="outline" size="sm">
                                      <ExternalLink className="h-4 w-4 mr-1" />
                                      Ver en {product.marketplace}
                                    </Button>
                                  )}
                                  <Button variant="default" size="sm">
                                    Editar Listing
                                  </Button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
} 