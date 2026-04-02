import { Typewriter } from './components/Typewriter'

export default function App() {
    return (
      <div className="min-h-screen flex flex-col justify-center font-mono text-base">
        <div className="absolute top-0 w-full flex p-2 justify-center text-white bg-[rgba(30,30,30,0.85)] backdrop-blur-sm shadow-[0_1px_0_rgba(100,100,100,0.3)]">
          ultra@runner: ~/coding/clothing/design
        </div>
        <div className="w-full flex justify-between items-center p-5">
            <h1 className="text-xl text-[#39FF14]">
              <Typewriter text="~/portfolio" />
            </h1>
            <h1 className="text-2xl font-bold text-[#39FF14] animate-slide-in">samuel Widlund</h1>
        </div>
      </div>
    );
}
