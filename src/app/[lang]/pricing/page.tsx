"use client"

import { MainHeader } from "@/components/layout/MainHeader"
import { PricingSection } from "@/components/pricing/pricing-section"
import { MarketOpportunitySection } from "@/components/pricing/market-opportunity-section"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Language } from "@/types"

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

interface PricingProps {
  params: {
    lang: Language
  }
}

export default function Pricing({ params }: PricingProps) {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader lang={params.lang} />
      
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
            {[
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
              <h3 className="text-lg font-medium mb-4">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Use Cases */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Use Cases</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/use-cases" className="text-gray-300 hover:text-white transition-colors">
                    Market Research
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases#marketplaces" className="text-gray-300 hover:text-white transition-colors">
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
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="mailto: info@exbordia.com" className="text-gray-300 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Contact</h3>
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
                  © {new Date().getFullYear()} Exbordia. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms and Conditions
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 