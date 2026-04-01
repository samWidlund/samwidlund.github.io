import { Typewriter } from './components/Typewriter'

export default function App() {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex flex-col  justify-center">
        <div className="absolute top-0 w-full flex p-2 justify-center text-white">coding/clothing/endurance
        </div>
        <div className="w-full flex justify-between items-center p-5">
            <h1 className="text-2xl text-[#39FF14]">
              <Typewriter text="~/portfolio" />
            </h1>
            <h1 className="text-2xl font-bold text-[#39FF14] animate-slide-in">samuel Widlund</h1>
        </div>
      </div>
    );
}
