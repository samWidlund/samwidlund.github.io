import { useState } from 'react'
import { Typewriter } from './components/Typewriter'
import { FileSystem } from './components/FileSystem'

export default function App() {
  const [currentPath] = useState('~')

  return (
    <div className="min-h-screen flex flex-col font-mono text-sm">
      <div className="h-dvh flex flex-col">
        <div className="absolute top-0 w-full flex p-2 justify-center text-white bg-[rgba(30,30,30,0.85)] backdrop-blur-sm shadow-[0_1px_0_rgba(100,100,100,0.3)]">
            ultra@runner: ~/coding/clothing/design
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full flex justify-between items-center p-5">
              <h1 className="text-base text-[#39FF14]">
                <Typewriter text="~/portfolio" />
              </h1>
              <h1 className="text-2xl font-bold text-[#39FF14] animate-slide-in">samuel Widlund</h1>
          </div>
        </div>
        <div className="p-5">
          <FileSystem currentPath={currentPath} />
        </div>
      </div>
    </div>
  );
}
