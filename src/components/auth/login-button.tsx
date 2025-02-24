"use client"

import { useState } from "react"
import { LoginModal } from "@/components/auth/LoginModal"
import { Language } from "@/types"
import { Button } from "@/components/ui/button"

interface LoginButtonProps {
  lang: Language
}

export function LoginButton({ lang }: LoginButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button 
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="text-[#131F42] font-light"
      >
        {lang === 'es' ? 'Iniciar Sesión' : 'Login'}
      </Button>

      <LoginModal 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
      />
    </>
  )
} 
