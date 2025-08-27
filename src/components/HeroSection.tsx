import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  config: any;
}

export const HeroSection = ({ config }: HeroSectionProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % config.roles.length);
        setIsVisible(true);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, [config.roles.length]);

  const currentRole = config.roles[currentRoleIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-glow" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cyber-glow animate-slide-up">
          {config.personal.name.split(' ').map((word: string, index: number) => (
            <span
              key={index}
              className={index === 0 ? 'text-primary' : 'text-foreground'}
            >
              {word}{index === 0 ? ' ' : ''}
            </span>
          ))}
        </h1>

        {/* Rotating roles */}
        <div className="h-20 flex items-center justify-center mb-8">
          <div
            className={`text-2xl md:text-4xl font-bold transition-all duration-200 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <span className="bg-gradient-cyber bg-clip-text text-transparent animate-cyber-flicker">
              {currentRole}
            </span>
          </div>
        </div>

        {/* Hero subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {config.hero.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-foreground/80 mb-12 animate-fade-in">
          {config.personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {config.hero.ctaButtons.map((button: any, index: number) => (
            <Button
              key={index}
              className={
                button.variant === 'primary' 
                  ? 'btn-cyber-glow text-lg px-8 py-4' 
                  : 'btn-neon-pink text-lg px-8 py-4'
              }
              asChild
            >
              <a href={button.link}>{button.text}</a>
            </Button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary glow-primary" />
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <div className="w-1 h-32 bg-gradient-cyber rounded-full glow-primary" />
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="w-1 h-32 bg-gradient-cyber rounded-full glow-primary" />
      </div>

      {/* Stats preview */}
      <div className="absolute bottom-20 left-6 hidden lg:block">
        <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-4 glow-primary">
          <div className="text-2xl font-bold text-primary">{config.personal.yearsExperience}+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
      </div>

      <div className="absolute bottom-20 right-6 hidden lg:block">
        <div className="bg-card/20 backdrop-blur-sm border border-secondary/20 rounded-lg p-4 glow-secondary">
          <div className="text-2xl font-bold text-secondary">500+</div>
          <div className="text-sm text-muted-foreground">Projects Done</div>
        </div>
      </div>
    </section>
  );
};