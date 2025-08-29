import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Mail, MessageCircle, Zap, Code, Rocket } from 'lucide-react';
import { MatrixBackground } from './MatrixBackground';

interface AdvancedHeroSectionProps {
  config: any;
}

export const AdvancedHeroSection = ({ config }: AdvancedHeroSectionProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  // Simple rotation without typing effect
  useEffect(() => {
    if (!config.roles || config.roles.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % config.roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [config.roles]);

  // Floating particles animation data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Background */}
      <MatrixBackground />
      
      {/* Animated geometric background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse opacity-30" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-primary to-secondary animate-float opacity-70"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-neon-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Status badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
          <span className="text-accent text-sm font-medium">{config.personal.status}</span>
        </div>

        {/* Main heading with enhanced styling */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 animate-slide-up">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-cyber-flicker">
            {config.personal.name.split(' ').map((word: string, index: number) => (
              <span key={index} className="inline-block mr-4 hover:scale-105 transition-transform duration-300">
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Epic Animated Role Display */}
        <div className="min-h-[6rem] flex items-center justify-center mb-8">
          <div className="text-3xl md:text-5xl font-bold text-center relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent bg-[length:300%_300%] animate-[gradient-shift_4s_ease-in-out_infinite] animate-[rainbow-glow_3s_ease-in-out_infinite] filter drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-500">
              {config?.roles?.[currentRoleIndex] || 'MINECRAFT SERVER MASTER'}
            </span>
            <span className="animate-pulse text-cyan-400 ml-2 text-4xl md:text-6xl animate-[rainbow-glow_2s_ease-in-out_infinite]">|</span>
          </div>
        </div>

        {/* Enhanced tagline */}
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in font-light">
          {config.personal.tagline}
        </p>

        {/* Bio */}
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          {config.personal.bio}
        </p>

        {/* Enhanced stats preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Zap, label: 'Years Experience', value: `${config.personal.yearsExperience}+`, color: 'text-primary' },
            { icon: Code, label: 'Projects', value: '500+', color: 'text-secondary' },
            { icon: Rocket, label: 'Success Rate', value: '99%', color: 'text-accent' },
            { icon: MessageCircle, label: 'Happy Clients', value: '1000+', color: 'text-neon-pink' },
          ].map((stat, index) => (
            <div key={index} className="bg-card/20 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {config.hero.ctaButtons.map((button: any, index: number) => (
            <Button
              key={index}
              className={`
                text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
                ${button.variant === 'primary' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-2xl' 
                  : button.variant === 'secondary'
                  ? 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                  : 'bg-gradient-to-r from-neon-pink to-neon-gold text-neon-pink-foreground hover:shadow-2xl'
                }
              `}
              asChild
            >
              <a href={button.link} className="inline-flex items-center gap-2">
                {button.variant === 'primary' && <Rocket className="w-5 h-5" />}
                {button.variant === 'secondary' && <Code className="w-5 h-5" />}
                {button.variant === 'neon' && <MessageCircle className="w-5 h-5" />}
                {button.text}
              </a>
            </Button>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16">
          {config.contact.socialLinks.map((social: any, index: number) => (
            <a
              key={index}
              href={social.url}
              className="w-12 h-12 rounded-xl bg-card/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              {social.icon === 'github' && <Github className="w-6 h-6" />}
              {social.icon === 'message-circle' && <MessageCircle className="w-6 h-6" />}
              {social.icon === 'send' && <Mail className="w-6 h-6" />}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' }} />
          </div>
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-16 bg-gradient-to-b from-secondary to-transparent rounded-full" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
};