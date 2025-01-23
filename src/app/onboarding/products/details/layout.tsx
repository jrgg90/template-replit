import { FC, ReactNode } from 'react'
import OnboardingLayout from '../../components/OnboardingLayout'

interface ProductDetailsLayoutProps {
  children: ReactNode
}

const ProductDetailsLayout: FC<ProductDetailsLayoutProps> = ({ children }) => {
  return (
    <OnboardingLayout>
      {children}
    </OnboardingLayout>
  )
}

export default ProductDetailsLayout 