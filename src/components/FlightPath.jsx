const PLANE = "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";

export default function FlightPath() {
  return (
    <>
      {/* Laptop / desktop */}
      <svg className="flight-desktop" viewBox="0 0 1200 400" fill="none" aria-hidden="true">
        <path d="M -20 330 Q 600 -80 1220 260" stroke="currentColor" strokeOpacity="0.4"
          strokeWidth="3" strokeLinecap="round" strokeDasharray="1 16" />
        <g transform="translate(947 147) rotate(106) scale(1.8) translate(-12 -12)" fill="currentColor">
          <path d={PLANE} />
        </g>
      </svg>

      {/* Phones / tablets */}
      <svg className="flight-compact" viewBox="0 0 400 130" fill="none" aria-hidden="true">
        <path d="M -20 115 Q 200 -35 420 115" stroke="currentColor" strokeOpacity="0.4"
          strokeWidth="3" strokeLinecap="round" strokeDasharray="1 16" />
        <g transform="translate(323 63) rotate(111) scale(1.6) translate(-12 -12)" fill="currentColor">
          <path d={PLANE} />
        </g>
      </svg>
    </>
  );
}