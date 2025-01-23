"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>
  className?: string
}

export function LoginForm({ onSubmit, className = "" }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await onSubmit(email, password)
    } catch (err) {
      setError("No estás registrado aún. Solicita acceso <a href='/contacto' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>aquí</a>")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`flex flex-col space-y-8 p-10 ${className}`}>
      <div className="flex flex-col items-center space-y-3">
        <Image 
          src="/exbordia-logo.png"
          alt="Exbordia Logo"
          width={160}
          height={45}
          className="object-contain mb-6"
        />
        <h2 className="text-3xl font-light text-[#131F42]">
          Bienvenido a Exbordia
        </h2>
        <p className="text-base text-gray-600 font-light">
          Inicia sesión con tu cuenta autorizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div 
            className="p-4 text-sm text-gray-600 bg-gray-50 rounded-lg"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
        
        <div className="space-y-4">
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
          className="w-full h-14 bg-[#131F42] text-white hover:bg-[#1c2b5d]
            transition-colors font-light text-base rounded-lg"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Iniciando sesión...
            </>
          ) : (
            "Iniciar Sesión"
          )}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-base text-gray-600">
          ¿No tienes acceso?{' '}
          <a 
            href="/contacto" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#131F42] hover:text-[#1c2b5d] font-medium"
          >
            Solicitar acceso
          </a>
        </p>
      </div>
    </div>
  )
} 