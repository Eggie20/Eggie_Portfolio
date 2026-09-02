import React, { useState, useEffect } from 'react';

const BOOT_LINES = [
  { id: 1, text: "BIOS v2.4.1 — EggieOS booting...", delay: 400 },
  { id: 2, text: "Loading personality modules............ ", append: "OK", delay: 500 },
  { id: 3, text: "Checking caffeine levels............... ", append: "[WARNING: LOW]", flash: true, delay: 600 },
  { id: 4, text: "Mounting /projects filesystem.......... ", append: "DONE", delay: 450 },
  { id: 5, text: "Initializing humor subroutine.......... ", append: "[GOOFY MODE: ON]", delay: 550 },
  { id: 6, text: "Running self-deprecation check......... ", append: "SKIPPED", strikethrough: true, delay: 500 },
  { id: 7, text: "Loading skills.json.................... ", append: "OK", delay: 400 },
  { id: 8, text: "All systems nominal. Welcome, employer.", delay: 800 }
];

export default function BootScreen({ onComplete }) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Check if already booted in this session
  useEffect(() => {
    const hasBooted = sessionStorage.getItem('eggieos_booted');
    if (hasBooted) {
      onComplete();
    }
  }, [onComplete]);

  // Main booting sequencer
  useEffect(() => {
    if (currentIndex >= BOOT_LINES.length) {
      // Done printing. Wait a bit, then fade out.
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
        const completeTimeout = setTimeout(() => {
          sessionStorage.setItem('eggieos_booted', 'true');
          onComplete();
        }, 800); // match CSS transition duration
        return () => clearTimeout(completeTimeout);
      }, 1500); // Pause on final state with blinking cursor

      return () => clearTimeout(fadeTimeout);
    }

    const currentLine = BOOT_LINES[currentIndex];
    const timer = setTimeout(() => {
      setRenderedLines((prev) => [...prev, currentLine]);
      setCurrentIndex((prev) => prev + 1);
    }, currentLine.delay);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  // Blinking cursor toggle
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      sessionStorage.setItem('eggieos_booted', 'true');
      onComplete();
    }, 350);
  };

  // Keyboard shortcut listener for Escape, Enter, Space
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="boot-screen" 
      style={{ 
        opacity: isFading ? 0 : 1,
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      <button 
        id="boot-skip-btn" 
        className="boot-skip-btn" 
        onClick={handleSkip}
        aria-label="Skip boot sequence intro"
      >
        <span>[ SKIP INTRO ↵ ]</span>
      </button>

      <div className="boot-content">
        {renderedLines.map((line, idx) => (
          <div key={line.id} className="boot-line">
            <span>{line.text}</span>
            {line.append && (
              <span 
                className={`${line.flash ? 'flash-warning' : ''} ${line.strikethrough ? 'strikethrough' : ''}`}
              >
                {line.append}
              </span>
            )}
          </div>
        ))}
        {/* Blinking cursor at the end of the current print line */}
        <span 
          style={{ 
            display: 'inline-block',
            width: '8px', 
            height: '15px', 
            backgroundColor: '#ffffff',
            marginLeft: '4px',
            opacity: showCursor ? 1 : 0,
            verticalAlign: 'middle'
          }}
        />
      </div>
    </div>
  );
}
