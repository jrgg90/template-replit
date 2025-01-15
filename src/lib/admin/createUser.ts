import { auth } from "@/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export async function createAuthorizedUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
} 