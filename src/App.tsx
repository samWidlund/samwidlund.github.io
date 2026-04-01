import { Typewriter } from './components/Typewriter'

export default function App() {
    return (
      <div className="w-screen h-screen bg-[#0B0B0B] flex items-center">
        <div className="w-full flex justify-between items-center border-b-2 border-white p-5">
            <h1 className="text-2xl text-[#39FF14]">
              <Typewriter text="~/portfolio_" />
            </h1>
            <h1 className="text-2xl font-bold text-[#39FF14] animate-slide-in">samuel Widlund</h1>
        </div>
      </div>
    );
}