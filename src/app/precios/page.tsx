"use client"

import { MainHeader } from "@/components/layout/MainHeader"
import { PricingSection } from "@/components/pricing/pricing-section"
import { MarketOpportunitySection } from "@/components/pricing/market-opportunity-section"
import { motion } from "framer-motion"

// Definimos los planes y precios
const PAYMENT_FREQUENCIES = ["mensual", "anual"]

const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: {
      mensual: "$ 0",
      anual: "$ 0",
    },
    description: "Para emprendedores",
    features: [
      "Conéctate con 1 tienda online",
      "Descubre oportunidades en 1 mercado (demanda, precios, regulaciones)",
      "Traducción y optimización de 10 productos",
      "Soporte por email (respuesta en 24 horas)",
      "Acceso a la comunidad de exportadores",
    ],
    cta: "Comenzar Gratis",
    ctaUrl: "https://tally.so/r/mYx0b0"
  },
  {
    id: "growth",
    name: "Growth",
    price: {
      mensual: 99,
      anual: 79,
    },
    description: "Para negocios en crecimiento",
    features: [
      "Hasta 3 tiendas online",
      "Análisis de 3 mercados (descubre dónde vender más y mejor)",
      "Traducción y optimización de 100 productos",
      "Soporte 24/7 con IA + expertos humanos",
      "Estrategia personalizada",
    ],
    cta: "Comenzar Ahora",
    ctaUrl: "https://tally.so/r/mYx0b0",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      mensual: "Personalizado",
      anual: "Personalizado",
    },
    description: "Para grandes empresas",
    features: [
      "Tiendas y mercados ilimitados",
      "Integración API para personalizar tu experiencia",
      "Account Manager dedicado (soporte en menos de 2h)",
      "Onboarding y consultoría estratégica en comercio internacional",
      "Implementación guiada con expertos",
    ],
    cta: "Contactar Ventas",
    ctaUrl: "https://tally.so/r/mYx0b0",
    highlighted: true,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light whitespace-nowrap tracking-tight">
                Precios simples y
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                transparentes
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto mb-12 leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elige el plan que mejor se adapte a tus necesidades de expansión internacional
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        title=""
        subtitle=""
        frequencies={PAYMENT_FREQUENCIES}
        tiers={PRICING_TIERS}
      />

      {/* Market Opportunity Section - reemplaza a FAQ */}
      <MarketOpportunitySection />

    </main>
  )
} 