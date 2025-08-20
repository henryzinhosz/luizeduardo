import { useEffect, useRef } from 'react';

export default function StarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numStars = 150;
    
    // Clear existing stars
    container.innerHTML = '';
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      const starSize = Math.random();
      const brightness = Math.random();
      
      // Create different types of stars for variety
      if (starSize > 0.8) {
        // Bright larger stars
        star.className = 'absolute w-1 h-1 bg-stellar-cyan rounded-full animate-twinkle';
        star.style.boxShadow = '0 0 6px rgba(0, 245, 255, 0.8)';
      } else if (starSize > 0.6) {
        // Medium purple stars
        star.className = 'absolute w-0.5 h-0.5 bg-stellar-purple rounded-full animate-twinkle';
        star.style.boxShadow = '0 0 4px rgba(139, 92, 246, 0.6)';
      } else {
        // Small white stars
        star.className = 'absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle';
        star.style.opacity = (brightness * 0.6 + 0.2).toString();
      }
      
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 4 + 's';
      star.style.animationDuration = (Math.random() * 4 + 3) + 's';
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      data-testid="star-background"
    />
  );
}
