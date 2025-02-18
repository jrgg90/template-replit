"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WorkflowDiagram() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Connector Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
        {/* Línea vertical principal */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M500 100 L500 750"
          className="stroke-blue-200"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Líneas horizontales para cada nivel */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          d="M300 250 L700 250"
          className="stroke-blue-200"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
        
        {/* Líneas para investigación de mercados */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          d="M200 450 L800 450"
          className="stroke-blue-200"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
        
        {/* Líneas para workflows */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
          d="M150 550 L850 550"
          className="stroke-blue-200"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />

        {/* Líneas para marketplaces */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
          d="M100 650 L900 650"
          className="stroke-blue-200"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />

        {/* Conectores verticales */}
        {[250, 450, 550, 650].map((y, i) => (
          <motion.path
            key={i}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1 + (i * 0.1) }}
            d={`M500 ${y-20} L500 ${y+20}`}
            className="stroke-blue-200"
            strokeWidth="3"
            fill="none"
          />
        ))}
      </svg>

      {/* Workflow Structure */}
      <div className="relative space-y-8">
        {/* Shopify Store - Logo más grande y centrado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm mx-auto"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/logos-partners-png/shopify.png"
                alt="Shopify"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <div className="text-center">
                <h3 className="text-lg font-medium">Tienda Online</h3>
                <p className="text-sm text-gray-600">Tu tienda en Shopify</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Exbordia Platform */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-gradient-to-r from-[#131F42] to-[#2C3E5D] p-6 rounded-xl shadow-xl text-white">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/exbordia-logo.png"
                alt="Exbordia"
                width={160}
                height={45}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </motion.div>

        {/* Market Research */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            {
              title: "Análisis de Mercado",
              description: "Identifica oportunidades y tendencias",
              icon: "📊"
            },
            {
              title: "Competencia",
              description: "Analiza precios y estrategias",
              icon: "🎯"
            },
            {
              title: "Demanda",
              description: "Descubre el potencial de ventas",
              icon: "📈"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100
                hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Workflows */}
        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            {
              title: "Traducción",
              description: "Traduce productos automáticamente",
              icon: "🌎"
            },
            {
              title: "Precios",
              description: "Actualiza precios según mercado",
              icon: "💰"
            },
            {
              title: "Inventario",
              description: "Sincroniza stock entre plataformas",
              icon: "📦"
            },
            {
              title: "Regulaciones",
              description: "Verifica requisitos y certificaciones",
              icon: "✅"
            }
          ].map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="bg-gradient-to-br from-[#131F42] to-[#2C3E5D] p-6 rounded-xl shadow-lg text-white"
            >
              <div className="flex flex-col gap-3">
                <div className="text-3xl">{workflow.icon}</div>
                <h3 className="text-lg font-medium">{workflow.title}</h3>
                <p className="text-sm text-gray-200">{workflow.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Marketplaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-6">
            {/* North America Market */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🌎</span>
                <h3 className="text-lg font-medium">Norte América</h3>
              </div>
              <div className="flex flex-row items-center gap-8">
                <Image
                  src="/logos-partners-png/amazon.png"
                  alt="Amazon USA"
                  width={200}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
                <Image
                  src="/logos-partners-png/walmart.png"
                  alt="Walmart"
                  width={200}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
                <Image
                  src="/logos-partners-png/shopify.png"
                  alt="Shopify Markets"
                  width={200}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>

            {/* LATAM Market */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🌍</span>
                <h3 className="text-lg font-medium">Latinoamérica</h3>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-row justify-center items-center gap-8">
                  <Image
                    src="/logos-partners-png/mercadolibre.png"
                    alt="Mercado Libre"
                    width={200}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                  <Image
                    src="/logos-partners-png/shopify.png"
                    alt="Shopify Markets"
                    width={200}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">+ Marketplaces regionales</p>
              </div>
            </div>

            {/* Europe Market */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🇪🇺</span>
                <h3 className="text-lg font-medium">Europa</h3>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-row justify-center items-center gap-8">
                  <Image
                    src="/logos-partners-png/amazon.png"
                    alt="Amazon Europe"
                    width={200}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                  <Image
                    src="/logos-partners-png/shopify.png"
                    alt="Shopify Markets"
                    width={200}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">+ Marketplaces regionales</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}