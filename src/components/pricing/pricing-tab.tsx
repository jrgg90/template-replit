"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  discount?: boolean
}

export function PricingTab({
  text,
  selected,
  setSelected,
  discount = false,
}: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative px-6 py-2 text-sm font-medium capitalize",
        "text-gray-900 transition-colors",
        discount && "flex items-center gap-2.5"
      )}
    >
      <span className="relative z-10 capitalize">{text}</span>
      {selected && (
        <motion.span
          layoutId="pricing-tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
        />
      )}
      {discount && (
        <span className={cn(
          "relative z-10 ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600",
          selected && "bg-blue-50"
        )}>
          Ahorra 20%
        </span>
      )}
    </button>
  )
} 