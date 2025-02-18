"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function MarketResearchPreview() {
  return (
    <Link href="/sandbox/market-research-landing">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-200"
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <span className="text-2xl">🔍</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Investigación de Mercado</h3>
              <p className="text-sm text-gray-600">Análisis detallado de mercados internacionales</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
} 