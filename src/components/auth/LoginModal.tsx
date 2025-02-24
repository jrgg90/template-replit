'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAuth } from "@/lib/hooks/useAuth"
import { Loader2 } from "lucide-react"
import Image from "next/image"

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, redirectToApp } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      await signIn(email, password)
      onClose()
      redirectToApp()
    } catch (error) {
      console.error('Error signing in:', error)
      setError('Credenciales incorrectas. Por favor, verifica tus datos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="p-10 space-y-10">
          {/* Logo y Título */}
          <div className="text-center space-y-3">
            <Image 
              src="/exbordia-logo.png" 
              alt="Exbordia" 
              width={140}
              height={40}
              className="mx-auto mb-8"
            />
            <h2 className="text-3xl font-light text-[#131F42]">
              Bienvenido a Exbordia
            </h2>
            <p className="text-base text-gray-600 font-light">
              Inicia sesión con tu cuenta autorizada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-4 text-sm text-red-600 bg-red-50 rounded-lg">
                {error}
              </div>
            )}
            <div className="space-y-6">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-base px-4 border-gray-200 rounded-lg"
                required
              />

              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 text-base px-4 border-gray-200 rounded-lg"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#131F42] text-white hover:bg-[#1c2b5d] 
                transition-colors font-light text-base rounded-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-gray-600 text-base">
              ¿No tienes acceso?{' '}
              <a 
                href="https://tally.so/r/mYx0b0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#131F42] hover:text-[#1c2b5d] font-medium"
              >
                Solicitar acceso
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 