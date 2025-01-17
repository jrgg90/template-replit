import { FC, ReactNode } from 'react'
import UserMenu from './UserMenu'
import ProgressSteps from './ProgressSteps'
import Image from 'next/image'

interface OnboardingLayoutProps {
  children: ReactNode
}

const OnboardingLayout: FC<OnboardingLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header Section */}
      <header className="relative px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Top Bar with Logo and User Menu */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <Image 
              src="/exbordia-logo.png"
              alt="Exbordia Logo"
              width={120}
              height={32}
              className="object-contain"
            />
            <UserMenu />
          </div>
          
          {/* Welcome Text and Progress Steps in same row */}
          <div className="flex items-center justify-between">
            {/* Welcome Text - Left Side */}
            <div className="text-left">
              <h1 className="text-2xl font-light text-gray-900">
                Bienvenido a <span className="font-medium">Exbordia</span>
              </h1>
              <p className="mt-1 text-sm text-gray-500 font-light">
                Tu plataforma para vender en Estados Unidos
              </p>
            </div>
            
            {/* Progress Steps - Right Side */}
            <div className="w-[400px]">
              <ProgressSteps />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  )
}

export default OnboardingLayout 