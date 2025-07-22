'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const start = window.pageYOffset;
    const duration = 1000; // 1 second
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      window.scrollTo(0, start * (1 - ease));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group transition-all duration-300 hover:scale-105"
          aria-label="Scroll to top"
        >
          {/* Blueprint Button Background */}
          <div className="relative w-14 h-14 bg-cream-paper border-2 border-blueprint-blue rounded-md shadow-lg blueprint-border group-hover:bg-cream-darker transition-colors duration-300">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '4px 4px'
              }}></div>
            </div>
            
            {/* Technical Arrow Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-blueprint-blue transform group-hover:-translate-y-0.5 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            
            {/* Blueprint Corner Marks */}
            <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-blueprint-blue opacity-60"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-blueprint-blue opacity-60"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-blueprint-blue opacity-60"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-blueprint-blue opacity-60"></div>
          </div>
          
          {/* Blueprint-style Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-blueprint-blue text-cream-paper px-3 py-2 rounded text-xs font-mono whitespace-nowrap border border-blueprint-light">
              SCROLL TO TOP
              <div className="absolute top-full right-3 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blueprint-blue"></div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}