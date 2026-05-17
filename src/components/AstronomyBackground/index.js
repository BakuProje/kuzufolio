import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: #070a14;
  overflow: hidden;
`;

function AstronomyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const stars = [];
    let shooting = null;

    const starTargetCount = () => {
      const area = canvas.width * canvas.height;
      return Math.min(520, Math.max(140, Math.floor(area / 2000)));
    };

    const initStars = () => {
      stars.length = 0;
      const n = starTargetCount();
      for (let i = 0; i < n; i += 1) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.25,
          tw: Math.random() * Math.PI * 2,
          spd: 0.015 + Math.random() * 0.035,
          base: 0.3 + Math.random() * 0.5,
          hue: Math.random() < 0.08 ? 210 : 0,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", resize);
    resize();

    const drawSky = () => {
      const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
      g.addColorStop(0, "#0a0e22");
      g.addColorStop(0.42, "#12183a");
      g.addColorStop(0.78, "#0c1028");
      g.addColorStop(1, "#05060f");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const band = ctx.createLinearGradient(
        canvas.width * 0.15,
        canvas.height * 0.1,
        canvas.width * 0.85,
        canvas.height * 0.95
      );
      band.addColorStop(0, "transparent");
      band.addColorStop(0.45, "rgba(120, 100, 200, 0.07)");
      band.addColorStop(0.55, "rgba(80, 140, 220, 0.05)");
      band.addColorStop(1, "transparent");
      ctx.save();
      ctx.fillStyle = band;
      ctx.translate(canvas.width * 0.5, canvas.height * 0.45);
      ctx.rotate(-0.38);
      ctx.fillRect(
        -canvas.width,
        -canvas.height * 0.6,
        canvas.width * 2,
        canvas.height * 1.4
      );
      ctx.restore();
    };

    const drawMoon = (mx, my, radius) => {
      const glow = ctx.createRadialGradient(
        mx,
        my,
        radius * 0.4,
        mx,
        my,
        radius * 2.4
      );
      glow.addColorStop(0, "rgba(255, 248, 230, 0.18)");
      glow.addColorStop(0.5, "rgba(200, 210, 255, 0.05)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mx, my, radius * 2.4, 0, Math.PI * 2);
      ctx.fill();

      const moonGrad = ctx.createRadialGradient(
        mx - radius * 0.28,
        my - radius * 0.28,
        radius * 0.08,
        mx,
        my,
        radius
      );
      moonGrad.addColorStop(0, "#fff9ec");
      moonGrad.addColorStop(0.75, "#e8e2d0");
      moonGrad.addColorStop(1, "#a8a090");
      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(mx, my, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(120, 115, 95, 0.28)";
      const craters = [
        [-0.32, -0.12, 0.11],
        [0.22, 0.22, 0.075],
        [0.04, 0.38, 0.055],
        [-0.12, 0.32, 0.065],
        [0.32, -0.18, 0.048],
        [-0.08, -0.35, 0.04],
      ];
      craters.forEach(([ox, oy, sr]) => {
        ctx.beginPath();
        ctx.arc(mx + ox * radius, my + oy * radius, sr * radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawStars = () => {
      stars.forEach((s) => {
        const tw = s.base + Math.sin(time * s.spd + s.tw) * 0.22;
        const a = Math.max(0.12, Math.min(0.95, tw));
        if (s.hue) {
          ctx.fillStyle = `rgba(200, 220, 255, ${a})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const maybeSpawnShooting = () => {
      if (shooting) return;
      if (Math.random() < 0.0018) {
        const startY = Math.random() * canvas.height * 0.55;
        shooting = {
          x: canvas.width * (0.65 + Math.random() * 0.35),
          y: startY,
          vx: -10 - Math.random() * 6,
          vy: 3 + Math.random() * 4,
          life: 1,
        };
      }
    };

    const drawShooting = () => {
      if (!shooting) return;
      const { x, y, vx, vy, life } = shooting;
      ctx.save();
      ctx.strokeStyle = `rgba(255, 255, 255, ${life * 0.55})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - vx * 4, y - vy * 4);
      ctx.stroke();
      ctx.restore();

      shooting.x += vx;
      shooting.y += vy;
      shooting.life -= 0.028;
      if (shooting.life <= 0 || shooting.x < -80) shooting = null;
    };

    const animate = () => {
      time += 1;
      drawSky();
      drawStars();
      maybeSpawnShooting();
      drawShooting();

      const mr = Math.min(canvas.width, canvas.height) * 0.1;
      const moonX = canvas.width - mr * 2.15;
      const moonY = mr * 1.95;
      drawMoon(moonX, moonY, mr);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <BackgroundContainer>
      <canvas ref={canvasRef} />
    </BackgroundContainer>
  );
}

export default AstronomyBackground;
