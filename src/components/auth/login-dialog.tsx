"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Language } from "@/types"

interface LoginDialogProps {
  isOpen: boolean
  onClose: () => void
  lang: Language
}

export function LoginDialog({ isOpen, onClose, lang }: LoginDialogProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const texts = {
    es: {
      title: "Iniciar sesión",
      email: "Correo electrónico",
      password: "Contraseña",
      login: "Iniciar sesión",
      forgotPassword: "¿Olvidaste tu contraseña?",
      or: "o",
      google: "Continuar con Google",
      noAccount: "¿No tienes una cuenta?",
      signUp: "Regístrate"
    },
    en: {
      title: "Login",
      email: "Email",
      password: "Password",
      login: "Login",
      forgotPassword: "Forgot your password?",
      or: "or",
      google: "Continue with Google",
      noAccount: "Don't have an account?",
      signUp: "Sign up"
    }
  }

  const t = texts[lang]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
        </DialogHeader>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.password}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {t.login}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
            {t.forgotPassword}
          </a>
        </div>

        <div className="mt-4 text-center text-gray-500">
          {t.noAccount}{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            {t.signUp}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
} 