"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Package, MapPin, Scale, Tag, ShoppingBag, ShoppingCart, BarChart2, Store, Handshake, Truck, DollarSign } from 'lucide-react'

export default function CuadroSandboxPage() {
  const workflows = [
    // Primera fila
    {
      icon: <Globe className="w-10 h-10 stroke-[1.25]" />,
      title: "Traducción de Sitio",
      top: "12px",
      left: "12px",
    },
    {
      icon: <Package className="w-10 h-10 stroke-[1.25]" />,
      title: "Listing de Productos",
      top: "12px",
      left: "calc(25% + 4px)",
    },
    {
      icon: <MapPin className="w-10 h-10 stroke-[1.25]" />,
      title: "Entrada a Nuevo País",
      top: "12px",
      left: "calc(50% - 4px)",
    },
    {
      icon: <Scale className="w-10 h-10 stroke-[1.25]" />,
      title: "Regulaciones y Certificaciones",
      top: "12px",
      left: "calc(75% - 12px)",
    },
    // Segunda fila
    {
      icon: <Tag className="w-10 h-10 stroke-[1.25]" />,
      title: "Cálculo de costos de Exportación",
      top: "calc(33.33% - 12px)",
      left: "calc(12.5% + 8px)",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 stroke-[1.25]" />,
      title: "Shopify Markets",
      top: "calc(33.33% - 12px)",
      left: "calc(37.5% + 4px)",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 stroke-[1.25]" />,
      title: "Amazon Global Selling",
      top: "calc(33.33% - 12px)",
      left: "calc(62.5% - 4px)",
    },
    {
      icon: <BarChart2 className="w-10 h-10 stroke-[1.25]" />,
      title: "Generar Reportes",
      top: "calc(33.33% - 12px)",
      left: "calc(87.5% - 12px)",
    },
    // Tercera fila
    {
      icon: <Store className="w-10 h-10 stroke-[1.25]" />,
      title: "Conectar con Marketplaces",
      top: "calc(66.66% - 36px)",
      left: "12px",
    },
    {
      icon: <Handshake className="w-10 h-10 stroke-[1.25]" />,
      title: "Explorar Partners",
      top: "calc(66.66% - 36px)",
      left: "calc(25% + 4px)",
    },
    {
      icon: <Truck className="w-10 h-10 stroke-[1.25]" />,
      title: "Logística",
      top: "calc(66.66% - 36px)",
      left: "calc(50% - 4px)",
    },
    {
      icon: <DollarSign className="w-10 h-10 stroke-[1.25]" />,
      title: "Analizar Precios",
      top: "calc(66.66% - 36px)",
      left: "calc(75% - 12px)",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Link href="/sandbox" className="text-gray-600 hover:text-gray-900">
              ← Volver al Sandbox
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="space-y-32">
        {/* Primera sección */}
        <section className="pt-32">
          <div className="container mx-auto px-4">
            <div className="relative w-[1100px] h-[730px] mx-auto">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={`section1-${index}`}
                  className={`absolute w-[250px] h-[200px] rounded-xl border 
                    ${workflow.title === "Traducción de Sitio" 
                      ? "bg-[#131F42]/5 border-[#131F42]/20 shadow-lg shadow-[#131F42]/10" 
                      : "bg-white border-gray-200 shadow-sm"
                    }`}
                  style={{
                    top: workflow.top,
                    left: workflow.left,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className={`mb-3 ${workflow.title === "Traducción de Sitio" ? "text-[#131F42]" : "text-gray-600"}`}>
                      {workflow.icon}
                    </div>
                    <h3 className={`text-lg font-light leading-snug 
                      ${workflow.title === "Traducción de Sitio" ? "text-[#131F42]" : "text-gray-900"}`}>
                      {workflow.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Segunda sección */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="relative w-[1100px] h-[730px] mx-auto">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent rounded-3xl" />
              
              {/* Líneas de conexión */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1300 730">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M650 50 L650 680"
                  className="stroke-[#131F42]"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                {workflows.map((_, index) => (
                  <motion.line
                    key={`line-${index}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    x1="100"
                    y1={index * 200 + 100}
                    x2="1200"
                    y2={index * 200 + 100}
                    stroke="url(#blue-gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}
                <defs>
                  <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#131F42" stopOpacity="0" />
                    <stop offset="50%" stopColor="#131F42" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#131F42" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {workflows.map((workflow, index) => (
                <motion.div
                  key={`section2-${index}`}
                  className={`absolute w-[250px] h-[200px] rounded-xl backdrop-blur-sm
                    ${workflow.title === "Traducción de Sitio" 
                      ? "bg-gradient-to-br from-[#131F42] to-[#1c2b5a] shadow-lg shadow-[#131F42]/10" 
                      : "bg-white/80 border border-gray-200/50 hover:border-[#131F42]/20 hover:shadow-lg hover:shadow-[#131F42]/5"
                    }`}
                  style={{
                    top: workflow.top,
                    left: workflow.left,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className={`mb-4 ${workflow.title === "Traducción de Sitio" ? "text-white" : "text-gray-600"}`}>
                      {workflow.icon}
                    </div>
                    <h3 className={`text-lg font-light leading-snug
                      ${workflow.title === "Traducción de Sitio" 
                        ? "text-white" 
                        : "text-gray-900"
                      }`}>
                      {workflow.title}
                    </h3>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`mt-3 text-xs px-3 py-1 rounded-full
                        ${workflow.title === "Traducción de Sitio"
                          ? "bg-white/10 text-white"
                          : "bg-[#131F42]/5 text-[#131F42]"
                        }`}
                    >
                      Workflow
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 