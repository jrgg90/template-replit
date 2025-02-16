"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { MainHeader } from "@/components/layout/MainHeader"

export default function CasosDeUso() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light tracking-tight">
                Hola, ¿En que puedo
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                ayudarte hoy?
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Exbordia hace lo que haría un asistente de comercio internacional en tu equipo, disponible 24/7.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Caso de Uso 1: Texto a la izquierda */}
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
                  Investigación de mercado
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Investiga en qué países
                  <span className="block font-medium">hay mas demanda para mis productos</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Descubre en qué países hay más oportunidades de venta basándonos en datos de mercado y tendencias globales.
                </p>

                <div className="space-y-4">
                  
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Placeholder Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 2: Texto a la derecha */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Placeholder Image
                </div>
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
                  Análisis de Mercado
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Encuentra los mejores
                  <span className="block font-medium">mercados para tus productos</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  El asistente analiza datos de demanda, competencia y regulaciones para identificar las mejores oportunidades de expansión internacional.
                </p>

                <div className="space-y-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 