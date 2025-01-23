'use client'

import { CompanyQuestionnaire } from './components/CompanyQuestionnaire'

export default function CompanyInfoPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <div className="flex justify-between items-baseline">
          <div className="text-left">
            <h2 className="text-4xl tracking-tight">
              <span className="font-light text-gray-600">Proporciona información básica</span>
              <span className="font-medium text-[#131F42]"> de tu empresa</span>
            </h2>
            <p className="mt-3 text-base text-gray-600 font-light">
              La necesitamos para comenzar tu proceso de pre-exportación
            </p>
          </div>
        </div>
      </div>

      {/* Questionnaire Section */}
      <CompanyQuestionnaire />
    </div>
  )
} 