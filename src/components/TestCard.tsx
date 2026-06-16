import { useEffect, useState, useCallback } from 'react'
import tvimage from '../assets/tvimage.jpg'

interface TestCardProps {
  onDismiss: () => void
}

export default function TestCard({ onDismiss }: TestCardProps) {
  const [exiting, setExiting] = useState(false)

  const handleDismiss = useCallback(() => {
    if (exiting) return
    setExiting(true)
    setTimeout(() => onDismiss(), 700)
  }, [exiting, onDismiss])

  useEffect(() => {
    const timer = setTimeout(() => handleDismiss(), 2000)

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        handleDismiss()
      }
    }
    const handleClick = () => handleDismiss()

    window.addEventListener('keydown', handleKey)
    window.addEventListener('click', handleClick)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('click', handleClick)
    }
  }, [handleDismiss])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        exiting ? 'animate-crt-off' : 'animate-fade-in'
      }`}
      style={{ transformOrigin: 'center center' }}
    >
      <div className="absolute inset-0 bg-black" />
      <img
        src={tvimage}
        alt=""
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          backgroundSize: '100% 4px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none animate-crt-flicker"
        style={{
          background: 'rgba(255,255,255,0.015)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
        <span className="text-white/70 font-mono text-xs tracking-[0.3em]">
          SIGNAL DETECTED
        </span>
        <span className="text-white/40 font-mono text-xs mx-2">•</span>
        <span className="text-white/70 font-mono text-xs tracking-[0.2em]">
          PLEASE STAND BY
        </span>
        <span className="text-white/70 font-mono text-xs animate-blink ml-0.5">
          _
        </span>
      </div>
    </div>
  )
}
