export function BigW() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" style={{ perspective: '1000px' }}>
      <div
        className="animate-spin-y relative"
        style={{
          transformStyle: 'preserve-3d',
          width: '45vw',
          height: '45vw',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center" style={{ backfaceVisibility: 'hidden' as const }}>
          <span className="text-[45vw] leading-none font-black" style={{ color: 'rgba(255, 118, 13, 0.08)', fontFamily: 'ui-monospace, monospace' }}>
            W
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center" style={{ backfaceVisibility: 'hidden' as const, transform: 'rotateY(180deg)' }}>
          <span className="text-[45vw] leading-none font-black" style={{ color: 'rgba(255, 118, 13, 0.08)', fontFamily: 'ui-monospace, monospace' }}>
            W
          </span>
        </div>
      </div>
    </div>
  )
}