'use client'

import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { BlogSearch } from '@/components/blog/BlogSearch'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-normal text-[#131F42] mb-6">
              Nuestro <span className="font-light">Blog</span>
            </h1>
            <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Descubre las últimas tendencias, consejos y mejores prácticas para expandir 
              tu negocio al mercado estadounidense.
            </p>
          </div>

          {/* Search */}
          <BlogSearch />

          {/* Blog Grid */}
          <BlogGrid />
        </div>
      </main>
    </div>
  )
} 