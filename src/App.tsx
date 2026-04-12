import EvilEye from './components/EvilEye'

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <EvilEye
        eyeColor="#FF6F37"
        intensity={1.5}
        pupilSize={0.6}
        irisWidth={0.25}
        glowIntensity={0.35}
        scale={0.8}
        noiseScale={1}
        pupilFollow={1}
        flameSpeed={1}
        backgroundColor="#060010"
      />

      <div className="pointer-events-none absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center z-10 animate-fade-in">
        <p className="font-serif italic text-[clamp(0.7rem,1.8vw,1.1rem)] text-amber-600 tracking-wider leading-relaxed animate-text-burn">
          Ash nazg durbatuluk, ash nazg gimbatul,<br />
          ash nazg thrakatuluk, agh burzum-ishi krimpatul.
        </p>
        <p className="font-serif italic text-[clamp(0.6rem,1.4vw,0.85rem)] text-amber-800/60 tracking-wide leading-relaxed mt-2">
          Ein Ring, sie zu knechten, sie alle zu finden,<br />
          ins Dunkel zu treiben und ewig zu binden.
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-[2%] left-1/2 -translate-x-1/2 text-amber-900/40 font-mono text-[0.65rem] tracking-widest uppercase z-10 animate-fade-in-late">
        Built by Claude in 2 minutes &middot; React Bits Evil Eye
      </div>
    </div>
  )
}
