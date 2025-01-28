'use client'

import { Button } from "@/components/ui/button"

export function EvaluationSection() {
  return (
    <Button 
      asChild
      className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[50px] px-8"
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        Evalúa tu Potencial de Exportación
      </a>
    </Button> 
  )
} 