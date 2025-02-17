"use client"

import { MainHeader } from "@/components/layout/MainHeader"
import { PricingSection } from "@/components/pricing/pricing-section"
import { MarketOpportunitySection } from "@/components/pricing/market-opportunity-section"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-normal text-center mb-16">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-3">
            {[
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer: "Sí, puedes cambiar de plan de gratis a growth o scale en cualquier momento. Los cambios se aplican inmediatamente y el cobro se ajusta proporcionalmente."
              },
              {
                question: "¿Hay algún contrato a largo plazo?",
                answer: "Nuestros planes son mensuales y puedes cancelar en cualquier momento. Sólo hay compromiso si tienes un plan anual."
              },
              {
                question: "¿Qué métodos de pago aceptan?",
                answer: "Aceptamos todas las principales tarjetas de crédito, PayPal y transferencias bancarias para planes enterprise."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                    <span className="text-gray-900 text-lg">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn px-6 pb-6">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <MarketOpportunitySection />

      {/* Footer */}
      <footer className="bg-[#131F42] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 - Platform */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Platforma</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                    Iniciar sesión
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Use Cases */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Casos de Uso</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/casos-de-uso" className="text-gray-300 hover:text-white transition-colors">
                    Investigación de mercados
                  </Link>
                </li>
                <li>
                  <Link href="/casos-de-uso#marketplaces" className="text-gray-300 hover:text-white transition-colors">
                    Marketplaces
                  </Link>
                </li>
                <li>
                  <Link href="/casos-de-uso#shopify-markets" className="text-gray-300 hover:text-white transition-colors">
                    Shopify Markets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Contacto</h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <a href="mailto:info@exbordia.com" className="hover:text-white transition-colors">
                    info@exbordia.com
                  </a>
                </p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-8">
                <Image 
                  src="/exbordia-logo.png" 
                  alt="Exbordia Logo" 
                  width={140} 
                  height={40}
                  className="brightness-0 invert object-contain"
                />
                <p className="text-sm text-gray-300">
                  © {new Date().getFullYear()} Exbordia. Todos los derechos reservados.
                </p>
              </div>
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