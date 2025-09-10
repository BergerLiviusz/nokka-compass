import { useEffect, useRef } from 'react';

interface BubbleBackgroundProps {
  className?: string;
  opacity?: number;
}

const BubbleBackground = ({ className = "", opacity = 0.15 }: BubbleBackgroundProps) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = interBubble.getBoundingClientRect();
      tgX = event.clientX - rect.left;
      tgY = event.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="fixed top-0 left-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      <div 
        className="w-full h-full"
        style={{
          filter: 'url(#goo) blur(40px)',
        }}
      >
        {/* Primary NOKKA Green */}
        <div 
          className="absolute animate-[moveVertical_30s_ease_infinite] mix-blend-hard-light"
          style={{
            background: `radial-gradient(circle at center, hsla(151, 62%, 52%, 0.8) 0%, hsla(151, 62%, 52%, 0) 50%)`,
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            transformOrigin: 'center center',
          }}
        />
        
        {/* Secondary NOKKA Mint */}
        <div 
          className="absolute animate-[moveInCircle_20s_reverse_infinite] mix-blend-hard-light"
          style={{
            background: `radial-gradient(circle at center, hsla(151, 65%, 74%, 0.8) 0%, hsla(151, 65%, 74%, 0) 50%)`,
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            transformOrigin: 'calc(50% - 400px)',
          }}
        />
        
        {/* Accent color - lighter mint */}
        <div 
          className="absolute animate-[moveInCircle_40s_linear_infinite] mix-blend-hard-light"
          style={{
            background: `radial-gradient(circle at center, hsla(151, 65%, 84%, 0.6) 0%, hsla(151, 65%, 84%, 0) 50%)`,
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40% + 200px)',
            left: 'calc(50% - 40% - 500px)',
            transformOrigin: 'calc(50% + 400px)',
          }}
        />
        
        {/* NOKKA Gray accent */}
        <div 
          className="absolute animate-[moveHorizontal_40s_ease_infinite] mix-blend-hard-light opacity-70"
          style={{
            background: `radial-gradient(circle at center, hsla(0, 0%, 18%, 0.4) 0%, hsla(0, 0%, 18%, 0) 50%)`,
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            transformOrigin: 'calc(50% - 200px)',
          }}
        />
        
        {/* Large background bubble */}
        <div 
          className="absolute animate-[moveInCircle_20s_ease_infinite] mix-blend-hard-light"
          style={{
            background: `radial-gradient(circle at center, hsla(151, 62%, 62%, 0.5) 0%, hsla(151, 62%, 62%, 0) 50%)`,
            width: '160%',
            height: '160%',
            top: 'calc(50% - 80%)',
            left: 'calc(50% - 80%)',
            transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
          }}
        />
        
        {/* Interactive bubble */}
        <div 
          ref={interactiveRef}
          className="absolute opacity-70 mix-blend-hard-light"
          style={{
            background: `radial-gradient(circle at center, hsla(151, 62%, 42%, 0.6) 0%, hsla(151, 62%, 42%, 0) 50%)`,
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
          }}
        />
      </div>
    </div>
  );
};

export default BubbleBackground;