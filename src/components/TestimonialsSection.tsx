import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Shield, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  config: any;
}

export const TestimonialsSection = ({ config }: TestimonialsSectionProps) => {
  if (!config.testimonials.enabled) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-neon-gold fill-neon-gold glow-gold' 
            : 'text-muted-foreground/30'
        }`} 
      />
    ));
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/5 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:120px_120px] animate-pulse-glow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-neon-gold animate-cyber-flicker glow-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-cyber-glow">
            {config.testimonials.title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Words from those who witnessed the Reaper's digital dominance firsthand.
          </p>
          <div className="w-32 h-1 bg-gradient-glow mx-auto rounded-full glow-gold" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {config.testimonials.items.map((testimonial: any, index: number) => (
            <Card 
              key={index}
              className="group relative p-8 bg-black/80 backdrop-blur-md border border-neon-gold/20 hover:border-neon-gold/40 transition-all duration-500 hover:scale-105 glow-gold"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 left-4 text-6xl text-neon-gold/20 font-serif leading-none">
                "
              </div>
              
              {/* Verified Badge */}
              {testimonial.verified && (
                <Badge className="absolute top-4 right-4 bg-accent/20 text-accent border-accent/30 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  VERIFIED
                </Badge>
              )}

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="space-y-2">
                  <div className="font-bold text-neon-gold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-foreground/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-glow opacity-5" />
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center bg-black/60 backdrop-blur-md border border-primary/30 glow-primary">
            <div className="text-3xl font-bold text-primary mb-2">3,333+</div>
            <div className="text-foreground/70 text-sm">Total Vouches</div>
          </Card>
          
          <Card className="p-6 text-center bg-black/60 backdrop-blur-md border border-secondary/30 glow-secondary">
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-foreground/70 text-sm">Satisfaction Rate</div>
          </Card>
          
          <Card className="p-6 text-center bg-black/60 backdrop-blur-md border border-accent/30 glow-accent">
            <div className="text-3xl font-bold text-accent mb-2">24H</div>
            <div className="text-foreground/70 text-sm">Response Time</div>
          </Card>
          
          <Card className="p-6 text-center bg-black/60 backdrop-blur-md border border-neon-gold/30 glow-gold">
            <div className="text-3xl font-bold text-neon-gold mb-2">100%</div>
            <div className="text-foreground/70 text-sm">Project Success</div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-glow">
            JOIN THE <span className="text-neon-gold">ELITE CLIENTELE</span>
          </h3>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Experience the legendary service that has earned thousands of vouches and satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cyber-glow text-lg px-8 py-4" asChild>
              <a href="/contact">START YOUR PROJECT</a>
            </Button>
            <Button className="btn-neon-gold text-lg px-8 py-4" asChild>
              <a href="/services">VIEW SERVICES</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};