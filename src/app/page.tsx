"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Globe2, Truck, BarChart3, DollarSign } from 'lucide-react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import AnimatedBackground from "@/components/ui/animated-background"
import { ScrollRevealStat } from "@/components/ui/scroll-reveal-stat"
import Link from 'next/link'
import { useState } from "react"
import { LoginDialog } from "@/components/auth/login-dialog"
import { LoginButton } from "@/components/auth/login-button"
import { CTA } from "@/components/ui/call-to-action"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/exbordia-logo.png"
              alt="Exbordia Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <LoginButton />
            <Link href="/contacto" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8">
                Solicitar Información
              </Button>
            </Link>
          </div>
        </div>
      </nav>

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
            {/* Pre-title badge */}
            <div className="mb-8 opacity-0 animate-fade-in-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r 
                from-blue-50 to-purple-50 text-blue-600 border border-blue-100/50 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-2" />
                Expande tu negocio globalmente
              </span>
            </div>

            {/* Main Title - with enhanced animations */}
            <h1 className="flex flex-col gap-2 text-4xl md:text-[5rem] font-normal leading-[1.1] mb-8 tracking-tight">
              <span className="text-[#131F42] font-light opacity-0 animate-fade-in-up [animation-delay:400ms]">
                ¡Vende tus productos
              </span>
              <span className="relative font-medium opacity-0 animate-fade-in-up [animation-delay:600ms]">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-lg" />
                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  en Estados Unidos
                </span>
              </span>
              <span className="text-[#131F42] font-light opacity-0 animate-fade-in-up [animation-delay:800ms]">
                sin complicaciones!
              </span>
            </h1>

            {/* Subtitle with animated highlight */}
            <p className="relative text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto tracking-wide leading-relaxed 
              opacity-0 animate-fade-in-up [animation-delay:1000ms]">
              <span className="relative">
                Nos encargamos de la logística, la entrega y los pagos en USD,
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-0 h-[30%] bg-blue-100/30 -rotate-1" />
                  <span className="relative text-blue-600 font-normal"> para que tú solo te enfoques en hacer crecer tu negocio.</span>
                </span>
              </span>
            </p>

            {/* CTA Buttons with enhanced animations */}
            <div className="flex justify-center opacity-0 animate-fade-in-up [animation-delay:1200ms] mb-20">
              <Link href="/contacto" target="_blank" rel="noopener noreferrer">
                <button className="group relative px-8 py-3 bg-[#131F42] text-white rounded-full overflow-hidden transition-all duration-300 
                  hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Evalúa tu Potencial de Exportación ¡Gratis!
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
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
              Expande Tu Mercado <span className="font-light">con Facilidad</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exbordia facilita la expansión global para marcas internacionales. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Storage and Fulfillment Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
              Inventario y Envíos desde EE. UU
              </h3>
              <p className="text-gray-600">
                Mantenga sus productos más cerca de los clientes en uno de nuestros 
                almacenes y permítanos gestionar la entrega D2C y B2B para entregas 
                confiables en 2 días.
              </p>
            </div>

            {/* Returns Management Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Gestión de Devoluciones
              </h3>
              <p className="text-gray-600">
                Gestionamos la logística inversa localmente. Optimizamos las devoluciones 
                con manejo basado en EE.UU. para mejorar la satisfacción del cliente y 
                reducir costos.
              </p>
            </div>

            {/* Cross-Border Payments Card */}
            <div className="bg-[#E8F1F1] rounded-3xl p-8 lg:row-span-2">
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Pagos Transfronterizos
              </h3>
              <p className="text-gray-600 mb-8">
                Reciba pagos en USD instantáneamente con Exbordia como su Merchant of Record, asegurando transacciones seguras para ventas en EE.UU. 
                Nos encargamos de impuestos y cumplimiento.
              </p>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Payment</span>
                    <span className="font-medium">$284.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Transfer</span>
                    <span className="font-medium">$114.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Insights Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Insights de Mercado
              </h3>
              <p className="text-gray-600">
                Obtenga una ventaja competitiva con insights de mercado basados en datos 
                y pronósticos de demanda para optimizar inventario y satisfacer la 
                demanda internacional.
              </p>
            </div>

            {/* Ocean & Air Freight Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Logística Internacional
              </h3>
              <p className="text-gray-600">
              Desde que el producto sale de tu fábrica en México hasta que llega a nuestras bodegas en EE. UU., gestionamos cada paso del proceso logístico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add CTA Section here */}
      <CTA />

      {/* How it Works Section - New Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r 
              from-gray-50 to-slate-50 text-blue-600 border border-slate-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-2" />
              PROCESO SIMPLE
            </span>
            <h2 className="text-4xl font-normal text-[#131F42] mt-6">
              ¿Cómo <span className="font-light">Funciona?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Decorative background elements - más sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-slate-50/20 to-gray-50/0 rounded-3xl 
              blur-3xl transform -rotate-1"></div>
            
            {[
              {
                step: "1",
                icon: "🔄",
                title: "Sincroniza Tu Tienda",
                description: "Conecta tu e-commerce (Shopify, WooCommerce, Wix) con Exbordia en minutos.",
                bgColor: "from-white to-slate-50/40"
              },
              {
                step: "2",
                icon: "📦",
                title: "Selecciona Tus Productos",
                description: "Elige qué productos quieres exportar y recibe nuestra guía para cumplir los requisitos necesarios.",
                bgColor: "from-slate-50/40 to-white"
              },
              {
                step: "3",
                icon: "🚢",
                title: "Envía a EE. UU.",
                description: "Coordinamos el transporte y despacho aduanal para que tus productos lleguen a nuestras bodegas.",
                bgColor: "from-white to-slate-50/40"
              },
              {
                step: "4",
                icon: "🏪",
                title: "Almacena y Vende",
                description: "Tus productos estarán listos en nuestras bodegas en EE. UU. para entregas rápidas a clientes finales o empresas.",
                bgColor: "from-slate-50/40 to-white"
              },
              {
                step: "5",
                icon: "💳",
                title: "Recibe Tus Pagos",
                description: "Procesamos los pagos de tus clientes y te depositamos directamente en tu cuenta bancaria en México.",
                bgColor: "from-white to-slate-50/40"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                {/* Connecting line - más fina y sutil */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-[0.5px] 
                    bg-gradient-to-r from-slate-200/30 to-transparent z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-1 
                      bg-slate-300 rounded-full animate-pulse"></div>
                  </div>
                )}

                <div className={`relative h-full p-6 rounded-3xl transition-all duration-500
                  bg-gradient-to-br ${item.bgColor}
                  border border-slate-100/60 hover:shadow-sm hover:shadow-slate-100
                  hover:-translate-y-1 group-hover:scale-[1.02]`}>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
                    bg-white shadow-sm
                    flex items-center justify-center text-base font-medium text-slate-600
                    border border-slate-100">
                    {item.step}
                  </div>

                  {/* Content container */}
                  <div className="relative">
                    {/* Icon floating effect */}
                    <div className="mb-6 mt-4 transform group-hover:-translate-y-0.5 transition-transform duration-300">
                      <span className="text-3xl">{item.icon}</span>
                    </div>

                    <h3 className="text-xl font-medium text-[#131F42] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover effect - cambiado a borde y fondo sutil */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent
                    group-hover:border-slate-200/50 group-hover:bg-slate-50/50 
                    transition-all duration-300 -z-10"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#131F42] mb-6">
              Nuestros Resultados <span className="font-light">Hablan por Sí Mismos</span>
            </h2>
          </div>

          <div className="space-y-6">
            <ScrollRevealStat
              stat="80%"
              description="menos en costos logísticos para tu negocio"
            />
            <ScrollRevealStat
              stat="2.5 días"
              description="o menos en tiempo de entrega para cumplir las expectativas de tus clientes en E.E.U.U."
            />
            <ScrollRevealStat
              stat="100%"
              description="transparencia total: Sin costos ocultos ni complicaciones"
            />
            <ScrollRevealStat
              stat="sin riesgo"
              description="prueba con un piloto para comenzar sin compromiso"
            />
          </div>
        </div>
      </section>

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
    </div>
  )
}
