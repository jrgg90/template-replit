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
      <header className="relative px-6 py-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image 
              src="/exbordia-logo.png"
              alt="Exbordia Logo"
              width={140}
              height={40}
              className="object-contain"
            />
            <UserMenu />
          </div>
          
          <div className="mt-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 tracking-tight">
              Bienvenido a <span className="font-normal">Exbordia</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 font-light">
              Tu plataforma para vender en Estados Unidos
            </p>
          </div>
          
          {/* Main Progress Steps */}
          <div className="mt-12">
            <ProgressSteps />
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