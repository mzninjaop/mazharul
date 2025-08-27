import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Sparkles } from 'lucide-react';

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
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [config.roles.length]);

  const currentRole = config.roles[currentRoleIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{config.personal.status}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
          <span className="block">
            {config.personal.name.split(' ').map((word: string, index: number) => (
              <span
                key={index}
                className={index === 0 || word === 'AKA' ? 'text-foreground' : 'text-gradient'}
              >
                {word}{' '}
              </span>
            ))}
          </span>
        </h1>

        {/* Dynamic role */}
        <div className="h-16 flex items-center justify-center mb-8">
          <div
            className={`text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <span className="text-gradient flex items-center gap-2">
              <Code className="w-6 h-6" />
              {currentRole}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in-up">
          {config.hero.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          {config.personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
          {config.hero.ctaButtons.map((button: any, index: number) => (
            <Button
              key={index}
              className={
                button.variant === 'primary' 
                  ? 'btn-primary hover-lift text-base px-8 py-4' 
                  : button.variant === 'secondary'
                  ? 'btn-secondary hover-lift text-base px-8 py-4'
                  : 'btn-outline hover-lift text-base px-8 py-4'
              }
              asChild
            >
              <a href={button.link}>{button.text}</a>
            </Button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>

      {/* Side elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Experience card */}
      <div className="absolute bottom-20 left-8 hidden xl:block animate-fade-in-up">
        <div className="card-glass hover-glow">
          <div className="text-2xl font-bold text-primary">{config.personal.yearsExperience}+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
      </div>

      {/* Location card */}
      <div className="absolute bottom-20 right-8 hidden xl:block animate-fade-in-up">
        <div className="card-glass hover-glow">
          <div className="text-lg font-semibold text-foreground">{config.personal.location}</div>
          <div className="text-sm text-muted-foreground">{config.personal.availability}</div>
        </div>
      </div>
    </section>
  );
};