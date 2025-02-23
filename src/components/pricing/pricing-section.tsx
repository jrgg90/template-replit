"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/pricing/pricing-card"
import { PricingTab } from "@/components/pricing/pricing-tab"
import { Language } from "@/types"

interface PricingSectionProps {
  lang: Language
  title?: string
  subtitle?: string
  tiers: PricingTier[]
  frequencies: string[]
}

export function PricingSection({ lang, ...props }: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(props.frequencies[0])

  const getLocalizedHref = (path: string) => `/${lang}${path}`

  return (
    <section className="relative flex flex-col items-center gap-8 py-4">
      {(props.title || props.subtitle) && (
        <div className="space-y-7 text-center">
          {props.title && <h2 className="text-4xl font-medium md:text-5xl">{props.title}</h2>}
          {props.subtitle && <p className="text-gray-600">{props.subtitle}</p>}
        </div>
      )}
      
      <div className="mx-auto flex w-fit rounded-full bg-gray-100/80 p-1">
        {props.frequencies.map((freq) => (
          <PricingTab
            key={freq}
            text={freq}
            selected={selectedFrequency === freq}
            setSelected={setSelectedFrequency}
            discount={freq === "anual"}
          />
        ))}
      </div>

      <div className="grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {props.tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
          />
        ))}
      </div>
    </section>
  )
} 