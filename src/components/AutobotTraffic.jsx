/**
 * AutobotTraffic.jsx
 * --------------------------------------------------------------------------
 * Ambient background layer: 1-2 original "autobot-inspired" SVG vehicles
 * that drive horizontally across the hero section on infinite loop.
 *
 * REDUCED MOTION: Respects `prefers-reduced-motion: reduce` via CSS —
 *   vehicles will park statically instead of animating.
 *
 * TUNING: Adjust the CONFIG object below to change lane positions,
 *   speeds, delays, opacity, and vehicle scale without touching animation logic.
 *
 * PLACEMENT: Drop <AutobotTraffic /> into the hero section behind content.
 *   The layer is pointer-events: none, z-index: 1, and will not block clicks.
 *
 * DESIGN: All vehicle silhouettes are 100% original — no copyrighted
 *   character names, logos, or exact likenesses.
 * --------------------------------------------------------------------------
 */

import React from 'react';

/* ─── Tuning Config ─────────────────────────────────────────────────────── */
const CONFIG = {
  vehicleA: {
    speed: '11s',       // crossing duration
    delay: '0s',        // initial start delay
    opacity: 0.55,      // ambient opacity (0-1)
    lane: 'bottom',     // 'top' | 'bottom'
    direction: 'ltr',   // 'ltr' | 'rtl'
  },
  vehicleB: {
    speed: '14s',
    delay: '5s',
    opacity: 0.4,
    lane: 'top',
    direction: 'rtl',
  },
};

/**
 * VehicleA — Sleek Sci-Fi Interceptor (profile / side-view)
 * Low-slung sport car with robotic panel lines, faint visor grille,
 * and a glowing accent stripe. Uses CSS custom props for theme colors.
 */
export function VehicleA({ className = 'autobot-svg' }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main chassis body */}
      <path
        d="M 12 56
           L 24 56
           A 14 14 0 0 1 52 56
           L 138 56
           A 14 14 0 0 1 166 56
           L 190 56
           C 196 56 198 52 196 46
           L 186 38
           L 162 36
           L 130 20
           L 70 20
           L 44 36
           L 14 42
           C 8 44 6 52 12 56 Z"
        fill="var(--autobot-primary)"
        stroke="var(--autobot-stroke)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Cockpit canopy glass */}
      <path
        d="M 72 23 L 126 23 L 152 35 L 60 35 Z"
        fill="var(--autobot-canopy)"
        stroke="var(--autobot-stroke)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Panel line detailing */}
      <line x1="60" y1="42" x2="148" y2="42" stroke="var(--autobot-accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <line x1="98" y1="24" x2="94" y2="34" stroke="var(--autobot-accent)" strokeWidth="1.2" opacity="0.5" />
      <line x1="120" y1="36" x2="114" y2="54" stroke="var(--autobot-accent)" strokeWidth="1.2" opacity="0.5" />

      {/* Rear spoiler / aerofoil */}
      <path
        d="M 16 38 L 6 24 L 22 24 L 28 38"
        stroke="var(--autobot-stroke)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="var(--autobot-primary)"
      />

      {/* Front visor/grille hint — faint robotic face */}
      <path d="M 184 39 L 196 45 L 188 47 Z" fill="var(--autobot-accent)" opacity="0.85" />
      <line x1="182" y1="46" x2="196" y2="46" stroke="var(--autobot-accent)" strokeWidth="2.2" strokeLinecap="round" />

      {/* Rear exhaust vent */}
      <rect x="6" y="44" width="4" height="6" rx="1" fill="var(--autobot-amber)" opacity="0.8" />

      {/* Front wheel */}
      <g transform="translate(152, 56)">
        <circle r="12" fill="var(--autobot-wheel)" stroke="var(--autobot-stroke)" strokeWidth="2.2" />
        <circle r="5.5" fill="var(--autobot-primary)" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        <g className="autobot-wheel-rim">
          <line x1="-4.5" y1="0" x2="4.5" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.5" />
          <line x1="0" y1="-4.5" x2="0" y2="4.5" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        </g>
      </g>

      {/* Rear wheel */}
      <g transform="translate(38, 56)">
        <circle r="12" fill="var(--autobot-wheel)" stroke="var(--autobot-stroke)" strokeWidth="2.2" />
        <circle r="5.5" fill="var(--autobot-primary)" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        <g className="autobot-wheel-rim">
          <line x1="-4.5" y1="0" x2="4.5" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.5" />
          <line x1="0" y1="-4.5" x2="0" y2="4.5" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );
}

/**
 * VehicleB — Heavy Sci-Fi Transport Rig (profile / side-view)
 * Armored cab-over truck with twin exhaust stacks, cargo section,
 * triple-axle wheels, and a visor slit on the grille.
 */
export function VehicleB({ className = 'autobot-svg' }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Twin vertical exhaust stacks */}
      <rect x="130" y="8" width="4" height="24" fill="var(--autobot-primary)" stroke="var(--autobot-stroke)" strokeWidth="1.4" />
      <rect x="136" y="12" width="3" height="20" fill="var(--autobot-primary)" stroke="var(--autobot-stroke)" strokeWidth="1.4" />

      {/* Main heavy chassis */}
      <path
        d="M 12 56
           L 20 56
           A 12 12 0 0 1 44 56
           L 50 56
           A 12 12 0 0 1 74 56
           L 142 56
           A 12 12 0 0 1 166 56
           L 190 56
           C 194 56 196 52 196 46
           L 194 34
           L 180 30
           L 158 20
           L 138 20
           L 138 32
           L 18 32
           C 12 32 10 36 10 44 Z"
        fill="var(--autobot-primary)"
        stroke="var(--autobot-stroke)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Cab windshield / visor slit */}
      <path
        d="M 142 22 L 156 22 L 174 31 L 142 31 Z"
        fill="var(--autobot-canopy)"
        stroke="var(--autobot-stroke)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Cargo panel lines */}
      <rect x="22" y="36" width="46" height="15" fill="var(--autobot-canopy)" stroke="var(--autobot-stroke)" strokeWidth="1" opacity="0.5" />
      <rect x="74" y="36" width="56" height="15" fill="var(--autobot-canopy)" stroke="var(--autobot-stroke)" strokeWidth="1" opacity="0.5" />

      {/* Front grille beams */}
      <line x1="184" y1="36" x2="194" y2="36" stroke="var(--autobot-accent)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="182" y1="42" x2="195" y2="42" stroke="var(--autobot-amber)" strokeWidth="1.8" strokeLinecap="round" />

      {/* Front wheel */}
      <g transform="translate(154, 56)">
        <circle r="11" fill="var(--autobot-wheel)" stroke="var(--autobot-stroke)" strokeWidth="2.2" />
        <circle r="5" fill="var(--autobot-primary)" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.3" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        </g>
      </g>

      {/* Rear axle 1 */}
      <g transform="translate(62, 56)">
        <circle r="11" fill="var(--autobot-wheel)" stroke="var(--autobot-stroke)" strokeWidth="2.2" />
        <circle r="5" fill="var(--autobot-primary)" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.3" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        </g>
      </g>

      {/* Rear axle 2 */}
      <g transform="translate(32, 56)">
        <circle r="11" fill="var(--autobot-wheel)" stroke="var(--autobot-stroke)" strokeWidth="2.2" />
        <circle r="5" fill="var(--autobot-primary)" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.3" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--autobot-accent)" strokeWidth="1.3" />
        </g>
      </g>
    </svg>
  );
}

/**
 * AutobotTraffic — Ambient background driving layer
 * Renders two vehicles in separate lanes with staggered speed/delay.
 * Purely decorative, pointer-events: none, does not block interaction.
 */
export default function AutobotTraffic() {
  const { vehicleA, vehicleB } = CONFIG;

  return (
    <div className="autobot-traffic-container" aria-hidden="true">
      {/* Speed trail glow (behind bottom-lane vehicle) */}
      <div className="autobot-lane autobot-lane-bottom">
        <div
          className="autobot-vehicle-wrapper autobot-drive-ltr"
          style={{
            '--drive-speed': vehicleA.speed,
            '--drive-delay': vehicleA.delay,
            '--vehicle-opacity': vehicleA.opacity,
          }}
        >
          <div className="autobot-speed-trail" />
          <VehicleA />
        </div>
      </div>

      {/* Top lane — heavy rig, opposite direction */}
      <div className="autobot-lane autobot-lane-top">
        <div
          className="autobot-vehicle-wrapper autobot-drive-rtl"
          style={{
            '--drive-speed': vehicleB.speed,
            '--drive-delay': vehicleB.delay,
            '--vehicle-opacity': vehicleB.opacity,
          }}
        >
          <VehicleB />
        </div>
      </div>
    </div>
  );
}
