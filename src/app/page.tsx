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
import { InspirationalSection } from "@/components/layout/inspirational-section"

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
            <h1 className="flex flex-col gap-2 text-4xl md:text-[5rem] font-normal leading-[1.1] mb-8 tracking-tight">
              {/* Primera línea con un gris más suave */}
              <span className="text-[#1A1A2E] font-light opacity-0 animate-fade-in-up [animation-delay:400ms]">
                ¡Vende tus productos
              </span>
              
              {/* Línea central con diseño refinado */}
              <span className="relative font-medium opacity-0 animate-fade-in-up [animation-delay:600ms] group">
                {/* Efectos de fondo más sutiles y orgánicos */}
                <span className="absolute -inset-x-6 -inset-y-3 bg-gradient-to-r from-[#E8EDF5]/50 via-[#F5F7FA]/50 to-[#E8EDF5]/50 
                  blur-[8px] group-hover:blur-[12px] rounded-full transition-all duration-700" />
                <span className="absolute -inset-x-3 -inset-y-2 bg-gradient-to-r from-[#E1E7F2]/30 via-[#EEF1F8]/30 to-[#E1E7F2]/30
                  blur-[4px] group-hover:blur-[8px] rounded-full transition-all duration-500" />
                
                {/* Efecto de brillo más sutil */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  group-hover:translate-x-full duration-1000 transition-transform" />
                
                {/* Texto principal con nuevo estilo */}
                <span className="relative font-[350] tracking-[-0.02em] bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF]
                  group-hover:from-[#2E5C9E] group-hover:via-[#0A84FF] group-hover:to-[#2E5C9E]
                  text-transparent bg-clip-text transition-all duration-700
                  [font-feature-settings:'salt'_on,'ss01'_on]">
                  en todo el mundo
                </span>
                
                {/* Destellos más sutiles */}
                <span className="absolute -right-2 -top-2 w-1.5 h-1.5 bg-[#0A84FF]/30 rounded-full animate-pulse" />
                <span className="absolute -left-2 -bottom-2 w-1.5 h-1.5 bg-[#0A84FF]/30 rounded-full animate-pulse [animation-delay:500ms]" />
              </span>

              {/* Última línea con el mismo gris suave */}
              <span className="text-[#1A1A2E] font-light opacity-0 animate-fade-in-up [animation-delay:800ms]">
                sin complicaciones!
              </span>
            </h1>

            {/* Subtitle with animated highlight */}
            <p className="relative text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto tracking-wide leading-relaxed 
              opacity-0 animate-fade-in-up [animation-delay:1000ms]">
              <span className="relative">
              Descubre en dónde tu marca tiene mayor potencial, conéctate a
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-0 h-[30%] bg-blue-100/30 -rotate-1" />
                  <span className="relative text-blue-600 font-normal"> los marketplaces correctos y domina el comercio global con IA y automatización.</span>
                </span>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      ¡Comienza Gratis!
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

      {/* Features Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#131F42] mb-6">
              Domina tu Expansión Global <span className="font-light">desde un Solo Lugar</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Gestiona y escala tu negocio internacionalmente con Exbordia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Storage and Fulfillment Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
              Dashboard de Expansión Global
              </h3>
              <p className="text-gray-600">
              Un solo panel para monitorear ventas, identificar tendencias y tomar decisiones estratégicas en cada país.
              </p>
            </div>

            {/* Returns Management Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
              Publicación en Marketplaces Internacionales
              </h3>
              <p className="text-gray-600">
              Automatiza la publicación de tus productos en los marketplaces más relevantes, asegurando una presencia constante y efectiva.
              </p>
            </div>

            {/* Cross-Border Payments Card */}
            <div className="bg-[#E8F1F1] rounded-3xl p-8 lg:row-span-2">
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
              🤖 AI Expansion Assistant
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Recomendaciones accionables basadas en datos en tiempo real para maximizar ventas y optimizar estrategias.
              </p>
              <div className="space-y-3">
                {[
                  "Identifica mercados clave",
                  "Optimiza precios dinámicamente",
                  "Gestión de regulaciones y certificaciones",
                  "Ajuste de branding y posicionamiento"
                ].map((title, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="text-sm font-medium text-[#131F42]">
                      {title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Branding Internacional
              </h3>
              <p className="text-gray-600">
              Crea una identidad de marca consistente y relevante en cada país, asegurando una presencia global sólida y memorable.
              </p>
            </div>

            {/* Ocean & Air Freight Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
              Coordinación de Logística y Fulfillment
              </h3>
              <p className="text-gray-600">
              Conécta con los mejores socios logísticos y almacenes en cada mercado para gestionar almacenamiento, envíos y devoluciones sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add CTA Section here */}
      <CTA />

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

      {/* Inspirational Section */}
      <InspirationalSection />

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
