import React from 'react';

export default function About() {
  return (
    <div className="slide-inner">
      <div className="slide-header-brand">eggie.dev / v1.0</div>

      <div className="about-grid" style={{ margin: 'auto 0' }}>
        {/* Left Column: Human Side */}
        <div className="about-left">
          <div className="label" style={{ marginBottom: '20px' }}>// who i am</div>
          
          <p className="about-paragraph">
            Hi, I'm Arnel C. Mandas Jr, a full-stack developer based in Magallanes Agusan del Norte, Philippines. 
            I mostly work on clean, functional applications nothing fancy, just things that work the way they're supposed to.
          </p>
          
          <p className="about-paragraph">
            I'm drawn to practical software engineering, tinkering with locally-deployed AI, and simple, no-nonsense interfaces. 
            Still learning a lot along the way I just enjoy figuring things out.
          </p>
          
          <p className="about-paragraph">
            <strong>Honest fact:</strong> I get a little too excited when a new tool saves me hours of manual work. I'm also usually the one people ask for help first not because I'm the best at it, just around and willing.
          </p>

          <div className="about-stats">
            <span className="stat-pill">5+ years experience</span>
            <span className="stat-pill">Norte Agusan-based</span>
            <span className="stat-pill">Reliable</span>
            <span className="stat-pill">Team player</span>
            <span className="stat-pill">Support-minded</span>
            <span className="stat-pill">Open to collab</span>
            <span className="stat-pill">Still learning</span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="about-divider"></div>

        {/* Right Column: System Side */}
        <div className="about-right">
          <div className="monitor-title">SYSTEM SPECS — EGGIE.EXE</div>
          <div className="monitor-divider" style={{ borderBottomStyle: 'solid', borderBottomWidth: '1px' }}></div>
          
          <div className="monitor-row">
            <span className="monitor-label">CPU</span>
            <span className="monitor-value">Problem Solving — 94%</span>
          </div>
          
          <div className="monitor-row">
            <span className="monitor-label">RAM</span>
            <span className="monitor-value">[████████<span style={{ opacity: 0.15 }}>██</span>] 3 active projects</span>
          </div>
          
          <div className="monitor-row" style={{ position: 'relative' }}>
            <span className="monitor-label">STORAGE</span>
            <span className="monitor-value" style={{ fontWeight: 'bold' }}>
              Ideas — Critically Full
              <span className="monitor-warning-icon"> ⚠</span>
            </span>
          </div>
          
          <div className="monitor-row">
            <span className="monitor-label">GPU</span>
            <span className="monitor-value">Design Sense — Initialized</span>
          </div>
          
          <div className="monitor-row">
            <span className="monitor-label">NETWORK</span>
            <span className="monitor-value">Collaboration — Online</span>
          </div>

          <div className="monitor-row">
            <span className="monitor-label">SUPPORT</span>
            <span className="monitor-value">Usually the one who fixes it quietly</span>
          </div>

          <div className="monitor-row">
            <span className="monitor-label">UPTIME</span>
            <span className="monitor-value">Shows up when it matters</span>
          </div>

          <div className="monitor-row">
            <span className="monitor-label">NOTES</span>
            <span className="monitor-value">Prefers helping over taking credit</span>
          </div>
          
          <div className="monitor-divider"></div>
          
          <div className="monitor-row">
            <span className="monitor-label">LAST REBOOT</span>
            <span className="monitor-value">After last deadline</span>
          </div>
          
          <div className="monitor-row">
            <span className="monitor-label">OS</span>
            <span className="monitor-value">Windows + Antigravity IDE</span>
          </div>
          
          <div className="monitor-divider" style={{ borderBottomStyle: 'solid', borderBottomWidth: '1px' }}></div>
        </div>
      </div>
      
      {/* Empty spacer to align with footer slide counter */}
      <div style={{ height: '20px' }}></div>
    </div>
  );
}
