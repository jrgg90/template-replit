"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function WorkflowsLandingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-normal mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Automatiza tu expansión internacional con 
            <span className="font-medium block">Workflows Inteligentes</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Configura flujos de trabajo automatizados para gestionar tus operaciones 
            internacionales de manera eficiente y escalable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 
                bg-[#131F42] text-white rounded-full text-lg font-medium 
                hover:bg-[#1c2b4a] transition-colors duration-200"
            >
              Comenzar ahora
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Automatización de Listings",
              description: "Traduce y optimiza tus listings automáticamente para cada marketplace.",
              icon: "🔄"
            },
            {
              title: "Gestión de Inventario",
              description: "Sincroniza tu inventario entre múltiples marketplaces y países.",
              icon: "📦"
            },
            {
              title: "Análisis de Mercado",
              description: "Monitorea precios y tendencias en tiempo real.",
              icon: "📊"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 
                transition-all duration-200 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <h2 className="text-3xl font-medium text-center mb-16">Cómo funciona</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              {
                title: "1. Configura tus workflows",
                description: "Selecciona las tareas que quieres automatizar y configura las reglas."
              },
              {
                title: "2. Conecta tus plataformas",
                description: "Integra tus marketplaces y herramientas de gestión."
              },
              {
                title: "3. Automatiza y escala",
                description: "Deja que los workflows trabajen por ti mientras te enfocas en crecer."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Workflow Diagram */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl -z-10" />
            <div className="p-8">
              <div className="relative">
                {/* Connector Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                  <path
                    d="M200 100 L200 200 M200 300 L200 400"
                    className="stroke-blue-200"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                </svg>

                {/* Workflow Steps */}
                <div className="space-y-12">
                  {/* Input Sources */}
                  <motion.div 
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {['Shopify', 'Amazon', 'WooCommerce'].map((platform, i) => (
                      <div key={platform} className="px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100
                        hover:shadow-xl hover:scale-105 transition-all duration-200">
                        <Image
                          src={`/logos-partners-png/${platform.toLowerCase()}.png`}
                          alt={platform}
                          width={80}
                          height={24}
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </motion.div>

                  {/* Processing Step */}
                  <motion.div 
                    className="mx-auto max-w-sm p-6 bg-gradient-to-r from-blue-500 to-blue-600 
                      rounded-2xl shadow-xl text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Workflow Engine</h4>
                        <p className="text-sm text-white/80">Procesamiento inteligente</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Output Actions */}
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {[
                      { title: 'Traducción', icon: '🌎' },
                      { title: 'Optimización', icon: '⚡' },
                      { title: 'Sincronización', icon: '🔄' },
                      { title: 'Análisis', icon: '📊' }
                    ].map((action, i) => (
                      <div key={action.title} 
                        className="p-4 bg-white rounded-xl shadow-lg border border-gray-100
                          hover:shadow-xl hover:scale-105 transition-all duration-200"
                      >
                        <div className="text-2xl mb-2">{action.icon}</div>
                        <h4 className="font-medium text-gray-900">{action.title}</h4>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Diagram Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-16">Workflows Automatizados</h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connector Lines - Versión mejorada */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800">
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
            <div className="relative space-y-12">
              {/* Shopify Store - Logo más grande y centrado */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src="/logos-partners-png/shopify.png"
                      alt="Shopify"
                      width={200}
                      height={60}
                      className="h-14 w-auto object-contain"
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
                className="max-w-lg mx-auto"
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-3 gap-4">
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
              </motion.div>

              {/* Core Workflows */}
              <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
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
                className="max-w-5xl mx-auto"
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
        </div>
      </section>

      {/* Workflow Diagram Section - Segunda Versión */}
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