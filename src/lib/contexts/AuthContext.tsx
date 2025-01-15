"use client";

import React, { createContext, useEffect, useState } from "react";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle as firebaseSignInWithGoogle } from "../firebase/firebase";
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        // Get the token and set it in a cookie
        const token = await user.getIdToken();
        document.cookie = `firebase-token=${token}; path=/`;
        router.push('/dashboard');
      } else {
        // Clear the token cookie on sign out
        document.cookie = 'firebase-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
      }
    });

    return unsubscribe;
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      await firebaseSignInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
      // Navigation will be handled by onAuthStateChanged
    } catch (error: any) {
      console.error('Error signing in:', error);
      setError(error.message || 'Failed to sign in');
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};
