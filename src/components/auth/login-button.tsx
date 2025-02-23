"use client"

import { useState } from "react"
import { LoginDialog } from "@/components/auth/login-dialog"
import { Language } from "@/types"

interface LoginButtonProps {
  lang: Language
}

export function LoginButton({ lang }: LoginButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {lang === 'es' ? 'Iniciar sesión' : 'Login'}
      </button>

      <LoginDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        lang={lang}
      />
    </>
  )
} 
