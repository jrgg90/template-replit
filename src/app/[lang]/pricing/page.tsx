"use client"

import { MainHeaderEN } from "@/components/layout/MainHeaderEN"
import { PricingSection } from "@/components/layout/pricing/pricing-section"
import { MarketOpportunitySectionEN } from "@/components/layout/pricing/market-opportunity-sectionEN"
import { FooterEN } from "@/components/layout/FooterEN"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Language } from "@/types"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

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
    description: "For entrepreneurs",
    features: [
      "Connect with 1 online store",
      "Discover opportunities in 1 market (demand, prices, regulations)",
      "Translation and optimization of 10 products",
      "Email support (response in 24 hours)",
      "Access to the export community",
    ],
    cta: "Start for Free",
    ctaUrl: "https://tally.so/r/mYx0b0"
  },
  {
    id: "growth",
    name: "Growth",
    price: {
      mensual: 99,
      anual: 79,
    },
    description: "For growing businesses",
    features: [
      "Up to 3 online stores",
      "Analysis of 3 markets (discover where to sell more and better)",
      "Translation and optimization of 100 products",
      "24/7 support with AI + human experts",
      "Custom strategy",
    ],
    cta: "Start Now",
    ctaUrl: "https://tally.so/r/mYx0b0",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      mensual: "Custom",
      anual: "Custom",
    },
    description: "For large companies",
    features: [
      "Unlimited stores and markets",
      "API integration to customize your experience",
      "Dedicated Account Manager (support in less than 2h)",
      "Onboarding and strategic consulting in international trade",
      "Guided implementation with experts",
    ],
    cta: "Contact Sales",
    ctaUrl: "https://tally.so/r/mYx0b0",
    highlighted: true,
  },
]

// Mover FAQs fuera del componente
const FAQS = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can change from free to growth or scale at any time. Changes apply immediately and the charge is adjusted proportionally."
  },
  {
    question: "Is there a long-term contract?",
    answer: "Our plans are monthly and you can cancel at any time. Only commitment if you have an annual plan."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal and bank transfers for enterprise plans."
  }
]

interface PricingProps {
  params: {
    lang: Language
  }
}

// Componente FAQ separado
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center font-medium cursor-pointer p-6"
      >
        <span className="text-gray-900 text-lg">{question}</span>
        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            fill="none" 
            height="24" 
            width="24" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <p className="text-gray-600 px-6 pb-6 animate-fadeIn">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function Pricing({ params }: PricingProps) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // O un loading state
  }

  useEffect(() => {
    // Forzar la ruta correcta basada en el idioma
    const correctPath = params.lang === 'es' ? '/es/precios' : '/en/pricing'
    if (window.location.pathname !== correctPath) {
      router.replace(correctPath)
    }
  }, [params.lang, router])

  useEffect(() => {
    console.log('Current language:', params.lang);
    console.log('Current path:', window.location.pathname);
  }, [params.lang]);

  return (
    <main className="min-h-screen bg-white">
      <MainHeaderEN />
      
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
                Simple and
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                Transparent Pricing
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto mb-12 leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the plan that best fits your international expansion needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        lang={params.lang}
        title=""
        subtitle=""
        frequencies={PAYMENT_FREQUENCIES}
        tiers={PRICING_TIERS}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-normal text-center mb-16">
            Frequent Questions
          </h2>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <MarketOpportunitySectionEN />

      {/* Footer */}
      <FooterEN lang={params.lang} />
    </main>
  )
} 