"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { User as FirebaseUser, signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle as firebaseSignInWithGoogle } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      // Si el usuario está autenticado y estamos en una ruta de login, redirigir
      if (user && pathname?.includes('/login')) {
        router.replace('/onboarding');
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  const signIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential.user) {
      router.replace('/onboarding');
    }
  };

  const signInWithGoogle = async () => {
    await firebaseSignInWithGoogle();
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signInWithGoogle,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
