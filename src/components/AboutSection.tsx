import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AboutSectionProps {
  config: any;
}

export const AboutSection = ({ config }: AboutSectionProps) => {
  if (!config.about.enabled) return null;

  const badges = [
    { text: 'Verified Developer', color: 'primary' },
    { text: 'Trusted Partner', color: 'secondary' },
    { text: 'Crypto Trader', color: 'accent' },
    { text: 'AI Engineer', color: 'neon-pink' },
    { text: 'Cloud Expert', color: 'neon-gold' }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyber-glow">
                {config.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {config.about.content}
              </p>
            </div>

            {/* Badges */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Certifications & Badges</h3>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className={`px-4 py-2 text-sm font-medium border-2 transition-all duration-300 hover:scale-105 ${
                      badge.color === 'primary'
                        ? 'border-primary text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground glow-primary'
                        : badge.color === 'secondary'
                        ? 'border-secondary text-secondary bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground glow-secondary'
                        : badge.color === 'accent'
                        ? 'border-accent text-accent bg-accent/10 hover:bg-accent hover:text-accent-foreground glow-accent'
                        : badge.color === 'neon-pink'
                        ? 'border-neon-pink text-neon-pink bg-neon-pink/10 hover:bg-neon-pink hover:text-neon-pink-foreground glow-pink'
                        : 'border-neon-gold text-neon-gold bg-neon-gold/10 hover:bg-neon-gold hover:text-neon-gold-foreground glow-gold'
                    }`}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image & Cards */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main profile card */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 glow-primary">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-cyber p-1 glow-primary">
                      <img
                        src={config.personal.profileImage}
                        alt={config.personal.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl glow-accent">
                      ✓
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {config.personal.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {config.personal.tagline}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Floating achievement cards */}
              <div className="absolute -top-4 -left-4 bg-card/80 backdrop-blur-sm border border-secondary/20 rounded-lg p-4 glow-secondary animate-float">
                <div className="text-lg font-bold text-secondary">$50K+</div>
                <div className="text-xs text-muted-foreground">Deals Closed</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-4 glow-accent animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-lg font-bold text-accent">2500+</div>
                <div className="text-xs text-muted-foreground">Vouches</div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};