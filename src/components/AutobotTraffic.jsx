/**
 * AutobotTraffic.jsx
 * --------------------------------------------------------------------------
 * Interactive Sci-Fi Vehicle Background Layer for EggieOS Hero Section.
 *
 * CLICK any vehicle → toggles CYBERTRON MODE on the entire portfolio:
 *   - Adds/removes .cybertron-mode class on <html>
 *   - Fires shockwave burst visual FX + HUD toast notification
 *   - Plays Web Audio mechanical transformation sound
 *
 * TUNING: Adjust CONFIG for speed, delay, opacity per vehicle.
 * REDUCED MOTION: Respects prefers-reduced-motion via CSS.
 * --------------------------------------------------------------------------
 */

import React, { useState, useCallback } from 'react';
import { cyberAudio } from '../utils/cyberAudio';

/* ─── Tuning Config ─────────────────────────────────────────────────────── */
const CONFIG = {
  vehicleA: { speed: '12s', delay: '0s', opacity: 0.7 },
  vehicleB: { speed: '16s', delay: '6s', opacity: 0.5 },
};

/**
 * VehicleA — Sleek Sci-Fi Interceptor (side-view profile)
 * Hardcoded duotone fills for guaranteed visibility on any background.
 */
export function VehicleA({ className = 'autobot-svg' }) {
  return (
    <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M12 56 L24 56 A14 14 0 0 1 52 56 L138 56 A14 14 0 0 1 166 56 L190 56 C196 56 198 52 196 46 L186 38 L162 36 L130 20 L70 20 L44 36 L14 42 C8 44 6 52 12 56Z"
        fill="#1e293b" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M72 23 L126 23 L152 35 L60 35Z" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="58" y1="42" x2="150" y2="42" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <line x1="98" y1="24" x2="94" y2="34" stroke="#22d3ee" strokeWidth="1.2" opacity="0.6" />
      <line x1="120" y1="36" x2="114" y2="54" stroke="#22d3ee" strokeWidth="1.2" opacity="0.6" />
      <path d="M16 38 L6 24 L22 24 L28 38" stroke="#94a3b8" strokeWidth="1.8" strokeLinejoin="round" fill="#1e293b" />
      <path d="M184 39 L196 45 L188 47Z" fill="#22d3ee" opacity="0.9" />
      <line x1="182" y1="46" x2="196" y2="46" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="6" y="44" width="4" height="6" rx="1" fill="#f59e0b" opacity="0.85" />
      <g transform="translate(152,56)">
        <circle r="12" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
        <circle r="5.5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.2" />
        <g className="autobot-wheel-rim">
          <line x1="-4.5" y1="0" x2="4.5" y2="0" stroke="#22d3ee" strokeWidth="1.4" />
          <line x1="0" y1="-4.5" x2="0" y2="4.5" stroke="#22d3ee" strokeWidth="1.4" />
        </g>
      </g>
      <g transform="translate(38,56)">
        <circle r="12" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
        <circle r="5.5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.2" />
        <g className="autobot-wheel-rim">
          <line x1="-4.5" y1="0" x2="4.5" y2="0" stroke="#22d3ee" strokeWidth="1.4" />
          <line x1="0" y1="-4.5" x2="0" y2="4.5" stroke="#22d3ee" strokeWidth="1.4" />
        </g>
      </g>
    </svg>
  );
}

/**
 * VehicleB — Heavy Sci-Fi Transport Rig (side-view profile)
 */
export function VehicleB({ className = 'autobot-svg' }) {
  return (
    <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="130" y="8" width="4" height="24" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.4" />
      <rect x="136" y="12" width="3" height="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.4" />
      <path
        d="M12 56 L20 56 A12 12 0 0 1 44 56 L50 56 A12 12 0 0 1 74 56 L142 56 A12 12 0 0 1 166 56 L190 56 C194 56 196 52 196 46 L194 34 L180 30 L158 20 L138 20 L138 32 L18 32 C12 32 10 36 10 44Z"
        fill="#1e293b" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M142 22 L156 22 L174 31 L142 31Z" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="22" y="36" width="46" height="15" fill="#0f172a" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      <rect x="74" y="36" width="56" height="15" fill="#0f172a" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      <line x1="184" y1="36" x2="194" y2="36" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="182" y1="42" x2="195" y2="42" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
      <g transform="translate(154,56)">
        <circle r="11" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
        <circle r="5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.2" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="#22d3ee" strokeWidth="1.3" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#22d3ee" strokeWidth="1.3" />
        </g>
      </g>
      <g transform="translate(62,56)">
        <circle r="11" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
        <circle r="5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.2" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="#22d3ee" strokeWidth="1.3" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#22d3ee" strokeWidth="1.3" />
        </g>
      </g>
      <g transform="translate(32,56)">
        <circle r="11" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
        <circle r="5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.2" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="#22d3ee" strokeWidth="1.3" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#22d3ee" strokeWidth="1.3" />
        </g>
      </g>
    </svg>
  );
}

/**
 * AutobotTraffic — Interactive background vehicle layer.
 * Click any vehicle → toggles CYBERTRON MODE on the entire portfolio.
 */
export default function AutobotTraffic() {
  const [transforming, setTransforming] = useState(false);
  const [shockwave, setShockwave] = useState(false);
  const [toast, setToast] = useState('');

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (transforming) return;

    // Check current state
    const html = document.documentElement;
    const isCurrentlyCybertron = html.classList.contains('cybertron-mode');

    setTransforming(true);
    setShockwave(true);

    // Play transformation sound FX
    try { cyberAudio.playTransformSound(); } catch (_) { /* silent fallback */ }

    // Toast message
    const msg = isCurrentlyCybertron
      ? ':: CYBERTRON MODE DEACTIVATED ::'
      : ':: CYBERTRON MODE ACTIVATED ::';
    setToast(msg);

    // Toggle Cybertron Mode class midway through animation
    setTimeout(() => {
      html.classList.toggle('cybertron-mode');
    }, 300);

    // Reset burst animation
    setTimeout(() => {
      setTransforming(false);
      setShockwave(false);
    }, 800);

    // Hide toast
    setTimeout(() => setToast(''), 3000);
  }, [transforming]);

  const { vehicleA, vehicleB } = CONFIG;

  return (
    <>
      {/* Shockwave overlay */}
      {shockwave && (
        <div className="cyber-shockwave-layer">
          <div className="cyber-shockwave-ring" />
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div className="cyber-hud-toast">{toast}</div>
      )}

      <div className="autobot-traffic-container">
        {/* Bottom lane — Interceptor, left→right */}
        <div className="autobot-lane autobot-lane-bottom">
          <div
            className={`autobot-vehicle-wrapper autobot-drive-ltr ${transforming ? 'autobot-burst' : ''}`}
            style={{
              '--drive-speed': vehicleA.speed,
              '--drive-delay': vehicleA.delay,
              '--vehicle-opacity': vehicleA.opacity,
            }}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            title="⚡ Click to activate Cybertron Mode"
          >
            <div className="autobot-click-hint">⚡ CYBERTRON MODE</div>
            <VehicleA />
          </div>
        </div>

        {/* Top lane — Heavy Rig, right→left */}
        <div className="autobot-lane autobot-lane-top">
          <div
            className={`autobot-vehicle-wrapper autobot-drive-rtl ${transforming ? 'autobot-burst' : ''}`}
            style={{
              '--drive-speed': vehicleB.speed,
              '--drive-delay': vehicleB.delay,
              '--vehicle-opacity': vehicleB.opacity,
            }}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            title="⚡ Click to activate Cybertron Mode"
          >
            <div className="autobot-click-hint">⚡ CYBERTRON MODE</div>
            <VehicleB />
          </div>
        </div>
      </div>
    </>
  );
}
