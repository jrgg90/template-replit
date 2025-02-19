"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WorkflowDiagram() {
  return (
    <div className="relative w-[1200px] h-[800px]">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-16">Automatización entre Plataformas</h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connector Lines - Versión alternativa */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M500 100 L500 200 M350 300 L650 300 M500 400 L500 500"
                className="stroke-indigo-200"
                strokeWidth="3"
                strokeDasharray="8 6"
                fill="none"
              />
            </svg>

            {/* Workflow Structure */}
            <div className="relative space-y-8">
              {/* Top Box - Tienda Online */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:border-indigo-200 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logos-partners-png/shopify.png"
                      alt="Shopify"
                      width={120}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Tienda Online</h3>
                      <p className="text-sm text-gray-600">Tu tienda en Shopify</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Middle Row - Workflows */}
              <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: "Workflow de Traducción",
                    description: "Traduce automáticamente tus productos",
                    icon: "🌎"
                  },
                  {
                    title: "Workflow de Precios",
                    description: "Actualiza precios según el mercado",
                    icon: "💰"
                  },
                  {
                    title: "Workflow de Inventario",
                    description: "Sincroniza stock entre marketplaces",
                    icon: "📦"
                  }
                ].map((workflow, index) => (
                  <motion.div
                    key={workflow.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-xl shadow-lg text-white
                      hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="text-3xl">{workflow.icon}</div>
                      <h3 className="text-lg font-medium">{workflow.title}</h3>
                      <p className="text-sm text-gray-200">{workflow.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Box - Marketplaces */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-md mx-auto"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:border-indigo-200 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logos-partners-png/amazon.png"
                      alt="Amazon"
                      width={120}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Marketplace</h3>
                      <p className="text-sm text-gray-600">Vende en Amazon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>  
    </div>
  )
} 