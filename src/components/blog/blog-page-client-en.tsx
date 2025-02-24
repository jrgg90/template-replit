"use client"

import { MainHeaderEN } from "@/components/layout/MainHeaderEN"
import { FooterEN } from "@/components/layout/FooterEN"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { BlogSearch } from '@/components/blog/BlogSearch'
import { motion } from "framer-motion"
import type { BlogPost } from "@/types/blog"
import type { Language } from "@/types"
import { useState, useEffect } from 'react'
import { Suspense } from 'react'

interface BlogPageClientENProps {
  initialPosts: BlogPost[]
  lang: Language
}

export function BlogPageClientEN({ initialPosts, lang }: BlogPageClientENProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

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
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#1A1A2E] font-light">
                Our{" "}
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
              Discover the latest trends, tips and best practices to expand 
              your business to the global market.
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <BlogSearch lang={lang} />
              <BlogGrid 
                posts={initialPosts} 
                lang={lang}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <FooterEN lang={lang} />
    </main>
  )
} 