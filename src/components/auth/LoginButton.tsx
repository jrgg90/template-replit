'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { LoginModal } from './LoginModal'
import { useAuth } from '@/lib/hooks/useAuth'

export function LoginButton() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const { user, signOut } = useAuth()

  if (user) {
    return (
      <Button 
        variant="ghost" 
        onClick={signOut}
        className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
      >
        Cerrar Sesión
      </Button>
    )
  }

  return (
    <>
      <Button 
        variant="ghost" 
        onClick={() => setShowLoginModal(true)}
        className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
      >
        Iniciar Sesión
      </Button>

      <LoginModal 
        open={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  )
} 