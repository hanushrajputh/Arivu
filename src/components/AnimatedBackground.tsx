import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Grid properties
    const gridSize = 40;
    const checkboxes: Array<{
      x: number;
      y: number;
      checked: boolean;
      animationPhase: number;
    }> = [];

    const graphs: Array<{
      x: number;
      y: number;
      points: number[];
      animationPhase: number;
    }> = [];

    // Initialize checkboxes
    for (let x = 0; x < canvas.width; x += gridSize * 3) {
      for (let y = 0; y < canvas.height; y += gridSize * 3) {
        if (Math.random() > 0.7) {
          checkboxes.push({
            x,
            y,
            checked: Math.random() > 0.5,
            animationPhase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    // Initialize small graphs
    for (let i = 0; i < 15; i++) {
      graphs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        points: Array.from({ length: 8 }, () => Math.random() * 30 + 10),
        animationPhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Draw grid lines (very faint)
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.05)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animate checkboxes
      checkboxes.forEach((checkbox, index) => {
        const phase = checkbox.animationPhase + time;
        const opacity = 0.1 + Math.sin(phase) * 0.05;
        
        // Toggle checked state occasionally
        if (Math.sin(phase) > 0.99 && Math.random() > 0.98) {
          checkbox.checked = !checkbox.checked;
        }

        ctx.fillStyle = checkbox.checked 
          ? `rgba(20, 184, 166, ${opacity})` 
          : `rgba(100, 116, 139, ${opacity * 0.5})`;
        
        ctx.strokeStyle = `rgba(20, 184, 166, ${opacity + 0.1})`;
        ctx.lineWidth = 1;

        // Draw checkbox
        const size = 8;
        ctx.fillRect(checkbox.x - size/2, checkbox.y - size/2, size, size);
        ctx.strokeRect(checkbox.x - size/2, checkbox.y - size/2, size, size);

        // Draw checkmark if checked
        if (checkbox.checked) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity + 0.2})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(checkbox.x - 2, checkbox.y);
          ctx.lineTo(checkbox.x, checkbox.y + 2);
          ctx.lineTo(checkbox.x + 3, checkbox.y - 3);
          ctx.stroke();
        }
      });

      // Animate graphs
      graphs.forEach((graph, index) => {
        const phase = graph.animationPhase + time * 0.5;
        const opacity = 0.15 + Math.sin(phase) * 0.1;
        
        ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
        ctx.fillStyle = `rgba(249, 115, 22, ${opacity * 0.3})`;
        ctx.lineWidth = 1.5;

        const width = 60;
        const height = 25;
        const stepX = width / (graph.points.length - 1);

        // Update points occasionally
        graph.points = graph.points.map(point => {
          const variation = Math.sin(time * 2 + Math.random()) * 2;
          return Math.max(5, Math.min(30, point + variation * 0.1));
        });

        // Draw area under curve
        ctx.beginPath();
        ctx.moveTo(graph.x, graph.y);
        graph.points.forEach((point, i) => {
          const x = graph.x + i * stepX;
          const y = graph.y - point;
          if (i === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.lineTo(graph.x + width, graph.y);
        ctx.closePath();
        ctx.fill();

        // Draw line
        ctx.beginPath();
        graph.points.forEach((point, i) => {
          const x = graph.x + i * stepX;
          const y = graph.y - point;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.stroke();

        // Add pulse effect
        const pulseRadius = 2 + Math.sin(phase * 2) * 1;
        ctx.fillStyle = `rgba(249, 115, 22, ${opacity * 2})`;
        ctx.beginPath();
        ctx.arc(graph.x + width, graph.y - graph.points[graph.points.length - 1], pulseRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: '#0f1115' }}
    />
  );
};

export default AnimatedBackground;