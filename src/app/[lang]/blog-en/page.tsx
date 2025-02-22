"use client"

import { MainHeader } from "@/components/layout/MainHeader"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { Language } from "@/types"

interface BlogEnProps {
  params: {
    lang: Language
  }
}

export default function BlogEn({ params }: BlogEnProps) {
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
                Our
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                Blog
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the latest trends, tips and best practices
              for expanding your business to the US market
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Blog Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.article 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/en/blog-en/export-guide-usa">
                <Image
                  src="/blog/export-guide.jpg"
                  alt="Export Guide"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-[#1A1A2E]">
                    Complete Guide: How to Export to the United States
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know to start exporting your products to the US market.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>10 min read</span>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* Article 2 */}
            <motion.article 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/en/blog-en/us-marketplaces">
                <Image
                  src="/blog/marketplaces.jpg"
                  alt="US Marketplaces"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-[#1A1A2E]">
                    The Best Marketplaces in the United States
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Comparative analysis of the main online selling platforms in the US.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>8 min read</span>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* Article 3 */}
            <motion.article 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/en/blog-en/customs-regulations">
                <Image
                  src="/blog/regulations.jpg"
                  alt="Customs Regulations"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-[#1A1A2E]">
                    Customs Regulations: What You Need to Know
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Practical guide on regulations and documentation needed for exporting.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>12 min read</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer lang={params.lang} />
    </main>
  )
}
