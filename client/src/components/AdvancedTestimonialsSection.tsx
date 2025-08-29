import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, CheckCircle, TrendingUp, Clock, Award } from 'lucide-react';

interface AdvancedTestimonialsSectionProps {
  config: any;
}

export const AdvancedTestimonialsSection = ({ config }: AdvancedTestimonialsSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  if (!config.testimonials.enabled) return null;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-neon-gold fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const trustIndicators = [
    {
      icon: CheckCircle,
      value: "3000+",
      label: "Total Vouches",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      value: "99.8%",
      label: "Satisfaction Rate",
      color: "text-primary"
    },
    {
      icon: Clock,
      value: "< 2hrs",
      label: "Response Time",
      color: "text-secondary"
    },
    {
      icon: Award,
      value: "100%",
      label: "Project Success",
      color: "text-neon-gold"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-pink/5 to-neon-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-6">
            <Quote className="w-4 h-4 text-neon-pink mr-2" />
            <span className="text-neon-pink text-sm font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-pink via-neon-gold to-accent bg-clip-text text-transparent">
              {config.testimonials.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied clients who trusted me with their projects
          </p>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-card/20 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <indicator.icon className={`w-8 h-8 ${indicator.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold ${indicator.color} mb-1`}>
                {indicator.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {indicator.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {config.testimonials.items.map((testimonial: any, index: number) => (
            <Card 
              key={index}
              className="group p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/50" />
                  {testimonial.verified && (
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial content */}
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                {hoveredIndex === index && (
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Featured testimonial */}
        <Card className="p-8 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
          <div className="text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl text-foreground mb-6 leading-relaxed italic">
              "Working with DEATH was an absolute game-changer for our business. The level of expertise and attention to detail exceeded all expectations."
            </blockquote>
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <div className="font-semibold text-foreground mb-1">
              Tech Entrepreneur
            </div>
            <div className="text-sm text-muted-foreground">
              Fortune 500 Company
            </div>
          </div>
        </Card>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Trusted by developers worldwide
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['GitHub', 'Discord', 'Reddit', 'Stack Overflow', 'LinkedIn'].map((platform, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};