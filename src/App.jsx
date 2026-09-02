import React, { useState, useEffect, useRef } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import BootScreen from './components/BootScreen';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
export default function App() {
  const [booting, setBooting] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [isLightTheme]);

  // 1. Wheel Scroll Navigation with Cooldown Throttle
  useEffect(() => {
    if (booting) return;

    const handleWheel = (e) => {
      const isScrollable = e.target.closest('.slide-inner');

      if (isScrollable && isScrollable.scrollHeight > isScrollable.clientHeight) {
        const scrollTop = isScrollable.scrollTop;
        const scrollHeight = isScrollable.scrollHeight;
        const clientHeight = isScrollable.clientHeight;

        if (e.deltaY > 0) {
          // Scrolling down
          if (scrollTop + clientHeight < scrollHeight - 5) {
            return; // Let browser scroll natively
          }
        } else {
          // Scrolling up
          if (scrollTop > 5) {
            return; // Let browser scroll natively
          }
        }
      }

      e.preventDefault(); // prevent default page viewport scrolling

      if (isThrottled) return;
      if (Math.abs(e.deltaY) < 15) return;

      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), 900); // 900ms transition lock

      if (e.deltaY > 0) {
        setCurrentSlide((prev) => Math.min(prev + 1, 4));
      } else {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [booting, isThrottled]);

  // 2. Keyboard Navigation
  useEffect(() => {
    if (booting) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, 4));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(4);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [booting]);

  // 3. Touch/Swipe Navigation for Mobile
  useEffect(() => {
    if (booting) return;

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      // Allow scrolling inside elements that have overflow-y: auto/scroll
      const isScrollable = e.target.closest('.slide-inner');
      if (isScrollable && isScrollable.scrollHeight > isScrollable.clientHeight) {
        return; // Allow native touch scrolling
      }
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const isScrollable = e.target.closest('.slide-inner');
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      const swipeThreshold = 55;

      if (Math.abs(deltaY) < swipeThreshold) return;

      if (isScrollable && isScrollable.scrollHeight > isScrollable.clientHeight) {
        const scrollTop = isScrollable.scrollTop;
        const scrollHeight = isScrollable.scrollHeight;
        const clientHeight = isScrollable.clientHeight;

        if (deltaY > 0) {
          // Swiped Up (wants to scroll down)
          // Switch to next slide only if we are already at the very bottom
          if (scrollTop + clientHeight >= scrollHeight - 5) {
            setCurrentSlide((prev) => Math.min(prev + 1, 4));
          }
        } else {
          // Swiped Down (wants to scroll up)
          // Switch to previous slide only if we are already at the very top
          if (scrollTop <= 5) {
            setCurrentSlide((prev) => Math.max(prev - 1, 0));
          }
        }
        return;
      }

      if (deltaY > 0) {
        // Swiped Up -> Next Slide
        setCurrentSlide((prev) => Math.min(prev + 1, 4));
      } else {
        // Swiped Down -> Prev Slide
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [booting]);

  const handleBootComplete = () => {
    setBooting(false);
  };

  const getSlideCounterText = () => {
    return `0${currentSlide + 1} / 05`;
  };

  return (
    <>
      {/* Canvas background active at all times */}
      <InteractiveBackground isLightTheme={isLightTheme} />

      {/* BIOS boot sequence */}
      {booting && <BootScreen onComplete={handleBootComplete} />}

      {/* Theme Toggle Button */}
      {!booting && (
        <button
          id="theme-toggle-btn"
          className="mono"
          onClick={() => setIsLightTheme(!isLightTheme)}
          aria-label="Toggle dark/light theme"
        >
          <span className="theme-toggle-dot"></span>
          <span>MODE: {isLightTheme ? 'LIGHT' : 'DARK'}</span>
        </button>
      )}

      {/* Main slides layout */}
      {!booting && (
        <div className="app-container">
          <div
            className="slides-container"
            style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
          >
            <section className="slide" id="slide-hero">
              <Hero isLightTheme={isLightTheme} />
            </section>

            <section className="slide" id="slide-about">
              <About />
            </section>

            <section className="slide" id="slide-projects">
              <Projects currentSlide={currentSlide} />
            </section>

            <section className="slide" id="slide-skills">
              <Skills />
            </section>

            <section className="slide" id="slide-contact">
              <Contact />
            </section>
          </div>

          {/* Right Floating Dot Navigation */}
          <div className="dot-nav">
            {[0, 1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                id={`dot-nav-item-${idx}`}
                className={`dot-nav-item ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Bottom Center Slide Counter */}
          <div className="slide-counter">
            {getSlideCounterText()}
          </div>
        </div>
      )}
    </>
  );
}
