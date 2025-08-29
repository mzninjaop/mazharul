import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "CEO",
    company: "TechCorp Gaming",
    content: "DEATH delivered an incredible Minecraft server setup that exceeded all expectations. The security implementation and custom plugins are absolutely top-tier!",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Security Director",
    company: "CyberShield Inc",
    content: "Outstanding penetration testing and security audit. Found vulnerabilities we never knew existed and provided comprehensive solutions. A true ethical hacking expert!",
    rating: 5,
    avatar: "👩‍💻"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Community Manager",
    company: "Discord Servers Network",
    content: "The Discord bots DEATH created are phenomenal! Automated our entire server management and increased engagement by 300%. Python mastery at its finest!",
    rating: 5,
    avatar: "🎮"
  },
  {
    id: 4,
    name: "Elena Vasquez",
    role: "Startup Founder",
    company: "NextGen Solutions",
    content: "Full-stack development excellence! Built our entire platform from scratch with perfect security implementation. The AI integration is revolutionary!",
    rating: 5,
    avatar: "🚀"
  },
  {
    id: 5,
    name: "David Kim",
    role: "IT Director",
    company: "Enterprise Systems",
    content: "VPS management and infrastructure setup was flawless. 99.9% uptime and lightning-fast performance. Best hosting provider we've ever worked with!",
    rating: 5,
    avatar: "⚡"
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CLIENT TESTIMONIALS
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          What experts say about working with DEATH
        </p>

        <div className="relative">
          <Card className="p-8 md:p-12 bg-card/20 backdrop-blur-sm border-primary/20 relative overflow-hidden group">
            {/* Quote icon */}
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
            
            {/* Content */}
            <div className="space-y-6">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{currentTestimonial.avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-primary">{currentTestimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="border-primary/20 hover:border-primary/40"
                data-testid="testimonial-prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-primary/30 hover:bg-primary/60'
                    }`}
                    data-testid={`testimonial-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-primary/20 hover:border-primary/40"
                data-testid="testimonial-next"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};