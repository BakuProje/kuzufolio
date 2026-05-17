import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
  50% { transform: translate(-8%, 6%) rotate(180deg); opacity: 0.7; }
  100% { transform: translate(0, 0) rotate(360deg); opacity: 0.4; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.65; transform: scale(1.08); }
`;

const CanvasWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: #070a14;
`;

const AstroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    top: -20%;
    left: -20%;
    background: radial-gradient(
      ellipse at 70% 15%,
      rgba(255, 248, 230, 0.12) 0%,
      rgba(90, 159, 255, 0.08) 25%,
      transparent 55%
    );
    animation: ${pulse} 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 30% 80%,
      rgba(120, 100, 200, 0.1) 0%,
      transparent 50%
    );
    animation: ${drift} 18s linear infinite;
  }
`;

function MobileMenuBackground({ isActive }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!isActive) return undefined;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return undefined;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    const stars = [];
    let shooting = null;

    const initStars = (w, h) => {
      stars.length = 0;
      const count = Math.min(100, Math.max(40, Math.floor((w * h) / 2800)));
      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.35,
          tw: Math.random() * Math.PI * 2,
          spd: 0.04 + Math.random() * 0.06,
          base: 0.35 + Math.random() * 0.5,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.05,
        });
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const w = Math.max(rect.width, window.innerWidth);
      const h = Math.max(rect.height, window.innerHeight);
      if (w < 10 || h < 10) return;
      canvas.width = w;
      canvas.height = h;
      initStars(w, h);
    };

    const drawMoon = (w, h) => {
      const mx = w * 0.82;
      const my = h * 0.1 + Math.sin(time * 0.02) * 6;
      const mr = Math.min(w, h) * 0.1;
      const glowPulse = 0.85 + Math.sin(time * 0.03) * 0.15;

      const glow = ctx.createRadialGradient(mx, my, mr * 0.2, mx, my, mr * 3);
      glow.addColorStop(0, `rgba(255, 248, 230, ${0.2 * glowPulse})`);
      glow.addColorStop(0.45, 'rgba(120, 160, 255, 0.08)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mx, my, mr * 3, 0, Math.PI * 2);
      ctx.fill();

      const moon = ctx.createRadialGradient(mx - mr * 0.28, my - mr * 0.28, 0, mx, my, mr);
      moon.addColorStop(0, 'rgba(255, 249, 236, 0.5)');
      moon.addColorStop(0.65, 'rgba(232, 226, 208, 0.28)');
      moon.addColorStop(1, 'rgba(168, 160, 144, 0.1)');
      ctx.fillStyle = moon;
      ctx.beginPath();
      ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.fill();
    };

    const maybeShooting = (w) => {
      if (shooting) return;
      if (Math.random() < 0.004) {
        shooting = {
          x: w * 0.9,
          y: Math.random() * canvas.height * 0.4,
          vx: -12,
          vy: 5,
          life: 1,
        };
      }
    };

    const drawShooting = () => {
      if (!shooting) return;
      ctx.strokeStyle = `rgba(255, 255, 255, ${shooting.life * 0.7})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(shooting.x, shooting.y);
      ctx.lineTo(shooting.x - shooting.vx * 3, shooting.y - shooting.vy * 3);
      ctx.stroke();
      shooting.x += shooting.vx;
      shooting.y += shooting.vy;
      shooting.life -= 0.03;
      if (shooting.life <= 0) shooting = null;
    };

    const draw = () => {
      time += 1;
      const w = canvas.width;
      const h = canvas.height;
      if (w < 10 || h < 10) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a0e22');
      sky.addColorStop(0.45, '#101838');
      sky.addColorStop(1, '#060810');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      drawMoon(w, h);

      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        const a = s.base + Math.sin(time * s.spd + s.tw) * 0.35;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, Math.min(1, a))})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      maybeShooting(w);
      drawShooting();

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    const t1 = setTimeout(resize, 50);
    const t2 = setTimeout(resize, 450);
    window.addEventListener('resize', resize);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    draw();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', resize);
      ro.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <CanvasWrap ref={wrapRef}>
      <AstroOverlay aria-hidden />
      <canvas ref={canvasRef} />
    </CanvasWrap>
  );
}

export default MobileMenuBackground;
