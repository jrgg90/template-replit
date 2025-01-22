import { FC, ReactNode } from 'react'
import OnboardingLayout from '../components/OnboardingLayout'

interface ReviewLayoutProps {
  children: ReactNode
}

const ReviewLayout: FC<ReviewLayoutProps> = ({ children }) => {
  return (
    <OnboardingLayout>
      {children}
    </OnboardingLayout>
  )
}

export default ReviewLayout 