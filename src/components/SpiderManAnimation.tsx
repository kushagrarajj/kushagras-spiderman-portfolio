import { useState, useEffect } from 'react';

const SpiderManAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spider-Man starts at top and comes down as you scroll
  const spiderManTop = scrollProgress * 70; // Goes from 0% to 70% of viewport
  const webHeight = scrollProgress * 75; // Web extends as Spider-Man descends
  const kissScene = scrollProgress > 0.85; // Kiss happens at 85% scroll

  return (
    <div className="fixed right-4 md:right-8 top-0 z-40 pointer-events-none">
      {/* Web Line */}
      <div 
        className="absolute right-6 top-0 w-0.5 bg-gradient-to-b from-muted-foreground/60 to-muted-foreground/20 transition-all duration-100"
        style={{ 
          height: `${webHeight}vh`,
        }}
      />
      
      {/* Web Pattern Lines */}
      {scrollProgress > 0.1 && (
        <>
          <div 
            className="absolute right-4 w-4 h-px bg-muted-foreground/30 transition-all duration-300"
            style={{ top: `${webHeight * 0.3}vh` }}
          />
          <div 
            className="absolute right-3 w-6 h-px bg-muted-foreground/20 transition-all duration-300"
            style={{ top: `${webHeight * 0.5}vh` }}
          />
          <div 
            className="absolute right-2 w-8 h-px bg-muted-foreground/15 transition-all duration-300"
            style={{ top: `${webHeight * 0.7}vh` }}
          />
        </>
      )}

      {/* Spider-Man Figure */}
      <div 
        className={`absolute right-0 transition-all duration-200 ${kissScene ? 'scale-110' : ''}`}
        style={{ 
          top: `${spiderManTop}vh`,
          transform: `rotate(${kissScene ? 0 : 180}deg)`,
        }}
      >
        {/* Spider-Man SVG */}
        <svg 
          width="50" 
          height="70" 
          viewBox="0 0 50 70" 
          className="drop-shadow-lg"
        >
          {/* Head */}
          <ellipse cx="25" cy="12" rx="12" ry="12" className="fill-primary" />
          {/* Eyes */}
          <ellipse cx="20" cy="10" rx="5" ry="7" className="fill-background" />
          <ellipse cx="30" cy="10" rx="5" ry="7" className="fill-background" />
          {/* Eye borders (web pattern on mask) */}
          <ellipse cx="20" cy="10" rx="5" ry="7" className="stroke-foreground/50" strokeWidth="0.5" fill="none" />
          <ellipse cx="30" cy="10" rx="5" ry="7" className="stroke-foreground/50" strokeWidth="0.5" fill="none" />
          
          {/* Body */}
          <rect x="17" y="24" width="16" height="25" rx="4" className="fill-primary" />
          {/* Spider Symbol on chest */}
          <ellipse cx="25" cy="32" rx="4" ry="3" className="fill-foreground/80" />
          <line x1="21" y1="32" x2="15" y2="28" className="stroke-foreground/80" strokeWidth="1" />
          <line x1="29" y1="32" x2="35" y2="28" className="stroke-foreground/80" strokeWidth="1" />
          <line x1="21" y1="32" x2="14" y2="34" className="stroke-foreground/80" strokeWidth="1" />
          <line x1="29" y1="32" x2="36" y2="34" className="stroke-foreground/80" strokeWidth="1" />
          
          {/* Arms */}
          <rect x="7" y="26" width="10" height="5" rx="2" className="fill-primary" />
          <rect x="33" y="26" width="10" height="5" rx="2" className="fill-primary" />
          
          {/* Blue parts (secondary color) */}
          <rect x="17" y="40" width="16" height="10" rx="2" className="fill-secondary" />
          
          {/* Legs */}
          <rect x="17" y="49" width="6" height="18" rx="2" className="fill-secondary" />
          <rect x="27" y="49" width="6" height="18" rx="2" className="fill-secondary" />
          
          {/* Web pattern lines on suit */}
          <line x1="25" y1="24" x2="25" y2="40" className="stroke-foreground/20" strokeWidth="0.3" />
          <line x1="17" y1="30" x2="33" y2="30" className="stroke-foreground/20" strokeWidth="0.3" />
          <line x1="17" y1="36" x2="33" y2="36" className="stroke-foreground/20" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Gwen appears at the bottom for kiss scene */}
      {kissScene && (
        <div 
          className="fixed right-0 bottom-20 md:bottom-32 animate-fade-in"
        >
          <svg 
            width="45" 
            height="65" 
            viewBox="0 0 45 65" 
            className="drop-shadow-lg"
          >
            {/* Hair - using a warm accent color */}
            <ellipse cx="22" cy="12" rx="14" ry="13" fill="hsl(45, 90%, 55%)" />
            {/* Face */}
            <ellipse cx="22" cy="14" rx="10" ry="10" fill="hsl(35, 80%, 85%)" />
            {/* Eyes */}
            <ellipse cx="18" cy="12" rx="2" ry="2.5" className="fill-secondary" />
            <ellipse cx="26" cy="12" rx="2" ry="2.5" className="fill-secondary" />
            {/* Smile */}
            <path d="M 18 18 Q 22 22 26 18" className="stroke-primary" strokeWidth="1.5" fill="none" />
            
            {/* Body/Dress */}
            <path d="M 12 24 L 8 60 L 37 60 L 33 24 Z" className="fill-secondary" />
            {/* Arms */}
            <rect x="5" y="26" width="8" height="4" rx="2" fill="hsl(35, 80%, 85%)" />
            <rect x="32" y="26" width="8" height="4" rx="2" fill="hsl(35, 80%, 85%)" />
          </svg>
          
          {/* Heart animation when kissing */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-primary">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      )}

      {/* Love text at the end */}
      {scrollProgress > 0.95 && (
        <div className="fixed right-16 bottom-40 md:bottom-52 animate-fade-in">
          <span className="text-primary font-bold text-lg animate-pulse">❤️</span>
        </div>
      )}
    </div>
  );
};

export default SpiderManAnimation;
