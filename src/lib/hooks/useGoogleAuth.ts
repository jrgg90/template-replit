"use client"

import { auth, db } from "@/lib/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useState } from "react"

export function useGoogleAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Verificar si el usuario existe en nuestra base de datos
      const userRef = doc(db, "users", user.email!)
      const userDoc = await getDoc(userRef)

      if (!userDoc.exists()) {
        // Si el usuario no existe en nuestra base de datos, cerrar sesión
        await auth.signOut()
        setError("No tienes acceso autorizado. Por favor, solicita acceso a través del formulario de contacto.")
        return false
      }

      return true
    } catch (err) {
      console.error("Error during Google sign in:", err)
      setError("Hubo un error al iniciar sesión. Por favor, intenta de nuevo.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return { signInWithGoogle, isLoading, error }
} 