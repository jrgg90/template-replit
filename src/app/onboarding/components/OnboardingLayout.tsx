import { FC, ReactNode } from 'react'
import UserMenu from './UserMenu'
import ProgressSteps from './ProgressSteps'

interface OnboardingLayoutProps {
  children: ReactNode
}

const OnboardingLayout: FC<OnboardingLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative px-6 py-4">
        <UserMenu />
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Bienvenido a Exbordia
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Tu plataforma para vender en Estados Unidos
          </p>
        </div>
        
        {/* Main Progress Steps */}
        <div className="mt-8">
          <ProgressSteps />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}

export default OnboardingLayout 