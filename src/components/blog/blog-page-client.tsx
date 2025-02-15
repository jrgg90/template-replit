"use client"

import { BlogGrid } from '@/components/blog/BlogGrid'
import { MainHeader } from '@/components/layout/MainHeader'
import { BlogSearch } from '@/components/blog/BlogSearch'
import { Suspense } from 'react'
import { motion } from 'framer-motion'

interface BlogPageClientProps {
  initialPosts: any // Ajusta este tipo según la estructura de tus posts
}

export function BlogPageClient({ initialPosts }: BlogPageClientProps) {
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
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#1A1A2E] font-light">
                Nuestro{" "}
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium">
                Blog
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto mb-12 leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre las últimas tendencias, consejos y mejores prácticas para expandir 
              tu negocio al mercado estadounidense.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Search y Grid envueltos en Suspense */}
          <Suspense fallback={<div>Cargando...</div>}>
            <BlogSearch />
            <BlogGrid initialPosts={initialPosts} />
          </Suspense>
        </div>
      </div>
    </main>
  )
} 