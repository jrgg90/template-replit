"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { MainHeaderES } from "@/components/layout/MainHeaderES"
import Link from "next/link"
import { MarketList } from "@/components/sandbox/market-finder/market-list"
import { ListingPreview } from "@/components/sandbox/listing-optimizer/listing-preview"
import { RegulacionesPreview } from "@/components/sandbox/regulaciones/regulaciones-preview"
import { MarketplacesAnalysis } from "@/components/sandbox/marketplaces/marketplaces-analysis"
import { WorkflowDiagram } from "@/components/ui/workflow-diagram"
import { Language } from "@/types"
import { FooterES } from "@/components/layout/FooterES"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { routes } from "@/config/routes"

interface CasosDeUsoProps {
  params: {
    lang: Language
  }
}

export default function CasosDeUso({ params }: CasosDeUsoProps) {
  const router = useRouter()

  useEffect(() => {
    // Redirigir si estamos en el idioma incorrecto
    if (params.lang !== 'es') {
      router.push(routes.en.useCases)
    }
  }, [params.lang, router])

  return (
    <main className="min-h-screen bg-white">
      <MainHeaderES />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light tracking-tight">
                Automatiza tu expansión internacional con
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                workflows inteligentes
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Configura flujos de trabajo automatizados para gestionar tus operaciones internacionales de manera eficiente y escalable.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Workflow Diagram Section */}
      <section className="hidden md:block py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <WorkflowDiagram />
          </motion.div>
        </div>
      </section>

      {/* Caso de Uso 1: Texto a la izquierda */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Investigación de mercado
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Investiga en qué países hay
                  <span className="block font-medium">más demanda para mis productos</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Descubre en qué países hay más oportunidades de venta basándonos en datos de mercado y tendencias globales.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>

            {/* Right Column - Market List */}
            <div className="flex-1">
              <div className="relative pt-[95px] max-w-[520px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Market List Component */}
                <MarketList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 2: Productos */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[480px]">
            {/* Left Column - Image */}
            <div className="flex-1">
              <div className="relative pt-[40px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Listing Preview Component */}
                <ListingPreview />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Optimización de Listings
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Traduce y optimiza mis listings
                  <span className="block font-medium">para vender más en otros países</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Adapta tus listings a cada marketplace internacional con traducciones profesionales y optimización SEO específica para cada plataforma.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 3: Amazon Seller */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Amazon
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                Configura mi cuenta de Amazon 
                  <span className="block font-medium">Seller Central para vender en EE.UU.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Crea, conecta o configura tu cuenta de Amazon Seller Central para vender en EE.UU.
                </p>

                <div className="space-y-4">
                </div>

                {/* Nuevo botón */}
                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>

            {/* Right Column - Amazon Seller Logo */}
            <div className="flex-1">
              <div className="relative pt-[40px] flex items-center justify-center">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                <Image 
                  src="/logos-partners-png/amazonseller.png"
                  alt="Amazon Seller Central"
                  width={400}
                  height={240}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 4: Regulaciones y Certificaciones */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Image */}
            <div className="flex-1">
              <div className="relative pt-[40px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Regulaciones Preview Component */}
                <RegulacionesPreview />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Regulaciones y Certificaciones
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Identifica los requisitos
                  <span className="block font-medium">para vender en otros países</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Conoce las certificaciones, regulaciones y documentación necesaria para vender tus productos en nuevos mercados.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 5: Marketplaces */}
      <section id="marketplaces" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Marketplaces
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Investiga en qué marketplace
                  <span className="block font-medium">debo vender para tener éxito en Canadá</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Analiza precios, estrategias y posicionamiento de tus competidores en cada marketplace internacional.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>

            {/* Right Column - Marketplaces Analysis */}
            <div className="flex-1">
              <div className="relative pt-[40px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Marketplaces Analysis Component */}
                <MarketplacesAnalysis />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 6: Shopify Markets */}
      <section id="shopify-markets" className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[480px]">
            {/* Left Column - Shopify Logo */}
            <div className="flex-1">
              <div className="relative flex items-center justify-center h-full">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                <Image 
                  src="/logos-partners-png/shopify.png"
                  alt="Shopify Markets"
                  width={280}
                  height={180}
                  className="object-contain w-[280px]"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Shopify Markets
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Configura tu tienda Shopify
                  <span className="block font-medium">para vender globalmente</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Expande tu negocio internacionalmente con Shopify Markets. Gestiona múltiples mercados desde una sola tienda.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 7: Agentes Aduanales */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Agentes Aduanales
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Conéctame con un
                  <span className="block font-medium">Agente Aduanal en México</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Aprovecha la red de partnerships de Exbordia para identificar y conectar con agentes aduanales confiables en México.
                </p>

                <div className="space-y-4">
                </div>

                {/* Nuevo botón */}
                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Empieza hoy
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <div className="relative flex items-center justify-center">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                <div className="relative w-full max-w-[480px]">
                  <Image 
                    src="/logos-partners-png/agenteaduanal.png"
                    alt="Agente Aduanal"
                    width={480}
                    height={360}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-4xl font-normal text-[#131F42] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Y muchas otras 
              <span className="font-medium"> automatizaciones más</span>
            </motion.h2>
            
            <p className="text-xl text-gray-600 mb-12">
              Si tienes preguntas, contáctanos
            </p>

            <Link
              href="https://tally.so/r/mYx0b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 
                bg-[#131F42] text-white rounded-full text-lg font-medium 
                hover:bg-[#1c2b4a] transition-colors duration-200
                shadow-lg hover:shadow-xl"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterES lang={params.lang} />
    </main>
  )
} 