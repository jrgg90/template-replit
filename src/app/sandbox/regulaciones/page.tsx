"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { RequirementsList } from "@/components/regulatory/requirements-list"

export default function RegulacionesSandbox() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Link href="/sandbox" className="text-gray-600 hover:text-gray-900">
              ← Volver al Sandbox
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <RequirementsList />
        </div>
      </section>
    </main>
  )
}
