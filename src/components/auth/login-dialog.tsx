"use client"

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { LoginForm } from "./login-form"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/hooks/useAuth"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const router = useRouter()
  const { signIn } = useAuth()
  
  const handleLogin = async (email: string, password: string) => {
    try {
      await signIn(email, password)
      onOpenChange(false)
    } catch (error) {
      throw error
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <LoginForm onSubmit={handleLogin} className="p-0" />
      </DialogContent>
    </Dialog>
  )
} 