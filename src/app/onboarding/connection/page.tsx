
"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const ConnectionPage = () => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push('/onboarding/company-info')}
      className="bg-[#131F42] text-white hover:bg-[#1c2b5d] 
        font-light px-6 text-sm"
    >
      Siguiente: Información de tu empresa
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  )
}

export default ConnectionPage
