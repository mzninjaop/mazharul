import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface StatsSectionProps {
  config: any;
}

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const StatsSection = ({ config }: StatsSectionProps) => {
  if (!config.stats.enabled) return null;

  const getIconColor = (index: number) => {
    const colors = ['text-primary', 'text-secondary', 'text-accent', 'text-neon-pink'];
    return colors[index % colors.length];
  };

  const getGlowClass = (index: number) => {
    const glows = ['glow-primary', 'glow-secondary', 'glow-accent', 'glow-pink'];
    return glows[index % glows.length];
  };

  return (
    <section className="py-20 bg-muted/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,255,255,0.05)_50%,transparent_60%)] animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyber-glow">
            {config.stats.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real numbers that showcase our impact and success in the industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {config.stats.items.map((stat: any, index: number) => (
            <Card
              key={index}
              className={`p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 ${getGlowClass(index)} group`}
            >
              <div className="space-y-4">
                {/* Icon placeholder - you can add Lucide icons here based on stat.icon */}
                <div className={`text-3xl ${getIconColor(index)} group-hover:animate-pulse-glow`}>
                  {stat.icon === 'dollar-sign' && '💰'}
                  {stat.icon === 'check-circle' && '✅'}
                  {stat.icon === 'star' && '⭐'}
                  {stat.icon === 'heart' && '❤️'}
                </div>
                
                <div className={`${getIconColor(index)} group-hover:text-cyber-glow transition-all duration-300`}>
                  <AnimatedCounter 
                    end={parseInt(stat.number)} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional achievement highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-secondary/20 glow-secondary">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-secondary">Verified Developer</div>
              <div className="text-sm text-muted-foreground">Certified and trusted by major platforms</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20 glow-accent">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-accent">5+ Years</div>
              <div className="text-sm text-muted-foreground">Professional development experience</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-neon-pink/20 glow-pink">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-neon-pink">100K+ Lines</div>
              <div className="text-sm text-muted-foreground">Of clean, production-ready code</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};