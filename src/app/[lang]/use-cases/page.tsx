"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { MainHeader } from "@/components/layout/MainHeader"
import Link from "next/link"
import { MarketList } from "@/components/sandbox/market-finder/market-list"
import { ListingPreview } from "@/components/sandbox/listing-optimizer/listing-preview"
import { RegulacionesPreview } from "@/components/sandbox/regulaciones/regulaciones-preview"
import { MarketplacesAnalysis } from "@/components/sandbox/marketplaces/marketplaces-analysis"
import { WorkflowDiagram } from "@/components/ui/workflow-diagram"
import { useTranslation } from "@/app/i18n/client"
import { Language } from "@/types"

interface UseCasesProps {
  params: {
    lang: Language
  }
}

export default function UseCases({ params }: UseCasesProps) {
  const { t } = useTranslation('use-cases')

  return (
    <main className="min-h-screen bg-white">
      <MainHeader lang={params.lang} />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light tracking-tight">
                Automatize your international expansion with
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                smart workflows
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Configure smart workflows to manage your international operations efficiently and scaleably.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Workflow Diagram Section */}
      <section className="hidden md:block py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <WorkflowDiagram />
          </motion.div>
        </div>
      </section>

      {/* Caso de Uso 1: Texto a la izquierda */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Market Research
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Investigate in which countries
                  <span className="block font-medium">there is more demand for my products</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Discover in which countries there is more demand for my products based on market data and global trends.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>

            {/* Right Column - Market List */}
            <div className="flex-1">
              <div className="relative pt-[95px] max-w-[520px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Market List Component */}
                <MarketList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 2: Productos */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[480px]">
            {/* Left Column - Image */}
            <div className="flex-1">
              <div className="relative pt-[40px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Listing Preview Component */}
                <ListingPreview />
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
                  Listing Optimization
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Translate and optimize my listings
                  <span className="block font-medium">to sell more in other countries</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Adapt your listings to each international marketplace with professional translations and SEO optimization specific to each platform.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 3: Amazon Seller */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Amazon
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Configure my Amazon
                  <span className="block font-medium">Seller Central to sell in the United States</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Create, connect or configure your Amazon Seller Central account to sell in the United States.
                </p>

                <div className="space-y-4">
                </div>

                {/* Nuevo botón */}
                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>

            {/* Right Column - Amazon Seller Logo */}
            <div className="flex-1">
              <div className="relative pt-[40px] flex items-center justify-center">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                <Image 
                  src="/logos-partners-png/amazonseller.png"
                  alt="Amazon Seller Central"
                  width={400}
                  height={240}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 4: Regulaciones y Certificaciones */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Image */}
            <div className="flex-1">
              <div className="relative pt-[40px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Regulaciones Preview Component */}
                <RegulacionesPreview />
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
                  Regulations and Certifications
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Identify the requirements
                  <span className="block font-medium">to sell in other countries</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Learn about the certifications, regulations and documentation needed to sell your products in new markets.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 5: Marketplaces */}
      <section id="marketplaces" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[600px]">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Marketplaces
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Investigate in which marketplace
                  <span className="block font-medium">I should sell to be successful in Canada</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Analyze prices, strategies and positioning of your competitors in each international marketplace.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>

            {/* Right Column - Marketplaces Analysis */}
            <div className="flex-1">
              <div className="relative pt-[40px]">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                {/* Marketplaces Analysis Component */}
                <MarketplacesAnalysis />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 6: Shopify Markets */}
      <section id="shopify-markets" className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 min-h-[480px]">
            {/* Left Column - Shopify Logo */}
            <div className="flex-1">
              <div className="relative flex items-center justify-center h-full">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                <Image 
                  src="/logos-partners-png/shopify.png"
                  alt="Shopify Markets"
                  width={280}
                  height={180}
                  className="object-contain w-[280px]"
                  priority
                />
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
                  Shopify Markets
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Configure your Shopify store
                  <span className="block font-medium">to sell globally</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Expand your international business with Shopify Markets. Manage multiple markets from a single store.
                </p>

                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 7: Agentes Aduanales */}
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
                  Customs Agents
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  Connect with a
                  <span className="block font-medium">Customs Agent in Mexico</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Take advantage of the Exbordia partnership network to identify and connect with reliable customs agents in Mexico.
                </p>

                <div className="space-y-4">
                </div>

                {/* Nuevo botón */}
                <Link 
                  href="https://tally.so/r/mYx0b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  Start now
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <div className="relative flex items-center justify-center">
                {/* Decorative gradient backgrounds */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100/20 rounded-full blur-[100px] -z-10" />
                
                <div className="relative w-full max-w-[480px]">
                  <Image 
                    src="/logos-partners-png/agenteaduanal.png"
                    alt="Customs Agent"
                    width={480}
                    height={360}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-4xl font-normal text-[#131F42] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              And many other
              <span className="font-medium"> automations</span>
            </motion.h2>
            
            <p className="text-xl text-gray-600 mb-12">
              If you have questions, contact us
            </p>

            <Link
              href="https://tally.so/r/mYx0b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 
                bg-[#131F42] text-white rounded-full text-lg font-medium 
                hover:bg-[#1c2b4a] transition-colors duration-200
                shadow-lg hover:shadow-xl"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

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
                  <Link href="/casos-de-uso" className="text-gray-300 hover:text-white transition-colors">
                    Market Research
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases#marketplaces" className="text-gray-300 hover:text-white transition-colors">
                    Marketplaces
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases#shopify-markets" className="text-gray-300 hover:text-white transition-colors">
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