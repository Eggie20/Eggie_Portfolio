/**
 * AutobotTraffic.jsx
 * --------------------------------------------------------------------------
 * Interactive Cybertronian Transformer Background Layer for EggieOS.
 * 
 * FEATURES:
 * - High-DPI Vector Sci-Fi Vehicle Silhouettes (100% Original, zero IP infringement).
 * - Dedicated Dark Mode ("Stealth Cyber Interceptor") & Light Mode ("Titanium Cruiser").
 * - Interactive Click-to-Transform mechanism:
 *    • Plays synthesized Web Audio robotic transformation sound FX.
 *    • Emits an expanding radial Energon grid shockwave.
 *    • Displays a tactical HUD alert.
 *    • Morphs the portfolio theme between Dark & Light modes.
 * - Hardware-accelerated CSS keyframe suspension physics with rotating wheel dynamos.
 * --------------------------------------------------------------------------
 */

import React, { useState } from 'react';
import { cyberAudio } from '../utils/cyberAudio';

/**
 * VehicleA_Dark: Stealth Cyber Interceptor (Dark Theme)
 * Low-slung stealth armor with Cyan Energon optics, laser visor, and amber exhaust.
 */
export function VehicleA_Dark({ className = "autobot-svg" }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stealth Cyber Interceptor"
    >
      <defs>
        <linearGradient id="cyber-canopy-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12151c" />
          <stop offset="100%" stopColor="#1a1f29" />
        </linearGradient>
        <linearGradient id="energon-cyan-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7fd9c4" />
          <stop offset="100%" stopColor="#56c4aa" />
        </linearGradient>
      </defs>

      {/* Main Armored Stealth Chassis */}
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
        fill="#1a1f29"
        stroke="#f0f3f7"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Armored Cockpit Canopy */}
      <path
        d="M 72 23 
           L 126 23 
           L 152 35 
           L 60 35 Z"
        fill="url(#cyber-canopy-dark)"
        stroke="#f0f3f7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Energon Conduit Lines (Glowing Cyan) */}
      <line x1="60" y1="42" x2="148" y2="42" stroke="url(#energon-cyan-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="98" y1="24" x2="94" y2="34" stroke="#7fd9c4" strokeWidth="1.5" opacity="0.8" />
      <line x1="120" y1="36" x2="114" y2="54" stroke="#7fd9c4" strokeWidth="1.5" opacity="0.8" />

      {/* Aerodynamic Carbon Spoiler */}
      <path
        d="M 16 38 L 6 24 L 22 24 L 28 38"
        stroke="#f0f3f7"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#12151c"
      />

      {/* Front Energon Visor & Projecting Headlight */}
      <path d="M 184 39 L 196 45 L 188 47 Z" fill="#7fd9c4" />
      <line x1="182" y1="46" x2="196" y2="46" stroke="#7fd9c4" strokeWidth="2.5" strokeLinecap="round" />

      {/* Rear Amber Plasma Exhaust Vent */}
      <rect x="6" y="44" width="4" height="6" rx="1" fill="#e8b04b" stroke="#f0f3f7" strokeWidth="1" />

      {/* Front Wheel Dynamo (Center at x:152, y:56) */}
      <g transform="translate(152, 56)">
        <circle r="12" fill="#12151c" stroke="#f0f3f7" strokeWidth="2.5" />
        <circle r="6" fill="#1a1f29" stroke="#7fd9c4" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#7fd9c4" strokeWidth="1.8" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#7fd9c4" strokeWidth="1.8" />
        </g>
      </g>

      {/* Rear Wheel Dynamo (Center at x:38, y:56) */}
      <g transform="translate(38, 56)">
        <circle r="12" fill="#12151c" stroke="#f0f3f7" strokeWidth="2.5" />
        <circle r="6" fill="#1a1f29" stroke="#7fd9c4" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#7fd9c4" strokeWidth="1.8" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#7fd9c4" strokeWidth="1.8" />
        </g>
      </g>
    </svg>
  );
}

/**
 * VehicleA_Light: Titanium Command Cruiser (Light Theme)
 * Pure titanium white armor plating with razor-sharp dark outlines and Electric Emerald conduits.
 */
export function VehicleA_Light({ className = "autobot-svg" }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Titanium Command Cruiser"
    >
      <defs>
        <linearGradient id="cyber-canopy-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>

      {/* Titanium White Body Chassis */}
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
        fill="#ffffff"
        stroke="#111827"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Canopy Armor Plate */}
      <path
        d="M 72 23 
           L 126 23 
           L 152 35 
           L 60 35 Z"
        fill="url(#cyber-canopy-light)"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Electric Emerald Energy Conduits */}
      <line x1="60" y1="42" x2="148" y2="42" stroke="#0f8a70" strokeWidth="2" strokeLinecap="round" />
      <line x1="98" y1="24" x2="94" y2="34" stroke="#0f8a70" strokeWidth="1.5" opacity="0.9" />
      <line x1="120" y1="36" x2="114" y2="54" stroke="#0f8a70" strokeWidth="1.5" opacity="0.9" />

      {/* Rear Tactical Aerofoil */}
      <path
        d="M 16 38 L 6 24 L 22 24 L 28 38"
        stroke="#111827"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#ffffff"
      />

      {/* Emerald Visor Optics */}
      <path d="M 184 39 L 196 45 L 188 47 Z" fill="#0f8a70" />
      <line x1="182" y1="46" x2="196" y2="46" stroke="#0f8a70" strokeWidth="2.5" strokeLinecap="round" />

      {/* Tactical Orange Thruster Port */}
      <rect x="6" y="44" width="4" height="6" rx="1" fill="#d97706" stroke="#111827" strokeWidth="1" />

      {/* Front Wheel Assembly (Center at x:152, y:56) */}
      <g transform="translate(152, 56)">
        <circle r="12" fill="#ffffff" stroke="#111827" strokeWidth="2.5" />
        <circle r="6" fill="#f8f9fa" stroke="#0f8a70" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#0f8a70" strokeWidth="1.8" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#0f8a70" strokeWidth="1.8" />
        </g>
      </g>

      {/* Rear Wheel Assembly (Center at x:38, y:56) */}
      <g transform="translate(38, 56)">
        <circle r="12" fill="#ffffff" stroke="#111827" strokeWidth="2.5" />
        <circle r="6" fill="#f8f9fa" stroke="#0f8a70" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#0f8a70" strokeWidth="1.8" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#0f8a70" strokeWidth="1.8" />
        </g>
      </g>
    </svg>
  );
}

/**
 * VehicleB: Tactical Heavy Cyber Rig (Top Lane)
 */
export function VehicleB({ className = "autobot-svg" }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tactical Heavy Cyber Rig"
    >
      {/* Twin Vertical Cooling Exhaust Towers */}
      <rect x="130" y="8" width="4" height="24" fill="var(--autobot-secondary)" stroke="var(--autobot-primary)" strokeWidth="1.5" />
      <rect x="136" y="12" width="3" height="20" fill="var(--autobot-secondary)" stroke="var(--autobot-primary)" strokeWidth="1.5" />

      {/* Heavy Cabin & Armored Chassis */}
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
        fill="var(--autobot-secondary)"
        stroke="var(--autobot-primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Heavy Armored Visor */}
      <path
        d="M 142 22 L 156 22 L 174 31 L 142 31 Z"
        fill="var(--bg)"
        stroke="var(--autobot-primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Tactical Cargo Armor Blocks */}
      <rect x="22" y="36" width="46" height="15" fill="var(--bg)" stroke="var(--autobot-primary)" strokeWidth="1.2" opacity="0.6" />
      <rect x="74" y="36" width="56" height="15" fill="var(--bg)" stroke="var(--autobot-primary)" strokeWidth="1.2" opacity="0.6" />

      {/* Front Cyber Grille & Dual Visor Beams */}
      <line x1="184" y1="36" x2="194" y2="36" stroke="var(--autobot-accent)" strokeWidth="2" strokeLinecap="round" />
      <line x1="182" y1="42" x2="195" y2="42" stroke="var(--autobot-amber)" strokeWidth="2" strokeLinecap="round" />

      {/* Front Wheel (x:154, y:56) */}
      <g transform="translate(154, 56)">
        <circle r="11" fill="var(--bg)" stroke="var(--autobot-primary)" strokeWidth="2.5" />
        <circle r="5" fill="var(--autobot-secondary)" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        </g>
      </g>

      {/* Rear Axle 1 (x:62, y:56) */}
      <g transform="translate(62, 56)">
        <circle r="11" fill="var(--bg)" stroke="var(--autobot-primary)" strokeWidth="2.5" />
        <circle r="5" fill="var(--autobot-secondary)" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        </g>
      </g>

      {/* Rear Axle 2 (x:32, y:56) */}
      <g transform="translate(32, 56)">
        <circle r="11" fill="var(--bg)" stroke="var(--autobot-primary)" strokeWidth="2.5" />
        <circle r="5" fill="var(--autobot-secondary)" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        <g className="autobot-wheel-rim">
          <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--autobot-accent)" strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--autobot-accent)" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );
}

/**
 * Main AutobotTraffic Component with Interactive Transformation
 */
export default function AutobotTraffic({
  isLightTheme = false,
  onToggleTheme = null,
}) {
  const [isTransforming, setIsTransforming] = useState(false);
  const [showShockwave, setShowShockwave] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleVehicleClick = (e) => {
    e.stopPropagation();
    if (isTransforming) return;

    // 1. Trigger Transformation State & Sound FX
    setIsTransforming(true);
    setShowShockwave(true);
    cyberAudio.playTransformSound();

    const newModeName = !isLightTheme ? "SOLAR COMMAND (LIGHT)" : "CYBERTRON STEALTH (DARK)";
    setToastMessage(`:: OVERRIDE: TRANSFORMED TO ${newModeName} ::`);

    // 2. Expand Shockwave and Toggle Theme midway
    setTimeout(() => {
      if (onToggleTheme) {
        onToggleTheme();
      }
    }, 250);

    // 3. Reset transformation burst animation after completion
    setTimeout(() => {
      setIsTransforming(false);
      setShowShockwave(false);
    }, 750);

    // 4. Hide toast message
    setTimeout(() => {
      setToastMessage('');
    }, 2400);
  };

  const handleVehicleHover = () => {
    cyberAudio.playHoverHum();
  };

  return (
    <>
      {/* Radial Energon Shockwave Overlay */}
      {showShockwave && (
        <div className="cyber-shockwave-layer">
          <div className="cyber-shockwave-ring" />
        </div>
      )}

      {/* Tactical HUD Toast */}
      {toastMessage && (
        <div className="cyber-hud-toast">
          <span>⚡</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="autobot-traffic-container" aria-hidden="false">
        {/* Subtle Cyber Highway Laser Guide Line */}
        <div className="autobot-laser-road" />

        {/* Top Lane: Tactical Heavy Cyber Rig (RTL) */}
        <div className="autobot-lane autobot-lane-top">
          <div
            className="autobot-vehicle-wrapper autobot-drive-rtl"
            style={{
              '--drive-speed': '14s',
              '--drive-delay': '4s',
              '--vehicle-opacity': '0.5',
            }}
            onClick={handleVehicleClick}
            onMouseEnter={handleVehicleHover}
            title="Click to initiate Cybertron Transformation"
          >
            <div className="autobot-transform-hint">⚡ CLICK TO TRANSFORM</div>
            <VehicleB />
          </div>
        </div>

        {/* Bottom Lane: Theme-Adaptive Cyber Cruiser (LTR) */}
        <div className="autobot-lane autobot-lane-bottom">
          <div
            className={`autobot-vehicle-wrapper autobot-drive-ltr ${isTransforming ? 'transforming' : ''}`}
            style={{
              '--drive-speed': '11s',
              '--drive-delay': '0s',
              '--vehicle-opacity': '0.65',
            }}
            onClick={handleVehicleClick}
            onMouseEnter={handleVehicleHover}
            title="Click to initiate Cybertron Transformation"
          >
            <div className="autobot-transform-hint">⚡ CLICK TO TRANSFORM</div>
            <div className="autobot-headlight-beam" />
            <div className="autobot-speed-trail" />

            {/* Render Dark Mode or Light Mode Model */}
            {isLightTheme ? (
              <VehicleA_Light />
            ) : (
              <VehicleA_Dark />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
