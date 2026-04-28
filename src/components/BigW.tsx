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
        <svg
          width="100%"
          height="100%"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front W */}
          <g style={{ backfaceVisibility: 'hidden' }}>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fontSize="45vw"
              fontWeight="black"
              fontFamily="ui-monospace, monospace"
              fill="rgba(255, 118, 13, 0.08)"
              stroke="rgba(255, 118, 13, 0.03)"
              strokeWidth={10}
            >
              W
            </text>
          </g>
          {/* Back W (180deg Y rotation) */}
          <g style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fontSize="45vw"
              fontWeight="black"
              fontFamily="ui-monospace, monospace"
              fill="rgba(255, 118, 13, 0.08)"
              stroke="rgba(255, 118, 13, 0.03)"
              strokeWidth={10}
            >
              W
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}