"use client"

import { RegulacionesPreview } from "@/components/sandbox/regulaciones/regulaciones-preview"

export default function RegulacionesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="max-w-[520px]">
        <RegulacionesPreview />
      </div>
    </div>
  )
}
