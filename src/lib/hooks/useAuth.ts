"use client"

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  const router = useRouter();

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const redirectToApp = () => {
    console.log('Redirecting to onboarding...');
    router.push('/onboarding');
  };

  return {
    ...context,
    redirectToApp,
  };
};