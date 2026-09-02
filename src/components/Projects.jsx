import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const PROJECTS_DATA = [
  {
    num: "01",
    title: "Magic AI Studio",
    role: "Lead Developer & Designer",
    tags: ["React", "Vite", "ONNX Runtime", "WebGPU"],
    statusLabel: "In progress",
    progressPercent: 55,
    hoverText: '"Runs on ONNX and sheer determination."',
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: [
      "magic/magic-1.png",
      "magic/magic-1_2.png",
      "magic/magic-2.png",
      "magic/magic-2_2.png",
      "magic/magic-3.png",
      "magic/magic-3_2.png",
      "magic/AI Background Remover_Video-1.mp4",
      "magic/AI Watermark & Element Remover.mp4"
    ],
    imageCaptions: [
      "Resolution Editor UI - Original",
      "Resolution Editor UI - Processed",
      "ONNX Model Nodes View - Original",
      "ONNX Model Nodes View - Processed",
      "WebGPU Settings - Original",
      "WebGPU Settings - Processed",
      "AI Background Remover Demo (Video)",
      "AI Watermark & Element Remover Demo (Video)"
    ],
    features: [
      "Client-side AI image upscaling using ONNX Runtime inside the browser",
      "WebGPU acceleration for instant, zero-server editing pipelines",
      "Node-based user interface showing node execution pathways",
      "Support for drag-and-drop custom model weights loading"
    ]
  },
  {
    num: "02",
    title: "Civil Service Exam Reviewer",
    role: "Lead Full-Stack Developer",
    tags: ["React", "Vite", "TypeScript", "SQLite"],
    statusLabel: "Active",
    hoverText: '"Comprehensive Civil Service Exam mobile simulation & interactive study portal."',
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: [
      "2/cse-1.png",
      "2/cse-2.png",
      "2/cse-3.png",
      "2/cse-4.png",
      "2/cse-5.png"
    ],
    imageCaptions: [
      "CSE Reviewer — Mobile Dashboard & Exam Target Countdown",
      "Official 170-Item Full Mock Examination Interface",
      "Real-Time Answer Feedback & Justification Engine",
      "Comprehensive Analytics & Subject Progress Tracker",
      "Categorized Review Modules & Quick Drill Practice"
    ],
    features: [
      "Official simulation mode offering 170-item full-length Civil Service Examinations with timed countdowns",
      "Interactive review modules covering Verbal, Numerical, Analytical, General Info, and Clerical topics",
      "Instant answer evaluation displaying detailed solution logic, rule citations, and reference explanations",
      "Progress analytics tracking overall accuracy, examinee profile data, daily streaks, and subject mastery"
    ]
  },
  {
    num: "03",
    title: "DTR Attendance & Computation System",
    role: "Full-Stack Architect",
    tags: ["React", "Vite", "FastAPI", "Python", "SQLite"],
    statusLabel: "Active",
    hoverText: '"Automated Daily Time Record computation engine and biometric attendance portal."',
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: [
      "3/dtr-1.png",
      "3/dtr-2.png",
      "3/dtr-3.png",
      "3/dtr-4.png"
    ],
    imageCaptions: [
      "DTR System — Executive Attendance Dashboard & Anomaly Alerts",
      "Daily Time Record Timeline & Automated Timecard Calculator",
      "Attendance Ingestion & Biometric Log CSV Parser",
      "Custom Payroll & Section-9 Computation Report Generator"
    ],
    features: [
      "Automated Daily Time Record (DTR) calculation engine processing biometric attendance logs",
      "FastAPI back-end parsing CSV/Excel punch feeds to compute total hours, tardiness, and overtime",
      "Flagged anomaly detection system identifying missing punches, unexcused absences, and shift discrepancies",
      "Exportable compliance reports formatted for enterprise payroll and administrative auditing"
    ]
  },
  {
    num: "04",
    title: "Codex Reference Library",
    role: "Lead Developer & Designer",
    tags: ["React", "Vite", "Vanilla CSS", "Design System"],
    statusLabel: "Active",
    hoverText: '"A curated frontend component system and interactive UI design reference library."',
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: [
      "5/codex-1.png",
      "5/codex-2.png",
      "5/codex-3.png",
      "5/codex-4.png",
      "5/codex-5.png",
      "5/codex-6.png",
      "5/codex-7.png"
    ],
    imageCaptions: [
      "Codex Reference Library — Main Component Showcase Grid",
      "Stratify AI — Project Management Dashboard Full Interface",
      "Interactive Preview Modal & Source Code Viewer",
      "Eggie Studio — Creative Production Studio 3D Stage",
      "Islands of the Philippines — Minimal Editorial Monograph",
      "Isla After Dark — Cyberpunk Nightlife Experience",
      "Tarsier — Studio for Digital Precision Platform"
    ],
    features: [
      "Interactive component catalog featuring live sandboxed preview frames and source code inspector",
      "Multi-palette theme switcher supporting Midnight Cyberpunk, Sunset Amber, Aurora Emerald, Electric Violet, and OLED Minimal",
      "Real-time search engine and dynamic category taxonomy across UI elements and complete web templates",
      "Deep architectural documentation detailing design tokens, CSS variable hierarchies, and component state logic",
      "Modular Vanilla CSS design tokens built for zero-dependency integration across modern web applications"
    ]
  },
  {
    num: "05",
    title: "MagTable — Kaon Mag Food Delivery",
    role: "Lead Full-Stack Developer",
    tags: ["React", "Vite", "FastAPI", "Leaflet", "Turf.js", "Podman"],
    statusLabel: "Done",
    hoverText: '"Mobile-first food ordering platform with Leaflet geofenced delivery corridor."',
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: [
      "6/mag-1.png",
      "6/mag-2.png",
      "6/mag-3.png"
    ],
    imageCaptions: [
      "Kaon Mag Mobile — Local Flavors Catalog & Sticky Menu Navigation",
      "Interactive Leaflet Geofence Delivery Map & Corridor Verification",
      "Real-Time Order Tracking Timeline & Confetti Checkout Confirmation"
    ],
    features: [
      "Mobile-first food ordering experience customized for the Magallanes main-road delivery corridor",
      "Client-side Turf.js point-in-polygon land geofencing verifying delivery pins on valid road routes",
      "Real-time order tracking timeline displaying kitchen confirmation, cooking, and en-route statuses",
      "Merchant vendor portal featuring order management, menu item 86ing, and business metrics"
    ]
  },
  {
    num: "06",
    title: "My Github Repo",
    role: "Owner / Maintainer",
    tags: ["Git", "Shell Scripts", "Markdown"],
    statusLabel: "Active",
    hoverText: '"The official hub of my open-source repositories and development projects."',
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: ["git/gh-2026.png", "git/gh-2025.png"],
    imageCaptions: [
      "107 contributions in the last year (2026)",
      "64 contributions in 2025"
    ],
    features: [
      "107+ verifiable contributions across production repositories and open-source packages",
      "Organized codebase repositories using standardized Git branch workflows",
      "Automated build and deployment scripts using Bash and container specifications",
      "Comprehensive project documentation and open-source contributions showcase"
    ],
    subProjects: [
      {
        num: "06A",
        title: "My Legacy Portfolio",
        role: "Sole Creator",
        tags: ["HTML5", "Vanilla CSS", "JavaScript"],
        statusLabel: "Archived",
        hoverText: '"My previous personal portfolio website showcase."',
        link: "https://eggie20.github.io/My_Portfolio/",
        github: "https://github.com/Eggie20/My_Portfolio",
        images: [],
        imageCaptions: [],
        features: [
          "Fully responsive classic personal portfolio layout",
          "Static single-page architecture with static HTML content",
          "Vanilla CSS styling framework and animations"
        ]
      }
    ]
  }
];

// A simple React helper component to handle image and video errors without mutating the DOM directly
const ProjectMedia = ({ src, alt, style, fallback, isModal, isThumbnail = false }) => {
  const [hasError, setHasError] = useState(false);
  const isVideo = src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg'));

  if (src && !hasError) {
    if (isVideo) {
      return (
        <video
          src={src}
          style={style}
          autoPlay={!isThumbnail}
          muted
          loop
          playsInline
          controls={isModal && !isThumbnail}
          onError={() => setHasError(true)}
        />
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        style={style}
        onError={() => setHasError(true)}
      />
    );
  }
  return fallback;
};

// Custom vector SVG drawings for each project and gallery page
const renderFallbackSVG = (num, imgIdx, totalCount = 4) => {
  const strokeColor = 'var(--text)';
  const viewStr = `VIEW ${imgIdx + 1 < 10 ? '0' + (imgIdx + 1) : imgIdx + 1}/${totalCount < 10 ? '0' + totalCount : totalCount}`;

  // Magic AI SVGs
  if (num === "01") {
    if (imgIdx === 1) {
      // Upscale editor
      return (
        <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.6', fill: 'none', opacity: 0.6 }}>
          <rect x="15" y="10" width="30" height="30" />
          <rect x="55" y="10" width="30" height="30" />
          <path d="M 45 25 L 55 25" />
          <polygon points="55,25 51,22 51,28" style={{ fill: strokeColor }} />
          <text x="30" y="47" fontSize="4.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>BEFORE</text>
          <text x="70" y="47" fontSize="4.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>AFTER (4K)</text>
          <text x="50" y="56" fontSize="4" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[{viewStr}]</text>
        </svg>
      );
    }
    // Node Flow diagram (default)
    return (
      <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.6', fill: 'none', opacity: 0.6 }}>
        <circle cx="20" cy="30" r="6" />
        <circle cx="50" cy="18" r="6" />
        <circle cx="50" cy="42" r="6" />
        <circle cx="80" cy="30" r="6" />
        <path d="M 26 27 L 44 21 M 26 33 L 44 39 M 56 21 L 74 27 M 56 39 L 74 33" />
        <text x="20" y="32" fontSize="3.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>IN</text>
        <text x="50" y="20" fontSize="3.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>AI</text>
        <text x="50" y="44" fontSize="3.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>GPU</text>
        <text x="80" y="32" fontSize="3.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>OUT</text>
        <text x="50" y="56" fontSize="4" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[{viewStr}]</text>
      </svg>
    );
  }

  // GitHub Contributions Heatmap SVG
  if (num === "06") {
    const is2025 = imgIdx === 1;

    // Activity map matching 2026 (107 contributions) vs 2025 (64 contributions)
    const activityMap2026 = {
      4: { 1: '#9be9a8' },
      8: { 4: '#40c463' },
      9: { 6: '#9be9a8' },
      11: { 4: '#30a14e', 5: '#9be9a8' },
      12: { 2: '#9be9a8' },
      15: { 3: '#216e39' },
      16: { 1: '#30a14e' },
      17: { 6: '#9be9a8' },
      18: { 0: '#9be9a8' },
      20: { 3: '#9be9a8', 4: '#9be9a8' },
      21: { 3: '#9be9a8', 4: '#9be9a8' },
      22: { 4: '#40c463' },
      28: { 3: '#9be9a8' },
      29: { 0: '#9be9a8', 3: '#216e39' },
      30: { 6: '#9be9a8' },
      33: { 2: '#9be9a8' },
      34: { 2: '#9be9a8' },
      35: { 0: '#9be9a8' },
      36: { 1: '#9be9a8', 2: '#9be9a8', 3: '#9be9a8' }
    };

    const activityMap2025 = {
      0: { 4: '#40c463' },
      1: { 1: '#9be9a8' },
      14: { 2: '#216e39' },
      16: { 6: '#216e39' },
      18: { 4: '#40c463' },
      21: { 6: '#9be9a8' },
      22: { 3: '#9be9a8', 4: '#40c463' },
      30: { 1: '#9be9a8' },
      32: { 6: '#40c463' },
      33: { 4: '#40c463' },
      36: { 3: '#216e39', 4: '#40c463' },
      38: { 2: '#40c463' }
    };

    const activityMap = is2025 ? activityMap2025 : activityMap2026;
    const titleText = is2025 ? "64 contributions in 2025" : "107 contributions in the last year";

    const cols = 37;
    const rows = 7;
    const squareSize = 4.3;
    const gap = 1.6;
    const startX = 26;
    const startY = 32;

    const months2026 = [
      { label: 'Sep', x: 26 },
      { label: 'Oct', x: 48 },
      { label: 'Nov', x: 72 },
      { label: 'Dec', x: 96 },
      { label: 'Jan', x: 120 },
      { label: 'Feb', x: 144 },
      { label: 'Mar', x: 168 },
      { label: 'Apr', x: 192 },
      { label: 'May', x: 216 },
      { label: 'Jun', x: 240 },
      { label: 'Jul', x: 262 },
      { label: 'Aug', x: 284 }
    ];

    const months2025 = [
      { label: 'Jan', x: 26 },
      { label: 'Feb', x: 50 },
      { label: 'Mar', x: 74 },
      { label: 'Apr', x: 100 },
      { label: 'May', x: 124 },
      { label: 'Jun', x: 148 },
      { label: 'Jul', x: 172 },
      { label: 'Aug', x: 196 },
      { label: 'Sep', x: 220 },
      { label: 'Oct', x: 242 },
      { label: 'Nov', x: 264 },
      { label: 'Dec', x: 286 }
    ];

    const months = is2025 ? months2025 : months2026;

    return (
      <svg viewBox="0 0 310 115" style={{ width: '100%', height: '100%', display: 'block', padding: '4px' }}>
        {/* Title */}
        <text x="10" y="14" fontSize="7" fontWeight="600" fill="var(--text)" fontFamily="var(--font-mono)">
          {titleText}
        </text>

        {/* Year Tag Badge */}
        <rect x="268" y="5" width="28" height="11" rx="2" fill={is2025 ? "var(--accent)" : "rgba(255,255,255,0.1)"} />
        <text x="282" y="13" fontSize="4.8" fontWeight="600" fill={is2025 ? "#000" : "var(--text)"} textAnchor="middle" fontFamily="var(--font-mono)">
          {is2025 ? "2025" : "2026"}
        </text>

        {/* Heatmap Card Outline */}
        <rect x="8" y="20" width="294" height="88" rx="4" fill="rgba(255,255,255,0.015)" stroke="var(--border)" strokeWidth="0.8" />

        {/* Month Labels */}
        {months.map((m, i) => (
          <text key={i} x={m.x} y="28" fontSize="4.5" fill="var(--muted)" fontFamily="var(--font-mono)">
            {m.label}
          </text>
        ))}

        {/* Day of Week Labels */}
        <text x="13" y="43" fontSize="4.2" fill="var(--muted)" fontFamily="var(--font-mono)">Mon</text>
        <text x="13" y="55" fontSize="4.2" fill="var(--muted)" fontFamily="var(--font-mono)">Wed</text>
        <text x="13" y="67" fontSize="4.2" fill="var(--muted)" fontFamily="var(--font-mono)">Fri</text>

        {/* 37 x 7 Contribution Squares */}
        {Array.from({ length: cols }).map((_, c) =>
          Array.from({ length: rows }).map((_, r) => {
            const activeColor = activityMap[c] && activityMap[c][r];
            const fillColor = activeColor || 'rgba(255, 255, 255, 0.04)';
            const strokeColor = activeColor ? 'transparent' : 'var(--border)';

            return (
              <rect
                key={`${c}-${r}`}
                x={startX + c * (squareSize + gap)}
                y={startY + r * (squareSize + gap)}
                width={squareSize}
                height={squareSize}
                rx="1"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth="0.5"
              />
            );
          })
        )}

        {/* Footer info & Legend */}
        <text x="14" y="99" fontSize="3.8" fill="var(--muted)" fontFamily="var(--font-mono)">
          Learn how we count contributions
        </text>

        <text x="226" y="99" fontSize="3.8" fill="var(--muted)" fontFamily="var(--font-mono)">
          Less
        </text>
        <rect x="238" y="95" width="4" height="4" rx="1" fill="rgba(255, 255, 255, 0.06)" stroke="var(--border)" strokeWidth="0.4" />
        <rect x="244" y="95" width="4" height="4" rx="1" fill="#9be9a8" />
        <rect x="250" y="95" width="4" height="4" rx="1" fill="#40c463" />
        <rect x="256" y="95" width="4" height="4" rx="1" fill="#30a14e" />
        <rect x="262" y="95" width="4" height="4" rx="1" fill="#216e39" />
        <text x="270" y="99" fontSize="3.8" fill="var(--muted)" fontFamily="var(--font-mono)">
          More
        </text>
      </svg>
    );
  }

  // My Legacy Portfolio SVGs
  if (num === "06A") {
    return (
      <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.6', fill: 'none', opacity: 0.6 }}>
        <rect x="10" y="10" width="80" height="42" rx="2" ry="2" />
        <line x1="10" y1="20" x2="90" y2="20" />
        <circle cx="16" cy="15" r="1.5" style={{ fill: 'var(--text)' }} />
        <circle cx="22" cy="15" r="1.5" style={{ fill: 'var(--text)' }} />
        <circle cx="28" cy="15" r="1.5" style={{ fill: 'var(--text)' }} />
        <rect x="18" y="26" width="18" height="18" />
        <line x1="42" y1="28" x2="80" y2="28" />
        <line x1="42" y1="34" x2="80" y2="34" />
        <line x1="42" y1="40" x2="70" y2="40" />
        <text x="50" y="56" fontSize="4" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[{viewStr}]</text>
      </svg>
    );
  }

  // Default TBD SVG
  return (
    <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.5', fill: 'none', opacity: 0.35 }}>
      <rect width="100%" height="100%" strokeDasharray="3,3" />
      <text x="50" y="33" fontSize="5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[ TBD ]</text>
      <line x1="0" y1="0" x2="100" y2="60" strokeDasharray="1,1" />
      <line x1="100" y1="0" x2="0" y2="60" strokeDasharray="1,1" />
    </svg>
  );
};

const renderProjectDesign = (proj, imgIdx = 0, isModal = false) => {
  const activeImage = proj.images && proj.images[imgIdx];
  const totalCount = proj.images ? proj.images.length : 4;

  // Check if the string resembles a real file path
  const isFilePath = activeImage && (
    activeImage.endsWith('.png') ||
    activeImage.endsWith('.jpg') ||
    activeImage.endsWith('.mp4') ||
    activeImage.endsWith('.webm') ||
    activeImage.includes('/')
  );

  if (isFilePath) {
    const srcUrl = activeImage.startsWith('/') || activeImage.startsWith('http') ? activeImage : `projects/${activeImage}`;
    return (
      <ProjectMedia
        src={srcUrl}
        alt={`${proj.title} Preview`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: isModal ? 'contain' : 'cover'
        }}
        fallback={renderFallbackSVG(proj.num, imgIdx, totalCount)}
        isModal={isModal}
        isThumbnail={false}
      />
    );
  }
  return renderFallbackSVG(proj.num, imgIdx, totalCount);
};

export default function Projects({ currentSlide = 2 }) {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedSubProject, setSelectedSubProject] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => {
    if (currentSlide !== 2) {
      setActiveProject(null);
      setSelectedSubProject(null);
    }
  }, [currentSlide]);

  const renderStatus = (proj) => {
    const status = proj.statusLabel || "Active";
    const normalized = status.toLowerCase();

    if (normalized.includes("progress")) {
      const percent = proj.progressPercent || 55;
      return (
        <div className="status">
          <span className="dot progress"></span>
          <span>In progress</span>
          <div className="bar">
            <span style={{ width: `${percent}%` }}></span>
          </div>
        </div>
      );
    }

    if (normalized.includes("done")) {
      return (
        <div className="status">
          <span className="dot done"></span>
          <span>Done</span>
        </div>
      );
    }

    if (normalized.includes("archived")) {
      return (
        <div className="status">
          <span className="dot archived"></span>
          <span>Archived</span>
        </div>
      );
    }

    return (
      <div className="status">
        <span className="dot active"></span>
        <span>Active</span>
      </div>
    );
  };

  const handleCardClick = (proj) => {
    setActiveProject(proj);
    setGalleryIdx(0); // Reset index to first image
    setSelectedSubProject(null); // Reset subproject selection
  };

  return (
    <div className="slide-inner">
      <div className="slide-header-brand">eggie.dev / v1.0</div>

      <div className="projects-layout" style={{ margin: 'auto 0' }}>
        <div className="crumb">// PROJECTS / ACTIVE_WORKSPACE — {PROJECTS_DATA.length} total</div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={idx}
              className="project-card"
              onClick={() => handleCardClick(proj)}
            >
              <div className="card-head">
                <div>
                  <div className="idx">{proj.num}</div>
                  <p className="title">{proj.title}</p>
                  <div className="role">{proj.role}</div>
                </div>
                <div className="link-out">↗</div>
              </div>

              <div className="tags">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>

              <div className="thumb">
                {renderProjectDesign(proj, 0)}
              </div>

              <div className="foot">
                {renderStatus(proj)}
                <div className="foot-links" onClick={(e) => e.stopPropagation()}>
                  {proj.link && proj.link !== '#' && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer">Website</a>
                  )}
                  {proj.github && proj.github !== '#' && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal Overlay */}
      {activeProject && createPortal(
        (() => {
          const currentProject = selectedSubProject || activeProject;
          return (
            <div
              className="modal-overlay"
              onClick={() => setActiveProject(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: '12px', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    {selectedSubProject && (
                      <button
                        onClick={() => {
                          setSelectedSubProject(null);
                          setGalleryIdx(0);
                        }}
                        className="mono"
                        style={{
                          background: 'transparent',
                          color: 'var(--text)',
                          border: '1px solid var(--border)',
                          padding: '4px 8px',
                          fontSize: '11px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        [← BACK]
                      </button>
                    )}
                    <div>
                      <span className="mono" style={{ fontSize: '10px', opacity: 0.5, display: 'block', marginBottom: '2px' }}>
                        {selectedSubProject ? `REPOSITORY SHOWCASE // ${selectedSubProject.num}` : `IMAGE VIEWER // ${activeProject.num}`}
                      </span>
                      <h2 style={{ fontSize: 'clamp(16px, 3.5vw, 20px)', fontWeight: 500, fontFamily: 'var(--font-mono)', lineHeight: 1.3 }}>{currentProject.title}</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="mono"
                    style={{
                      background: 'transparent',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                      padding: '4px 8px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      flexShrink: 0,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    [CLOSE]
                  </button>
                </div>

                {/* Main Image Slider View */}
                <div className="modal-slider-view">
                  {renderProjectDesign(currentProject, galleryIdx, true)}
                </div>

                {/* Multiple Image Thumbnails */}
                {currentProject.images && currentProject.images.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '-4px' }}>
                    {currentProject.images.map((img, imgIdx) => {
                      const isActive = imgIdx === galleryIdx;
                      return (
                        <button
                          key={imgIdx}
                          onClick={() => setGalleryIdx(imgIdx)}
                          style={{
                            width: '40px',
                            height: '26px',
                            padding: '1px',
                            border: isActive ? '2px solid var(--text)' : '1px solid var(--border)',
                            background: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            opacity: isActive ? 1 : 0.5,
                            flexShrink: 0
                          }}
                        >
                          {img && (
                            img.endsWith('.png') ||
                            img.endsWith('.jpg') ||
                            img.endsWith('.mp4') ||
                            img.endsWith('.webm') ||
                            img.includes('/')
                          ) ? (
                            <ProjectMedia
                              src={img.startsWith('/') || img.startsWith('http') ? img : `projects/${img}`}
                              alt=""
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              fallback={<span style={{ fontSize: '8px', fontFamily: 'var(--font-mono)' }}>0{imgIdx + 1}</span>}
                              isModal={false}
                              isThumbnail={true}
                            />
                          ) : (
                            <span style={{ fontSize: '8px', fontFamily: 'var(--font-mono)' }}>0{imgIdx + 1}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Slider Controls */}
                <div className="modal-slider-controls">
                  <div className="modal-slider-caption">
                    {currentProject.imageCaptions && currentProject.imageCaptions[galleryIdx] ? (
                      <span style={{ opacity: 0.85 }}>{currentProject.imageCaptions[galleryIdx]}</span>
                    ) : (
                      <span style={{ opacity: 0.5 }}>Screenshot Preview</span>
                    )}
                  </div>

                  {currentProject.images && currentProject.images.length > 1 && (
                    <div className="modal-slider-nav">
                      <button
                        onClick={() => setGalleryIdx((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)}
                      >
                        [PREV]
                      </button>
                      <span className="modal-slider-counter">
                        {galleryIdx + 1} / {currentProject.images.length}
                      </span>
                      <button
                        onClick={() => setGalleryIdx((prev) => (prev + 1) % currentProject.images.length)}
                      >
                        [NEXT]
                      </button>
                    </div>
                  )}
                </div>

                {/* Details & Features */}
                <div style={{ fontSize: '12px', borderTop: '1px dashed var(--border)', paddingTop: '10px' }}>
                  <div className="mono" style={{ opacity: 0.6, fontSize: '10px', marginBottom: '6px' }}>ROLE: {currentProject.role}</div>
                  {currentProject.features && currentProject.features.length > 0 && (
                    <ul style={{ paddingLeft: '14px', lineHeight: '1.5', fontSize: '11px', listStyleType: 'square', margin: 0 }}>
                      {currentProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Sub-projects Explorer (Featured Repositories) */}
                {!selectedSubProject && activeProject.subProjects && activeProject.subProjects.length > 0 && (
                  <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '12px', marginTop: '4px' }}>
                    <span className="mono" style={{ fontSize: '10px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                      // FEATURED REPOSITORIES (CLICK TO EXPLORE):
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {activeProject.subProjects.map((subProj) => (
                        <div
                          key={subProj.title}
                          onClick={() => {
                            setSelectedSubProject(subProj);
                            setGalleryIdx(0);
                          }}
                          style={{
                            border: '1px solid var(--border)',
                            padding: '10px 14px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.01)',
                            transition: 'border-color 0.2s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--text)'}
                          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                        >
                          <div>
                            <h4 style={{ fontSize: '13px', fontWeight: 500, fontFamily: 'var(--font-mono)', margin: '0 0 2px 0' }}>
                              {subProj.title}
                            </h4>
                            <p style={{ fontSize: '11px', opacity: 0.6, margin: 0 }}>
                              {subProj.hoverText.replace(/"/g, '')}
                            </p>
                          </div>
                          <span className="mono" style={{ fontSize: '10px', opacity: 0.5 }}>[VIEW ↗]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Link Directory (Separated Outbound Links at bottom) */}
                <div className="modal-footer-dir">
                  <span className="modal-footer-path">
                    {selectedSubProject 
                      ? `DIR: PROJECTS\\${activeProject.title.replace(/\s+/g, '_').toUpperCase()}\\${selectedSubProject.title.replace(/\s+/g, '_').toUpperCase()}\\`
                      : `DIR: PROJECTS\\${activeProject.title.replace(/\s+/g, '_').toUpperCase()}\\`
                    }
                  </span>
                  <div className="modal-footer-links">
                    {currentProject.link && currentProject.link !== '#' ? (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [WEBSITE ↗]
                      </a>
                    ) : (
                      <span style={{ opacity: 0.25 }}>[WEBSITE N/A]</span>
                    )}
                    {currentProject.github && currentProject.github !== '#' ? (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GITHUB ↗]
                      </a>
                    ) : (
                      <span style={{ opacity: 0.25 }}>[GITHUB N/A]</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })(),
        document.body
      )}

      <div style={{ height: '20px' }}></div>
    </div>
  );
}
