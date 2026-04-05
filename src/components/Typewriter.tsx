import { useState, useEffect, useRef } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  cursor?: boolean
  onComplete?: () => void
}

export function Typewriter({ text, speed = 100, className = '', cursor = true, onComplete }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const calledRef = useRef(false)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)
    calledRef.current = false
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        if (!calledRef.current) {
          calledRef.current = true
          onComplete?.()
        }
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed])

  return (
    <span className={className}>
      {displayed}
      {done && cursor && <span className="animate-blink">_</span>}
    </span>
  )
}