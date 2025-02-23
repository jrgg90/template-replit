"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FAQSection } from "@/components/layout/faq-section"
import { MainHeaderEN } from "@/components/layout/MainHeaderEN"
import { motion } from "framer-motion"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { HowItWorksSection } from "@/components/ui/how-it-works-section"
import { PartnersCarousel } from "@/components/ui/partners-carousel"
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import { LocaleParams } from "@/types"
import { FooterEN } from "@/components/layout/FooterEN"
import { HeroSectionEN } from "@/components/layout/HeroSectionEN"
import { routes } from "@/config/routes"

// Mantener solo las versiones dinámicas
const AnimatedBackgroundWithNoSSR = dynamic(
  () => import('@/components/ui/animated-background').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[120px] bg-gray-50 animate-pulse rounded-xl" />
    )
  }
)

const WorkflowDiagramWithNoSSR = dynamic(
  () => import('@/components/workflows/workflow-diagram').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[730px] bg-gray-50 animate-pulse rounded-xl" />
    )
  }
)

const MarketFinderPreviewWithNoSSR = dynamic(
  () => import('@/components/market-finder/market-finder-preview').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-gray-50 animate-pulse rounded-xl" />
    )
  }
)

export default function Home({ params: { lang } }: LocaleParams) {
  // Solo redirigir si estamos en la página incorrecta
  if (lang === 'es') {
    redirect(routes.home.es)
  }

  const steps = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Conecta tu tienda",
      description: "Integra tu tienda online con el Agente de Exbordia en minutos."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Define tus objetivos",
      description: "Dile a tu agente qué mercados te interesan, qué te preocupa y qué productos quieres vender."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "¡Listo para vender!",
      description: "Tu agente comenzará a trabajar en tu expansión internacional automáticamente."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <MainHeaderEN />
      <HeroSectionEN />
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
                Take your online store{' '}
                <span className="md:hidden inline">
                </span>
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                to new global markets
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-[600px] mx-auto mb-12 leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With <span className="font-bold text-gray-900">AI Agents</span> that will sell your products worldwide ¡Easy!
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
                    Start Today
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
              The agent works with any platform
            </motion.p>
            <PartnersCarousel />
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Workflows Section */}
      <section className="pt-32 pb-32 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="max-w-[480px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Workflows
                </div>
                
                <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
                  A new member in
                  <span className="block font-medium">your global trade team.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Tell Exbordia what to do and forget about manual tasks. Your international trade agent will take care of everything.
                </p>

                <div className="space-y-4">
                  {[
                    "Translate and optimize listings in marketplaces",
                    "Validate regulations and certifications",
                    "Connect with fulfillment partners"
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

                <Link 
                  href="/use-cases"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  View Workflows
                </Link>
              </div>
            </div>

            {/* Right Column - Platform Preview */}
            <div className="flex-1">
              <div className="flex justify-start pt-16">
                <motion.div
                  className="relative max-w-[480px]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="relative z-20">
                    <div className="h-[400px] overflow-y-hidden w-[660px] -ml-[90px] relative">
                      <div className="scale-[0.60] origin-top">
                        <WorkflowDiagramWithNoSSR />
                      </div>
                      <div className="absolute top-0 right-0 h-full w-[100px] bg-gradient-to-r from-transparent to-white pointer-events-none" />
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute -inset-[10%] -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full
                      bg-gradient-to-r from-blue-100/5 via-purple-100/10 to-blue-100/5 rounded-full blur-3xl" />
                  </div>
                </motion.div>
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
                  A market analyst
                  <span className="block font-medium">that tells you where to sell.</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Exbordia analyzes demand data, competition, and regulations to tell you where your products can sell with greater success.
                </p>

                <div className="space-y-4">
                  {[
                    "Demand analysis by country and category",
                    "Competition and pricing evaluation",
                    "Data-based recommendations"
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

                <Link 
                  href="/use-cases"
                  className="inline-flex mt-8 px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  View Workflows
                </Link>
              </div>
            </div>

            {/* Right Column - Platform Preview */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="relative w-[220%] -mr-[2%] -ml-[2%]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="scale-[0.78] origin-center transform">
                    <MarketFinderPreviewWithNoSSR />
                  </div>
                  <div className="absolute top-0 right-0 h-full w-[15%] 
                    bg-gradient-to-r from-transparent via-[#FAFAFA]/50 to-[#FAFAFA]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Chat Section - Ahora justo después de Market Finder */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAFA] via-white to-[#F8FAFC] relative">
        {/* Decorative Elements para mejorar la transición */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAFAFA] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
        
        <div className="container mx-auto max-w-6xl px-4 relative">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Asistente 24/7
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-normal text-[#131F42] mb-6 tracking-tight"
                >
                  Your cross-border
                  <span className="block font-medium">e-commerce expert always available</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Ask any question about international trade. Your Exbordia agent has the answers you need to expand your business.
                </motion.p>

                <Link 
                  href="/casos-de-uso"
                  className="inline-flex px-6 py-2.5 text-[#131F42] border border-[#131F42]/20 
                    rounded-full text-sm font-medium hover:bg-[#131F42]/5 transition-colors duration-200"
                >
                  View Workflows
                </Link>
              </div>
            </div>

            {/* Right Column - Chat Interface con animaciones mejoradas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 flex items-center justify-center"
            >
              <div className="w-full max-w-xl relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100/20 rounded-full blur-3xl" />
                
                <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(19,31,66,0.08)] p-8 md:p-10 space-y-8 relative">
                  {/* Chat Messages */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Usuario */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden shadow-md">
                        <Image
                          src="/profilepic.png"
                          alt="Usuario"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-6 py-4 shadow-sm">
                          <p className="text-gray-700">How do I set up taxes for international sales in my Shopify store?</p>
                        </div>
                      </div>
                    </div>

                    {/* Exbordia */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#131F42] flex items-center justify-center shadow-md overflow-hidden">
                        <Image
                          src="/snippet.png"
                          alt="Exbordia Assistant"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="bg-blue-50 rounded-2xl rounded-tl-none px-6 py-5 shadow-sm">
                          <p className="text-gray-700 font-medium mb-3">I'll help you with that. For Shopify, you need to:</p>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1.5 text-lg">•</span>
                              <span>Set up tax nexus for each country</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1.5 text-lg">•</span>
                              <span>Establish tax rates by region</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1.5 text-lg">•</span>
                              <span>Enable automatic tax calculation</span>
                            </li>
                          </ul>
                          <p className="mt-4 text-gray-700">Let's go to Shopify and set it up together.</p>
                        </div>
                      </div>
                    </div>

                    {/* ... resto de los mensajes con el mismo estilo ... */}
                  </motion.div>

                  {/* Input Area */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-50 rounded-full px-8 py-4 text-gray-500 shadow-inner">
                        Ask anything...
                      </div>
                      <button className="flex-shrink-0 bg-[#131F42] text-white rounded-full px-8 py-4 
                        hover:bg-[#1c2b5a] transition-all duration-300 hover:shadow-lg">
                        Start now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships Section - Ahora viene después */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-6 tracking-tight">
              Your assistant connects with all
              <span className="block font-medium">e-commerce platforms</span>
            </h2>
            <p className="text-xl text-gray-600">
              Integrate your online store easily and expand your global business without worrying about which platform you use
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
                And many more platforms...
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How it Works Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Fondo con patrón sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFC]">
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, #131F42 1px, transparent 0)',
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl font-normal text-[#131F42] mt-4 mb-6 tracking-tight">
              How <span className="font-medium">it works?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In just three steps, you can start selling your products in international markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Línea conectora */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#131F42]/5 via-[#131F42]/20 to-[#131F42]/5 
              -translate-y-1/2 hidden md:block" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(19,31,66,0.06)] hover:shadow-[0_8px_30px_rgba(19,31,66,0.12)] 
                  transition-all duration-300 group-hover:translate-y-[-4px] relative z-10 border border-[#131F42]/5">
                  {/* Número del paso */}
                  <div className="absolute -top-6 left-8 bg-[#131F42] text-white w-12 h-12 rounded-full flex items-center 
                    justify-center text-xl font-medium shadow-lg group-hover:scale-110 transition-transform duration-300
                    group-hover:bg-gradient-to-r group-hover:from-[#131F42] group-hover:to-[#2563eb]">
                    {index + 1}
                  </div>

                  {/* Icono */}
                  <div className="mb-6 text-[#131F42] h-16 flex items-center justify-center">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#131F42]/5 to-[#2563eb]/5 rounded-2xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterEN lang={lang} />
    </main>
  )
}