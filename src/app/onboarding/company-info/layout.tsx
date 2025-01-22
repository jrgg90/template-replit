import { FC, ReactNode } from 'react'
import OnboardingLayout from '../components/OnboardingLayout'

interface CompanyInfoLayoutProps {
  children: ReactNode
}

const CompanyInfoLayout: FC<CompanyInfoLayoutProps> = ({ children }) => {
  return (
    <OnboardingLayout>
      {children}
    </OnboardingLayout>
  )
}

export default CompanyInfoLayout 