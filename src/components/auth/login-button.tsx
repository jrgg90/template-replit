"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import { LoginDialog } from './login-dialog'

export function LoginButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-[#131F42] text-white hover:bg-[#1f2b4d] transition-colors"
      >
        Iniciar Sesión
      </Button>
      <LoginDialog 
        open={open} 
        onOpenChange={setOpen}
      />
    </>
  )
} 
