"use client"

import { Button } from "@/components/ui/button"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useState } from "react"

export function LoginButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        variant="ghost" 
        className="text-[#131F42] font-light"
        onClick={() => setOpen(true)}
      >
        Iniciar Sesión
      </Button>
      <LoginDialog open={open} onOpenChange={setOpen} />
    </>
  )
} 
