import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-slim';
import { loadSlim } from 'tsparticles-slim';

const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container?.refresh();
  }, []);

  return (
    <div id="tsparticles" className="absolute inset-0 -z-10">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(
            750px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(138, 60, 189, 0.3),
            transparent 80%
          )`,
        }}
      />
      <div 
        id="particles-js"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "linear-gradient(to bottom, rgba(56, 36, 65, 0.8), rgb(43, 26, 47))",
          zIndex: -1,
        }}
      >
        {/* Using tsparticles-slim */}
        <iframe 
          src="data:text/html;charset=utf-8,%3Chtml%3E%3Chead%3E%3Cstyle%3Ebody%20%7B%20margin%3A%200%3B%20overflow%3A%20hidden%3B%20%7D%3C%2Fstyle%3E%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Ftsparticles-slim%402.12.0%2Ftsparticles.slim.min.js%22%3E%3C%2Fscript%3E%3C%2Fhead%3E%3Cbody%3E%3Cdiv%20id%3D%22tsparticles%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%3E%3C%2Fdiv%3E%3Cscript%3Etsparticles.load%28%22tsparticles%22%2C%20%7B%20fpsLimit%3A%2060%2C%20particles%3A%20%7B%20color%3A%20%7B%20value%3A%20%22%23a25eff%22%20%7D%2C%20links%3A%20%7B%20color%3A%20%22%23535be1%22%2C%20distance%3A%20150%2C%20enable%3A%20true%2C%20opacity%3A%200.2%20%7D%2C%20move%3A%20%7B%20direction%3A%20%22none%22%2C%20enable%3A%20true%2C%20outModes%3A%20%7B%20default%3A%20%22bounce%22%20%7D%2C%20random%3A%20false%2C%20speed%3A%201%2C%20straight%3A%20false%20%7D%2C%20number%3A%20%7B%20density%3A%20%7B%20enable%3A%20true%2C%20area%3A%20800%20%7D%2C%20value%3A%2080%20%7D%2C%20opacity%3A%20%7B%20value%3A%200.3%20%7D%2C%20shape%3A%20%7B%20type%3A%20%22circle%22%20%7D%2C%20size%3A%20%7B%20value%3A%20%7B%20min%3A%201%2C%20max%3A%203%20%7D%20%7D%20%7D%2C%20detectRetina%3A%20true%20%7D%29%3B%3C%2Fscript%3E%3C%2Fbody%3E%3C%2Fhtml%3E"
          style={{ width: '100%', height: '100%', border: 'none', position: 'absolute' }}
          title="particles"
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;