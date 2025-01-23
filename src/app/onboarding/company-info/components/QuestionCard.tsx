'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface QuestionCardProps {
  question: string
  value: boolean | null
  onChange: (value: boolean) => void
}

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
      {/* Question Text */}
      <h3 className="text-lg text-[#131F42] font-light">
        {question}
      </h3>

      {/* Yes/No Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={() => onChange(true)}
          className={cn(
            "flex-1 h-12 font-light",
            value === true
              ? "bg-[#131F42] text-white hover:bg-[#1c2b5d]"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          )}
        >
          Sí
        </Button>
        <Button
          onClick={() => onChange(false)}
          className={cn(
            "flex-1 h-12 font-light",
            value === false
              ? "bg-[#131F42] text-white hover:bg-[#1c2b5d]"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          )}
        >
          No
        </Button>
      </div>
    </div>
  )
} 