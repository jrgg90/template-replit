"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Globe2, LayoutDashboard, BarChart3, DollarSign, Truck } from 'lucide-react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import AnimatedBackground from "@/components/ui/animated-background"
import { ScrollRevealStat } from "@/components/ui/scroll-reveal-stat"
import Link from 'next/link'
import { useState } from "react"
import { LoginDialog } from "@/components/auth/login-dialog"
import { LoginButton } from "@/components/auth/login-button"
import { CTA } from "@/components/layout/call-to-action"
import { FAQSection } from "@/components/layout/faq-section"
import { MainHeader } from "@/components/layout/MainHeader"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { HowItWorksSection } from "@/components/ui/how-it-works-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-44 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />
        
        <div className="container relative mx-auto px-4 pb-32">
          {/* Text Content */}
          <div className="text-center max-w-[720px] mx-auto mb-24">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light whitespace-nowrap tracking-tight">
                Lleva tu tienda online
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
              Con los <span className="font-medium text-gray-700">Agentes de Inteligencia Artificial</span> que te ayudan a vender tus productos en todo el mundo !Fácil!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative inline-flex items-center justify-center px-12 py-4 text-lg
                  bg-[#131F42] text-white rounded-full overflow-hidden transition-all duration-300
                  hover:shadow-[0_8px_40px_rgba(10,132,255,0.22)] hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    Agenda tu demo
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
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Workflows Section */}
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
                  Workflows
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Un nuevo miembro en
                  <span className="block font-medium">tu equipo de comercio global.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                Dile a Exbordia qué hacer y olvídate de las tareas manuales. Tu agente de comercio internacional se encargará de todo.
                </p>

                <div className="space-y-4">
                  {[
                    "Traducir y optimizar listings en marketplaces",
                    "Validar regulaciones y certificaciones",
                    "Conectarte con fulfillment partners",
                    "Encontrar mercados con demanda para tu producto"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Platform Preview */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="relative w-[200%] -mr-[30%] -ml-[10%]">
                <div className="relative">
                  <Image
                    src="/worfklows.png"
                    alt="Exbordia Platform Interface"
                    width={2400}
                    height={1400}
                    priority
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-700"
                  />
                  {/* Gradiente de difuminado en el borde derecho */}
                  <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-r from-transparent to-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Finder Section */}
      <section className="py-24 bg-[#FAFAFA]">
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
                  Market Finder
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Un analista de mercados
                  <span className="block font-medium">que te dice dónde vender.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Exbordia analiza datos de demanda, competencia y regulaciones para decirte dónde tus productos se pueden vender con mayor éxito.
                </p>

                <div className="space-y-4">
                  {[
                    "Análisis de demanda por país y categoría",
                    "Evaluación de competencia y precios",
                    "Validación de regulaciones por producto",
                    "Recomendaciones basadas en datos reales"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Platform Preview */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="relative w-[200%] -mr-[1%] -ml-[1%]">
                <div className="relative">
                  <Image
                    src="/nuevosmercados3.png"
                    alt="Exbordia Market Finder Interface"
                    width={2800}
                    height={1600}
                    priority
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-700"
                  />
                  {/* Ajustamos el gradiente para que cubra mejor el borde */}
                  <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-r from-transparent to-[#FAFAFA]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
              Tu asistente se conecta con todas las 
              <span className="block font-medium">plataformas de e-commerce</span>
            </h2>
            <p className="text-xl text-gray-600">
              Integra tu tienda online fácilmente y expande tu negocio globalmente sin importar qué plataforma uses
            </p>
          </div>

          {/* Partnerships Grid */}
          <div className="relative">
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/partnerships.png"
                alt="Plataformas E-commerce Partners"
                width={2400}
                height={1000}
                priority
                className="w-full h-auto object-contain"
              />
              
              {/* Subtle Gradients */}
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl" />
            </div>

            {/* Additional Text */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-lg">
                Y muchas otras plataformas más...
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How it Works Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F5F7F9] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">
              Proceso Simple
            </span>
            <h2 className="text-4xl font-normal text-[#131F42] mt-4">
              ¿Cómo <span className="font-light">Funciona?</span>
            </h2>
          </motion.div>

          <HowItWorksSection />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-[#131F42] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div>
              <Image 
                src="/exbordia-logo.png" 
                alt="Exbordia Logo" 
                width={140} 
                height={40}
                className="brightness-0 invert object-contain"
              />
            </div>
            <div className="text-right">
              <p className="text-sm">
                <span className="text-white text-base font-medium mr-2">Contacto:</span>
                <a href="mailto:contacto@exbordia.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                  contacto@exbordia.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} Exbordia. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
