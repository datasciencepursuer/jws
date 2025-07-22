'use client';

import { contentConfig } from '@/config/content';
import Image from 'next/image';

export default function Hero() {
  const { hero } = contentConfig;

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const start = window.pageYOffset;
      const targetPosition = targetElement.offsetTop;
      const distance = targetPosition - start;
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
        
        window.scrollTo(0, start + (distance * ease));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="home" className="pt-8 paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blueprint-blue mb-4 structural-accent">
            {contentConfig.company.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl text-charcoal font-mono mb-3">
            {contentConfig.company.tagline}
          </h2>
          <p className="text-xl text-blueprint-blue mb-8 font-mono italic">
            {hero.headline}
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {contentConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="inline-flex items-center px-6 py-3 border-2 border-blueprint-blue text-base font-medium rounded-md text-blueprint-blue bg-transparent hover:bg-blueprint-blue hover:text-cream-paper transition-colors blueprint-border font-mono"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}