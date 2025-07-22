import Image from 'next/image';
import Hero from './Hero';
import About from './About';

export default function HeroAboutWrapper() {
  return (
    <div className="relative">
      {/* Unified Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://8k8m72uv0r.ufs.sh/f/moCcVTXTgXYnlpy6MBzKI28cZ5e1TgYdjy3zE4oCO0umbts6"
          alt="Structural Engineering Background"
          fill
          className="object-cover opacity-10 pointer-events-none select-none"
          style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            objectPosition: 'center center'
          }}
          draggable={false}
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
}