import { useState, useCallback } from 'react'
import { Typewriter } from './components/Typewriter'
import { FileSystem } from './components/FileSystem'
import { GitLog } from './components/GitLog'

export default function App() {
  const [currentPath] = useState('~')
  const [command, setCommand] = useState<string | null>(null)
  const [showArrow, setShowArrow] = useState(false)
  const [showCursor, setShowCursor] = useState(false)

  const handleComplete = useCallback(() => {
    setShowArrow(true)
    setTimeout(() => setShowCursor(true), 150)
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-mono text-sm">
      <div className="h-dvh flex flex-col">
        <div className="absolute top-0 w-full flex p-2 justify-center text-white bg-[rgba(30,30,30,0.85)] backdrop-blur-sm shadow-[0_1px_0_rgba(100,100,100,0.3)]">
            ultra@runner: ~/coding/clothing/design
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full flex flex-col justify-between p-5 gap-2">
              <h1 className="text-base text-[#39FF14]">
                <Typewriter 
                  text="~/portfolio" 
                  cursor={false} 
                  onComplete={handleComplete} 
                />
                <span className="text-[#39FF14] text-sm flex items-center gap-1 ml-1">
                  {showArrow && <span className="animate-fade-in">➜</span>}
                  {showCursor && <span className="animate-blink">_</span>}
                </span>
              </h1>
              {command && (
                <span className="text-[#39FF14] text-sm flex items-center gap-1">
                  <span>➜</span>
                  <span>experience log</span>
                </span>
              )}
              <h1 className="text-2xl font-bold text-[#39FF14] animate-slide-in self-end">samuel Widlund</h1>
          </div>
        </div>
        <div className="p-5">
          <FileSystem currentPath={currentPath} onCommand={setCommand} />
        </div>
      </div>
      <div className="p-5 pt-0">
        <GitLog />
      </div>
    </div>
  );
}
