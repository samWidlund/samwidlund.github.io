import { useState, useEffect } from 'react'

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
  const [prevKey, setPrevKey] = useState(`${text}|${speed}`)

  if (prevKey !== `${text}|${speed}`) {
    setPrevKey(`${text}|${speed}`)
    setDisplayed('')
    setDone(false)
  }

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        onComplete?.()
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