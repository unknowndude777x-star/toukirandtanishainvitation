import React, { useEffect, useRef } from 'react';

export const CursorSparkles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, rotation: number, alpha: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.translate(-cx, -cy);
      
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      
      // #B49A72 gold foil color
      ctx.fillStyle = `rgba(180, 154, 114, ${alpha})`; 
      // Add a slight glow
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(180, 154, 114, ${alpha * 0.8})`;
      ctx.fill();
      ctx.restore();
    };

    const spawnParticle = (clientX: number, clientY: number) => {
      if (Math.random() > 0.4) {
        particles.push({
          x: clientX,
          y: clientY,
          size: Math.random() * 4 + 2, // size between 2 and 6
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5 + 0.5, // slight drift downwards
          life: 0,
          maxLife: Math.random() * 30 + 30, // live for 30 to 60 frames
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      spawnParticle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnParticle(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.life++;

        // Fade out
        const alpha = Math.max(0, 1 - p.life / p.maxLife);
        
        drawStar(p.x, p.y, 4, p.size, p.size / 2.5, p.rotation, alpha);

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
};
