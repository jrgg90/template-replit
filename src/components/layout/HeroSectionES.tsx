"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MainHeaderES } from "@/components/layout/MainHeaderES"
import { PartnersCarousel } from "@/components/ui/partners-carousel"

export function HeroSectionES() {
  return (
    <>
      <MainHeaderES />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-44 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />
        
        <div className="container relative mx-auto px-4 pb-32">
          {/* Text Content */}
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light tracking-tight">
                Lleva tu tienda{' '}
                <span className="md:inline hidden">online</span>
                <span className="md:hidden inline">
                  online
                </span>
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                a nuevos mercados globales
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-[600px] mx-auto mb-12 leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Con los <span className="font-bold text-gray-900">Agentes de Inteligencia Artificial</span> que venderán tus productos en todo el mundo ¡Fácil!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="https://tally.so/r/mYx0b0"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="group relative inline-flex items-center justify-center px-12 py-4 text-lg
                  bg-[#131F42] text-white rounded-full overflow-hidden transition-all duration-300
                  hover:shadow-[0_8px_40px_rgba(10,132,255,0.22)] hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    Comienza Hoy Mismo
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Platform Image */}
          <motion.div
            className="relative max-w-[1200px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative z-20"
            >
              <Image
                src="/asistente2.png"
                alt="Exbordia Platform Interface"
                width={1400}
                height={900}
                priority
                className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(8,112,184,0.12)]"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -inset-[10%] -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full
                bg-gradient-to-r from-blue-100/5 via-purple-100/10 to-blue-100/5 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Partners Carousel */}
          <div className="mt-8">
            <motion.p 
              className="text-center text-gray-500 text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              El agente trabaja con cualquier plataforma
            </motion.p>
            <PartnersCarousel />
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </>
  )
}