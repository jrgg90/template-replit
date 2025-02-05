import Image from 'next/image'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Image 
      src="/exbordia-logo.png" 
      alt="Exbordia Logo" 
      width={150}
      height={40}
      style={{ width: 'auto', height: 'auto' }}
      priority
    />
  )
}