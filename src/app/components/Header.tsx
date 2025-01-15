import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg" // You'll need to add this logo file
                alt="Zimi"
                width={80}
                height={32}
                priority
              />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              Contact Us
            </button>
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50">
              Log In
            </button>
            <button className="px-6 py-2 text-white bg-[#2B2F4B] rounded-full hover:bg-[#373b5c]">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 