import { useState, type ReactNode } from 'react'
import TestCard from './TestCard'

interface SplashGateProps {
  children: ReactNode
}

export default function SplashGate({ children }: SplashGateProps) {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('splashShown'),
  )

  const handleDismiss = () => {
    sessionStorage.setItem('splashShown', 'true')
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <TestCard onDismiss={handleDismiss} />}
      {children}
    </>
  )
}
