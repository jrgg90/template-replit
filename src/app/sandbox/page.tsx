"use client"

import Link from 'next/link'
import { MarketResearchPreview } from "@/components/sandbox/market-research/market-research-preview"

export default function SandboxIndex() {
  const pages = [
    {
      title: "Market Finder",
      description: "Diseño para búsqueda y análisis de mercados",
      path: "/sandbox/market-finder",
    },
    {
      title: "Listing Optimizer",
      description: "Diseño para optimización de listings",
      path: "/sandbox/listing-optimizer",
    },
    {
      title: "Regulaciones",
      description: "Diseño para análisis de regulaciones y certificaciones",
      path: "/sandbox/regulaciones",
    },
    {
      title: "Marketplaces",
      description: "Análisis comparativo de marketplaces",
      path: "/sandbox/marketplaces",
    },
    {
      title: "Workflows Landing",
      description: "Página de aterrizaje para workflows automatizados",
      path: "/sandbox/workflows-landing",
    },
    {
      title: "Cuadro Sandbox",
      description: "Réplica del diagrama de workflows",
      path: "/sandbox/cuadro-sandbox",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <header className="flex items-center justify-between mb-12">
            <h1 className="text-2xl font-medium">Design Sandbox</h1>
            <p className="text-gray-600">Playground de diseño</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MarketResearchPreview />

            {pages.map((page) => (
              <Link 
                key={page.path} 
                href={page.path}
                className="group block p-6 bg-white rounded-xl border border-gray-200 
                  hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 
                  transition-all duration-200"
              >
                <h2 className="text-xl font-medium text-gray-900 mb-2 
                  group-hover:text-blue-600">{page.title}</h2>
                <p className="text-gray-600">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 