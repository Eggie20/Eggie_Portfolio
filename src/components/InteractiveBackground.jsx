import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground({ isLightTheme }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const activeRipplesRef = useRef([]);
  const themeRef = useRef(isLightTheme);

  useEffect(() => {
    themeRef.current = isLightTheme;
  }, [isLightTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dots = [];
    const spacing = 35; // Pixels between dots
    const rippleRadius = 160; // Max distance for cursor influence

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          dots.push({
            x: c * spacing + (spacing / 2),
            y: r * spacing + (spacing / 2),
            size: 1.5,
            opacity: 0.08,
            currentSize: 1.5,
            currentOpacity: 0.08,
          });
        }
      }
    };

    // Track mouse
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Track touch/tap on mobile
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
        
        // Add a tap ripple expanding from the touch point
        activeRipplesRef.current.push({
          x: touch.clientX,
          y: touch.clientY,
          radius: 0,
          maxRadius: 180,
          speed: 4,
          strength: 0.4,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    resizeCanvas();

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';

      const mouse = mouseRef.current;
      const ripples = activeRipplesRef.current;

      // Update manual tap ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += ripple.speed;
        if (ripple.radius >= ripple.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // Draw all dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        let targetSize = 1.5;
        let targetOpacity = 0.08;

        // Calculate distance to cursor
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < rippleRadius) {
          const factor = 1 - dist / rippleRadius; // 1 at center, 0 at border
          targetSize = 1.5 + factor * 2.5; // up to 4px
          targetOpacity = 0.08 + factor * 0.32; // up to 0.4 opacity
        }

        // Apply tap ripples
        for (let j = 0; j < ripples.length; j++) {
          const ripple = ripples[j];
          const rdx = ripple.x - dot.x;
          const rdy = ripple.y - dot.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          
          // If dot is near the edge of the expanding ripple ring
          const rippleWidth = 40;
          if (Math.abs(rdist - ripple.radius) < rippleWidth) {
            const rippleFactor = 1 - Math.abs(rdist - ripple.radius) / rippleWidth;
            const ageFactor = 1 - ripple.radius / ripple.maxRadius; // fade as it expands
            const intensity = rippleFactor * ageFactor * ripple.strength;
            
            targetSize = Math.max(targetSize, 1.5 + intensity * 3.5);
            targetOpacity = Math.max(targetOpacity, 0.08 + intensity * 0.42);
          }
        }

        // Smooth interpolation
        dot.currentSize += (targetSize - dot.currentSize) * 0.12;
        dot.currentOpacity += (targetOpacity - dot.currentOpacity) * 0.12;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentSize / 2, 0, Math.PI * 2);
        const rgb = themeRef.current ? '0, 0, 0' : '255, 255, 255';
        ctx.fillStyle = `rgba(${rgb}, ${dot.currentOpacity.toFixed(3)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" />;
}
