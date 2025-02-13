import { FC, ReactNode } from 'react'
import { UserMenu } from "@/components/app/UserMenu"
import ProgressSteps from './ProgressSteps'
import { OnboardingNav } from './OnboardingNav'
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
          <div className="flex items-center justify-between">
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
          
          {/* Progress Steps */}
          <div className="mt-6">
            <ProgressSteps />
          </div>
        </div>
      </header>

      {/* Main Content - Modificado para incluir nav */}
      <div className="min-h-screen flex">
        <OnboardingNav />
        <div className="flex-1 pl-[60px]">
          <main className="max-w-3xl mx-auto px-6 py-12">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default OnboardingLayout 