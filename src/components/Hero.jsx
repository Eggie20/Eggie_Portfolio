import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';

const TYPEWRITER_PHRASES = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "Machine Learning Systems Builder"
];

const BUILDING_PROJECTS = [
  "Magic AI Studio",
  "This very website"
];

export default function Hero({ isLightTheme }) {
  // Typewriter State
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Project Ticker State
  const [tickerIdx, setTickerIdx] = useState(0);

  // Uptime Counter State
  const [uptime, setUptime] = useState({
    days: 847,
    hours: 14,
    minutes: 32,
    seconds: 18
  });
  const [isGlitching, setIsGlitching] = useState(false);

  // 1. Typewriter Effect
  useEffect(() => {
    let timer;
    const currentPhrase = TYPEWRITER_PHRASES[phraseIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(50); // Delete faster
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        setTypingSpeed(100); // Standard type speed
      }, typingSpeed);
    }

    // Handle transition points
    if (!isDeleting && typedText === currentPhrase) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx, typingSpeed]);

  // 2. Project Ticker (cycles every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIdx((prev) => (prev + 1) % BUILDING_PROJECTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3. Live Uptime Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => {
        let s = prev.seconds + 1;
        let m = prev.minutes;
        let h = prev.hours;
        let d = prev.days;

        if (s >= 60) {
          s = 0;
          m += 1;
        }
        if (m >= 60) {
          m = 0;
          h += 1;
        }
        if (h >= 24) {
          h = 0;
          d += 1;
        }

        return { days: d, hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 4. Random Uptime Glitch (every 45-90 seconds)
  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);

      // Keep it glitched for a tiny frame (120ms)
      setTimeout(() => {
        setIsGlitching(false);
        // Queue next glitch
        queueNextGlitch();
      }, 120);
    };

    const queueNextGlitch = () => {
      const delay = (45 + Math.random() * 45) * 1000; // 45 to 90 seconds
      glitchTimeout = setTimeout(triggerGlitch, delay);
    };

    let glitchTimeout = setTimeout(triggerGlitch, 60000); // First glitch after 60s

    return () => clearTimeout(glitchTimeout);
  }, []);

  const formatUptime = () => {
    if (isGlitching) {
      return "00:00:00";
    }
    return `${uptime.days}d, ${uptime.hours}h, ${uptime.minutes}m, ${uptime.seconds}s`;
  };

  return (
    <div className="slide-inner">
      <div className="slide-header-brand">eggie.dev / v1.0</div>

      <div className="hero-layout">
        <div className="hero-main">
          <div className="hero-text">
            <h1 className="hero-name">Arnel Mandas</h1>
            <div className="hero-typewriter">
              <span className="mono">{typedText}</span>
              <span className="blinking-cursor"></span>
            </div>
            <div className="hero-location">Based in Agusan del Norte, Philippines</div>
          </div>
          <Avatar isLightTheme={isLightTheme} />
        </div>

        <div className="hero-footer-grid">
          <div className="hero-footer-col">
            <div className="label">Currently building</div>
            <div style={{ fontSize: '13px', marginTop: '4px' }}>
              → {BUILDING_PROJECTS[tickerIdx]}
            </div>
          </div>
          <div className="hero-footer-col right">
            <div className="label">System Uptime</div>
            <div style={{ fontSize: '13px', marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>
              Uptime: {formatUptime()}
            </div>
          </div>
        </div>
      </div>

      <div className="open-to-work">
        <span className="blinking-dot"></span>
        <span>OPEN TO WORK</span>
      </div>
    </div>
  );
}
