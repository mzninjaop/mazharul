import { useState, useEffect, useRef } from 'react';

interface AnimatedSkillBarProps {
  skill: string;
  level: number;
  color?: string;
  icon?: string;
}

export const AnimatedSkillBar = ({ 
  skill, 
  level, 
  color = 'primary',
  icon = '⚡'
}: AnimatedSkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setAnimatedLevel(level * easeOutCubic);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, level]);

  return (
    <div ref={elementRef} className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          {skill}
        </span>
        <span className="text-primary font-bold">{Math.round(animatedLevel)}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
        <div 
          className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${animatedLevel}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_10px_hsl(var(--primary))] opacity-50" />
        </div>
      </div>
    </div>
  );
};