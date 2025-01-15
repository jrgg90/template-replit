"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useAuth } from "@/lib/hooks/useAuth"
import { useState } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export function LoginButton() {
  const [open, setOpen] = useState(false)
  const { user, signOut, loading } = useAuth()
  const router = useRouter()

  if (loading) {
    return (
      <Button variant="ghost" className="text-[#131F42] font-light" disabled>
        <LoadingSpinner />
      </Button>
    )
  }

  if (user) {
    return (
      <Button 
        variant="ghost" 
        className="text-[#131F42] font-light"
        onClick={async () => {
          try {
            await signOut()
            // El redireccionamiento ahora se maneja en el hook useAuth
          } catch (error) {
            console.error("Error al cerrar sesión:", error)
          }
        }}
      >
        Cerrar Sesión
      </Button>
    )
  }

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