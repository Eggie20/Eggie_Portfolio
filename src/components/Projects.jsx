import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const PROJECTS_DATA = [
  {
    num: "01",
    title: "Magic AI Studio",
    role: "Lead Developer & Designer",
    tags: ["React", "Vite", "ONNX Runtime", "WebGPU"],
    filled: 8,
    statusLabel: "In Progress",
    hoverText: '"Runs on ONNX and sheer determination."',
    gridClass: "",
    style: { gridColumn: "span 2" },
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
    filled: 8,
    statusLabel: "Active",
    hoverText: '"Comprehensive Civil Service Exam mobile simulation & interactive study portal."',
    gridClass: "",
    style: { gridColumn: "span 1" },
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
    filled: 9,
    statusLabel: "Active",
    hoverText: '"Automated Daily Time Record computation engine and biometric attendance portal."',
    gridClass: "",
    style: { gridColumn: "span 1" },
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
    filled: 9,
    statusLabel: "Active",
    hoverText: '"A curated frontend component system and interactive UI design reference library."',
    gridClass: "",
    style: { gridColumn: "span 1" },
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
    filled: 10,
    statusLabel: "Done",
    hoverText: '"Mobile-first food ordering platform with Leaflet geofenced delivery corridor."',
    gridClass: "",
    style: { gridColumn: "span 1" },
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
    filled: 10,
    statusLabel: "Active",
    hoverText: '"The official hub of my open-source repositories and development projects."',
    gridClass: "",
    style: { gridColumn: "span 1" },
    link: "https://github.com/Eggie20",
    github: "https://github.com/Eggie20",
    images: [],
    imageCaptions: [],
    features: [
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
        filled: 10,
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

  // Earthquake Monitor & Analyzer combined SVGs
  if (num === "06") {
    if (imgIdx < 4) {
      // Map view
      return (
        <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.6', fill: 'none', opacity: 0.6 }}>
          <text x="50" y="8" fontSize="4.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)', fontWeight: 'bold' }}>MONITOR: ACTIVE_EPICENTERS</text>
          <circle cx="50" cy="32" r="18" />
          <circle cx="50" cy="32" r="10" />
          <circle cx="50" cy="32" r="3" style={{ fill: 'var(--text)' }} />
          <circle cx="75" cy="20" r="4" strokeDasharray="1,1" />
          <circle cx="30" cy="45" r="6" strokeDasharray="1,1" />
          <line x1="50" y1="14" x2="50" y2="50" />
          <line x1="32" y1="32" x2="68" y2="32" />
          <text x="50" y="56" fontSize="4" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[{viewStr}]</text>
        </svg>
      );
    } else {
      // Time-series view
      return (
        <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.6', fill: 'none', opacity: 0.6 }}>
          <text x="50" y="8" fontSize="4.5" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)', fontWeight: 'bold' }}>TS_ANALYSIS: SEISMIC</text>
          <path d="M 5 30 L 20 30 L 25 15 L 30 45 L 35 25 L 40 35 L 45 30 L 50 30 L 53 5 L 56 55 L 59 10 L 62 48 L 65 28 L 68 32 L 72 30 L 95 30" />
          <line x1="5" y1="30" x2="95" y2="30" strokeDasharray="1,2" opacity="0.3" />
          <text x="50" y="56" fontSize="4" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[{viewStr}]</text>
        </svg>
      );
    }
  }

  // GitHub SVGs
  if (num === "07") {
    return (
      <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', stroke: strokeColor, strokeWidth: '0.6', fill: 'none', opacity: 0.6 }}>
        <line x1="25" y1="12" x2="25" y2="48" />
        <circle cx="25" cy="18" r="3" style={{ fill: 'var(--bg)' }} />
        <circle cx="25" cy="32" r="3" style={{ fill: 'var(--bg)' }} />
        <circle cx="25" cy="46" r="3" style={{ fill: 'var(--bg)' }} />
        <path d="M 25 18 Q 60 22 60 34 L 60 44" />
        <circle cx="60" cy="44" r="3" style={{ fill: 'var(--bg)' }} />
        <text x="32" y="20" fontSize="4.5" fontFamily="var(--font-mono)" style={{ stroke: 'none', fill: 'var(--text)' }}>main</text>
        <text x="68" y="46" fontSize="4.5" fontFamily="var(--font-mono)" style={{ stroke: 'none', fill: 'var(--text)' }}>feat/ocr</text>
        <text x="50" y="56" fontSize="4" fontFamily="var(--font-mono)" textAnchor="middle" style={{ stroke: 'none', fill: 'var(--text)' }}>[{viewStr}]</text>
      </svg>
    );
  }

  // My Legacy Portfolio SVGs
  if (num === "07A") {
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
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedSubProject, setSelectedSubProject] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => {
    if (currentSlide !== 2) {
      setActiveProject(null);
      setSelectedSubProject(null);
    }
  }, [currentSlide]);

  const renderProgressBar = (filled, label) => {
    const empty = 10 - filled;
    return (
      <span className="project-status" style={{ fontVariantNumeric: 'tabular-nums' }}>
        [
        <span>{"█".repeat(filled)}</span>
        <span style={{ opacity: 0.15 }}>{"█".repeat(empty)}</span>
        {`] ${label}`}
      </span>
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
        <div className="label" style={{ marginBottom: '20px' }}>// projects / active_workspace</div>

        <div className="bento-grid">
          {PROJECTS_DATA.map((proj, idx) => {
            const isClickable = (proj.link && proj.link !== '#') || (proj.github && proj.github !== '#');
            const isWide = proj.style && (proj.style.gridColumn.includes('span 2') || proj.style.gridColumn.includes('span 3'));

            if (isWide) {
              return (
                <div
                  key={idx}
                  className={`bento-card wide-layout ${proj.gridClass}`}
                  style={{
                    ...proj.style,
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCardClick(proj)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="bento-card-body">
                    <div className="bento-card-left">
                      <div className="bento-card-top">
                        <div className="bento-card-title-row" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                          <div className="project-num" style={{ fontSize: '16px', opacity: 0.4, minWidth: '24px', paddingTop: '4px' }}>{proj.num}</div>
                          <div>
                            <h3 className="project-title" style={{ display: 'flex', alignItems: 'center' }}>
                              {proj.title}
                              {isClickable && <span style={{ opacity: 0.5, fontSize: '13px', marginLeft: '4px' }}>⧉</span>}
                            </h3>
                            <div className="project-role">{proj.role}</div>
                          </div>
                        </div>
                        <div className="project-tags">
                          {proj.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="project-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bento-card-right">
                      {renderProjectDesign(proj, 0)}
                    </div>
                  </div>

                  <div className="bento-card-bottom" style={{ gap: '16px' }}>
                    <div style={{ minHeight: '16px' }}>
                      {hoveredIdx === idx ? (
                        <div className="project-one-liner" style={{ fontSize: '11px' }}>{proj.hoverText}</div>
                      ) : (
                        renderProgressBar(proj.filled, proj.statusLabel)
                      )}
                    </div>

                    {/* Separated Outbound Link Directory */}
                    <div style={{ display: 'flex', gap: '8px', zIndex: 100, flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                      {proj.link && proj.link !== '#' && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'underline', fontSize: '10px', fontFamily: 'var(--font-mono)' }}
                        >
                          [WEBSITE ↗]
                        </a>
                      )}
                      {proj.github && proj.github !== '#' && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'underline', fontSize: '10px', fontFamily: 'var(--font-mono)' }}
                        >
                          [GITHUB ↗]
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            // Narrow Card Layout (span 1)
            return (
              <div
                key={idx}
                className={`bento-card narrow-layout ${proj.gridClass}`}
                style={{
                  ...proj.style,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick(proj)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="bento-card-top">
                  <div className="bento-card-title-row" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div className="project-num" style={{ fontSize: '14px', opacity: 0.4, minWidth: '20px', paddingTop: '2px' }}>{proj.num}</div>
                    <div>
                      <h3 className="project-title" style={{ display: 'flex', alignItems: 'center' }}>
                        {proj.title}
                        {isClickable && <span style={{ opacity: 0.5, fontSize: '13px', marginLeft: '4px' }}>⧉</span>}
                      </h3>
                      <div className="project-role">{proj.role}</div>
                    </div>
                  </div>
                  <div className="project-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bento-card-middle">
                  {renderProjectDesign(proj, 0)}
                </div>

                <div className="bento-card-bottom" style={{ flexDirection: 'column', gap: '16px' }}>
                  <div style={{ minHeight: '16px' }}>
                    {hoveredIdx === idx ? (
                      <div className="project-one-liner" style={{ fontSize: '11px' }}>{proj.hoverText}</div>
                    ) : (
                      renderProgressBar(proj.filled, proj.statusLabel)
                    )}
                  </div>

                  {/* Separated Outbound Link Directory */}
                  <div style={{ display: 'flex', gap: '8px', zIndex: 100, flexShrink: 0, justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                    {proj.link && proj.link !== '#' && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline', fontSize: '10px', fontFamily: 'var(--font-mono)' }}
                      >
                        [WEBSITE ↗]
                      </a>
                    )}
                    {proj.github && proj.github !== '#' && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline', fontSize: '10px', fontFamily: 'var(--font-mono)' }}
                      >
                        [GITHUB ↗]
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                          cursor: 'pointer'
                        }}
                      >
                        [← BACK]
                      </button>
                    )}
                    <div>
                      <span className="mono" style={{ fontSize: '10px', opacity: 0.5 }}>
                        {selectedSubProject ? `REPOSITORY SHOWCASE // ${selectedSubProject.num}` : `IMAGE VIEWER // ${activeProject.num}`}
                      </span>
                      <h2 style={{ fontSize: '20px', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{currentProject.title}</h2>
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
                      cursor: 'pointer'
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
                            opacity: isActive ? 1 : 0.5
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <div>
                    {currentProject.imageCaptions && currentProject.imageCaptions[galleryIdx] ? (
                      <span style={{ opacity: 0.8 }}>{currentProject.imageCaptions[galleryIdx]}</span>
                    ) : (
                      <span style={{ opacity: 0.5 }}>Screenshot Preview</span>
                    )}
                  </div>

                  {currentProject.images && currentProject.images.length > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => setGalleryIdx((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)}
                        style={{ background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', cursor: 'pointer', padding: '2px 6px', fontSize: '9px' }}
                      >
                        [PREV]
                      </button>
                      <span style={{ fontSize: '10px', opacity: 0.7 }}>
                        {galleryIdx + 1} / {currentProject.images.length}
                      </span>
                      <button
                        onClick={() => setGalleryIdx((prev) => (prev + 1) % currentProject.images.length)}
                        style={{ background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', cursor: 'pointer', padding: '2px 6px', fontSize: '9px' }}
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
                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <span style={{ opacity: 0.4 }}>
                    {selectedSubProject 
                      ? `DIR: PROJECTS\\${activeProject.title.replace(/\s+/g, '_').toUpperCase()}\\${selectedSubProject.title.replace(/\s+/g, '_').toUpperCase()}\\`
                      : `DIR: PROJECTS\\${activeProject.title.replace(/\s+/g, '_').toUpperCase()}\\`
                    }
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {currentProject.link && currentProject.link !== '#' ? (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
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
                        style={{ color: 'inherit', textDecoration: 'underline' }}
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
