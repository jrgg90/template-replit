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
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient blobs */}
          <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl 
            -top-40 -right-40 animate-pulse-slow" />
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full blur-3xl 
            -bottom-20 -left-20 animate-pulse-slow [animation-delay:1s]" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto max-w-6xl px-4 z-[2]">
          <div className="flex flex-col items-center text-center">
            {/* Spacer div en lugar del badge */}
            <div className="h-[12px] mb-8" /> {/* 52px es aproximadamente la altura del badge anterior */}

            {/* Main Title - Refined Design */}
            <h1 className="flex flex-col gap-2 text-4xl md:text-[3.75rem] font-normal leading-[1.1] mb-8 tracking-tight">
              {/* Primera línea con un gris más suave */}
              <span className="text-[#1A1A2E] font-light opacity-0 animate-fade-in-up [animation-delay:400ms]">
                Escala tu tienda online con un
              </span>
              
              {/* Línea central con diseño refinado */}
              <span className="relative font-medium opacity-0 animate-fade-in-up [animation-delay:600ms] group">
                {/* Efecto de brillo más sutil */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  group-hover:translate-x-full duration-1000 transition-transform" />
                
                {/* Texto principal con nuevo estilo */}
                <span className="relative font-[350] tracking-[-0.02em] bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF]
                  group-hover:from-[#2E5C9E] group-hover:via-[#0A84FF] group-hover:to-[#2E5C9E]
                  text-transparent bg-clip-text transition-all duration-700
                  [font-feature-settings:'salt'_on,'ss01'_on]">
                  Agente de
                  Comercio 
                  Internacional
                </span>
                
                {/* Destellos más sutiles */}
                <span className="absolute -right-2 -top-2 w-1.5 h-1.5 bg-[#0A84FF]/30 rounded-full animate-pulse" />
                <span className="absolute -left-2 -bottom-2 w-1.5 h-1.5 bg-[#0A84FF]/30 rounded-full animate-pulse [animation-delay:500ms]" />
              </span>

              {/* Última línea con el mismo gris suave */}
              <span className="text-[#1A1A2E] font-light opacity-0 animate-fade-in-up [animation-delay:800ms]">
                que trabaja para ti
              </span>
            </h1>

            {/* Subtitle with animated highlight */}
            <p className="relative text-lg md:text-xl font-light text-gray-800 mb-12 max-w-2xl mx-auto tracking-wide leading-relaxed 
              opacity-0 animate-fade-in-up [animation-delay:1000ms]">
              <span className="relative">
                Integra Inteligencia Artificial y comienza a vender en los principales marketplaces globales, resuelve todas tus dudas y escala globalmente sin miedo.
              </span>
            </p>

            {/* CTA Buttons with enhanced animations */}
            <div className="flex justify-center opacity-0 animate-fade-in-up [animation-delay:1200ms] mb-20">
              <div className="flex flex-col items-center">
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform?usp=header"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="group relative px-8 py-3 bg-[#131F42] text-white rounded-full overflow-hidden transition-all duration-300 
                    hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      Únete al Waitlist
                      <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <p className="mt-4 text-sm text-gray-500 font-light">
                  
                </p>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-full border-t border-gray-100 opacity-0 animate-fade-in-up [animation-delay:1400ms]" />
          </div>
        </div>
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
                  Automatiza
                  <span className="block font-medium">el comercio global.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Exbordia ejecuta tareas clave por ti. Con un solo clic, puedes:
                </p>

                <div className="space-y-4">
                  {[
                    "Traducir y optimizar listings en marketplaces",
                    "Validar regulaciones y certificaciones",
                    "Conectarte con fulfillment partners",
                    "Encontrar mercados con demanda para tu producto"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
                  Vende en el país
                  <span className="block font-medium">correcto con datos reales.</span>
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
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
              Conectamos con todas las
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
