import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';
import { useEffect, useRef } from 'react';

const NetworkMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 60;

    const points: { x: number; y: number; vx: number; vy: number }[] = [];
    const numPoints = 15;

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillStyle = 'rgba(0, 163, 255, 0.8)';
      ctx.lineWidth = 0.5;

      points.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

const IntroBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] bg-[#050505] overflow-hidden group z-[60] border-b border-white/10">
      {/* Animated Network Mesh */}
      <NetworkMesh />
      
      {/* Dark Radial Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      <motion.div 
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap h-full relative z-20"
      >
        <div className="flex items-center gap-8 px-4 h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[3px] text-silver drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Diamond Standard Automation</span>
              <Diamond className="w-3 h-3 text-brand-blue/50 fill-brand-blue/20" />
              <span className="text-[10px] font-black uppercase tracking-[3px] text-silver drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">24-Hour GMC Delivery</span>
              <Diamond className="w-3 h-3 text-brand-blue/50 fill-brand-blue/20" />
              <span className="text-[10px] font-black uppercase tracking-[3px] text-silver drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Predictable ROAS Growth</span>
              <Diamond className="w-3 h-3 text-brand-blue/50 fill-brand-blue/20" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IntroBanner;
