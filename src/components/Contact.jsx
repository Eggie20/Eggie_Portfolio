import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [runawayCount, setRunawayCount] = useState(0);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [isRunawayActive, setIsRunawayActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 1024px)').matches || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("arnelcmandas15@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleButtonHover = () => {
    if (isMobile || runawayCount >= 3) return;

    // Pick random position within viewport boundaries
    const padding = 100;
    const newX = padding + Math.random() * (window.innerWidth - 160 - padding * 2);
    const newY = padding + Math.random() * (window.innerHeight - 48 - padding * 2);

    setIsRunawayActive(true);
    setBtnPos({ x: newX, y: newY });
    setRunawayCount((prev) => prev + 1);
  };

  const handleButtonClick = () => {
    // If mobile or runaway is done, let it work
    if (isMobile || runawayCount >= 3) {
      window.location.href = "mailto:arnelcmandas15@gmail.com";
    }
  };

  // Get style for the runway button
  const getButtonClass = () => {
    if (isMobile) return "runaway-btn";
    return isRunawayActive ? "runaway-btn runaway" : "runaway-btn";
  };

  const getButtonStyle = () => {
    if (isMobile || !isRunawayActive) return {};
    return {
      left: `${btnPos.x}px`,
      top: `${btnPos.y}px`
    };
  };

  return (
    <div className="slide-inner">
      <div className="slide-header-brand">eggie.dev / v1.0</div>

      <div className="contact-layout">
        <div className="contact-center">
          <div className="label" style={{ marginBottom: '12px' }}>// let's work together</div>
          
          <div 
            id="email-copy-clicker" 
            className="email-clicker" 
            onClick={handleEmailClick}
            style={{ marginBottom: '8px' }}
          >
            arnelcmandas15@gmail.com
            {copied && <span className="copied-toast">copied ✓</span>}
          </div>

          {/* OS Links Directory Console readout */}
          <div 
            className="links-directory" 
            style={{ 
              width: '100%', 
              minWidth: '320px',
              maxWidth: '460px', 
              border: '1px dashed var(--border)', 
              padding: '16px', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px',
              textAlign: 'left',
              marginTop: '8px',
              marginBottom: '8px'
            }}
          >
            <div style={{ marginBottom: '6px', opacity: 0.5 }}>DIR OF C:\OS\SYSTEM\LINKS\</div>
            <div style={{ borderBottom: '1px solid var(--border)', marginBottom: '8px' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a 
                href="https://github.com/Eggie20" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', justifyContent: 'space-between', color: 'inherit', textDecoration: 'none' }}
                className="directory-item"
              >
                <span>[LINK] github.lnk</span>
                <span style={{ opacity: 0.5 }}>→ github.com/Eggie20</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/arnel-jr-mandas-32b1b635b" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', justifyContent: 'space-between', color: 'inherit', textDecoration: 'none' }}
                className="directory-item"
              >
                <span>[LINK] linkedin.lnk</span>
                <span style={{ opacity: 0.5 }}>→ linkedin.com/in/arnel-jr-mandas</span>
              </a>
              
              <div 
                onClick={handleEmailClick}
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                className="directory-item"
              >
                <span>[LINK] email.lnk</span>
                <span style={{ opacity: 0.5 }}>→ arnelcmandas15@gmail.com</span>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', marginTop: '8px', paddingTop: '4px', opacity: 0.5, fontSize: '9px', textAlign: 'right' }}>
              3 Link(s) File Directory
            </div>
          </div>

          <div className="contact-description">
            I read every message. I reply to most of them. Bold claim, I know.
          </div>

          {/* Runway Button Container */}
          <div className="runaway-wrapper">
            <button 
              id="hire-me-btn"
              className={getButtonClass()} 
              style={getButtonStyle()}
              onMouseEnter={handleButtonHover}
              onClick={handleButtonClick}
            >
              HIRE ME?
            </button>
            {runawayCount >= 3 && !isMobile && (
              <div className="runaway-msg">Fine. You earned it.</div>
            )}
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-footer-left">
            EggieOS v1.0 — All rights reserved (probably)<br />
            Built with React + Vite + too much coffee
          </div>
          <div className="contact-footer-right">
            Based in Agusan del Norte, PH
          </div>
        </div>
      </div>
    </div>
  );
}
