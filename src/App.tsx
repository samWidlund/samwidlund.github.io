import { useState, useCallback, useRef } from 'react';
import { Typewriter } from './components/Typewriter';
import { FileSystem } from './components/FileSystem';
import { GitLog } from './components/GitLog';
import { Projects } from './components/Projects';
import { About } from './components/About';

export default function App() {
    const [currentPath] = useState('~');
    const [command, setCommand] = useState<{
        text: string;
        speed?: number;
    } | null>(null);
    const [showArrow, setShowArrow] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const gitLogRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const handleResume = useCallback((textLength: number, speed: number) => {
        const delay = textLength * speed + 380;
        setTimeout(() => {
            gitLogRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, delay);
    }, []);

    const handleProjects = useCallback((textLength: number, speed: number) => {
        const delay = textLength * speed + 380;
        setTimeout(() => {
            projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, delay);
    }, []);

    const handleAbout = useCallback((textLength: number, speed: number) => {
        const delay = textLength * speed + 380;
        setTimeout(() => {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, delay);
    }, []);

    const handleComplete = useCallback(() => {
        setShowArrow(true);
        setTimeout(() => setShowCursor(true), 150);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-mono text-sm">
            <div className="h-dvh flex flex-col">
                <div className="sticky top-0 w-full flex p-2 justify-center text-white bg-[rgba(30,30,30,0.85)] backdrop-blur-sm shadow-[0_1px_0_rgba(100,100,100,0.3)]">
                    ultra@runner: ~/coding/clothing/design
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="w-full h-42 flex flex-col justify-between p-5 gap-2">
                        <h1 className="text-base text-[#39FF14]">
                            <Typewriter
                                text="~/portfolio"
                                cursor={false}
                                onComplete={handleComplete}
                            />
                        </h1>
                        <span className="text-base text-[#39FF14] flex items-center gap-1">
                            {showArrow && (
                                <span className="animate-fade-in">$ </span>
                            )}
                            {command && (
                                <span className="text-white">
                                    <Typewriter
                                        text={command.text}
                                        speed={command.speed}
                                        cursor={false}
                                        onComplete={handleComplete}
                                    />
                                </span>
                            )}
                            {showCursor && (
                                <span className="text-white animate-blink">
                                    _
                                </span>
                            )}
                        </span>
                        <h1 className="text-2xl font-bold text-[#39FF14] animate-slide-in self-end">
                            samuel Widlund
                        </h1>
                    </div>
                </div>
                <div className="p-5">
                    <FileSystem
                        currentPath={currentPath}
                        onCommand={cmd => {
                            setCommand(cmd);
                            setShowCursor(true);
                        }}
                        onResume={handleResume}
                        onProjects={handleProjects}
                        onAbout={handleAbout}
                    />
                </div>
            </div>
            <div className="pt-10 px-5" ref={projectsRef}>
                <Projects />
            </div>
            <div className="pt-10 px-5" ref={aboutRef}>
                <About />
            </div>
            <div className="pt-10 px-5" ref={gitLogRef}>
                <GitLog />
            </div>
        </div>
    );
}
