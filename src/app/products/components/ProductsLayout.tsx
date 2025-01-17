import { FC, ReactNode } from 'react'
import UserMenu from '@/app/onboarding/components/UserMenu'
import ProgressSteps from '@/app/onboarding/components/ProgressSteps'
import Image from 'next/image'

interface ProductsLayoutProps {
  children: ReactNode
}

const ProductsLayout: FC<ProductsLayoutProps> = ({ children }) => {
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

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-12"> {/* Wider container for products page */}
        {children}
      </main>
    </div>
  )
}

export default ProductsLayout 