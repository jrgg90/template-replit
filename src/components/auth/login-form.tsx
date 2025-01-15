"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

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
    <div className={`flex flex-col space-y-6 p-6 ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <Image 
          src="/exbordia-logo.png"
          alt="Exbordia Logo"
          width={140}
          height={40}
          className="object-contain"
        />
        <h2 className="text-2xl font-semibold">Bienvenido a Exbordia</h2>
        <p className="text-sm text-muted-foreground">
          Inicia sesión con tu cuenta autorizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div 
            className="p-3 text-sm text-gray-600 bg-gray-50 rounded-md"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
        
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[#131F42] text-white hover:bg-[#1c2b5d]"
          disabled={loading}
        >
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">¿No tienes acceso? </span>
        <a 
          href="/contacto" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Solicitar acceso
        </a>
      </div>
    </div>
  )
} 