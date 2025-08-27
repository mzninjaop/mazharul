import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign, CheckCircle, Star, Heart, Code, Users, Award, Zap } from 'lucide-react';

interface StatsSectionProps {
  config: any;
}

const iconMap = {
  'dollar-sign': DollarSign,
  'check-circle': CheckCircle,
  'star': Star,
  'heart': Heart,
  'code': Code,
  'users': Users,
  'award': Award,
  'zap': Zap
};

export const StatsSection = ({ config }: StatsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const modernStats = [
    {
      number: "50",
      suffix: "+",
      label: "Projects Delivered",
      icon: "check-circle"
    },
    {
      number: "100",
      suffix: "+",
      label: "Happy Clients",
      icon: "heart"
    },
    {
      number: "5",
      suffix: "+",
      label: "Years Experience",
      icon: "award"
    },
    {
      number: "24",
      suffix: "h",
      label: "Response Time",
      icon: "zap"
    }
  ];

  const AnimatedNumber = ({ number, suffix }: { number: string; suffix: string }) => {
    const [displayNumber, setDisplayNumber] = useState(0);
    const targetNumber = parseInt(number);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const increment = targetNumber / 30;
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetNumber) {
            setDisplayNumber(targetNumber);
            clearInterval(timer);
          } else {
            setDisplayNumber(Math.floor(start));
          }
        }, 50);

        return () => clearInterval(timer);
      }
    }, [isVisible, targetNumber]);

    return (
      <span className="text-3xl md:text-4xl font-bold text-primary">
        {displayNumber}{suffix}
      </span>
    );
  };

  return (
    <section id="stats" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Professional Metrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my commitment to excellence and client satisfaction
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-6" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {modernStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Code;
            
            return (
              <Card key={index} className="card-modern text-center hover-lift group">
                <div className="p-6">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                  <p className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="card-glass text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Quality Focused</h3>
            <p className="text-muted-foreground text-sm">
              Every project is built with attention to detail and modern best practices
            </p>
          </Card>
          
          <Card className="card-glass text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</h3>
            <p className="text-muted-foreground text-sm">
              98% client satisfaction rate with ongoing support and maintenance
            </p>
          </Card>
          
          <Card className="card-glass text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Modern Technologies</h3>
            <p className="text-muted-foreground text-sm">
              Always using the latest tech stack for optimal performance and scalability
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};