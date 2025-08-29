import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Zap, Shield, Cpu, Database, Globe } from 'lucide-react';

interface AdvancedSkillsSectionProps {
  config: any;
}

const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
  const [progress, setProgress] = useState(0);
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

    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [isVisible, skill.level, index]);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'text-accent';
    if (level >= 80) return 'text-primary';
    if (level >= 70) return 'text-secondary';
    return 'text-neon-pink';
  };

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className={`font-bold ${getSkillColor(skill.level)}`}>
          {skill.level}%
        </span>
      </div>
      <Progress 
        value={progress} 
        className="h-3 bg-muted/30" 
      />
      <p className="text-sm text-muted-foreground italic">
        {skill.description}
      </p>
    </div>
  );
};

export const AdvancedSkillsSection = ({ config }: AdvancedSkillsSectionProps) => {
  if (!config.skills.enabled) return null;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return Code;
      case 'sword': return Zap;
      case 'shield': return Shield;
      case 'database': return Database;
      case 'globe': return Globe;
      default: return Cpu;
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = ['primary', 'secondary', 'accent', 'neon-pink', 'neon-gold'];
    return colors[index % colors.length];
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-accent/5 to-neon-pink/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Cpu className="w-4 h-4 text-secondary mr-2" />
            <span className="text-secondary text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-accent to-neon-pink bg-clip-text text-transparent">
              {config.skills.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastery across the full spectrum of modern development technologies and frameworks
          </p>
        </div>

        {/* Skills categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {config.skills.categories.map((category: any, categoryIndex: number) => {
            const IconComponent = getCategoryIcon(category.icon);
            const colorClass = getCategoryColor(categoryIndex);
            
            return (
              <Card 
                key={categoryIndex}
                className="p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-${colorClass}/10 border border-${colorClass}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-6 h-6 text-${colorClass}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-6">
                  {category.skills.map((skill: any, skillIndex: number) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      index={skillIndex}
                    />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Docker', 'Kubernetes', 'AWS', 'Azure', 'MongoDB', 'Redis', 
              'GraphQL', 'TensorFlow', 'PyTorch', 'Blockchain', 'Solidity',
              'WebAssembly', 'Microservices', 'DevOps', 'CI/CD', 'Testing'
            ].map((tech, index) => (
              <Badge 
                key={index} 
                className="px-4 py-2 text-sm bg-muted/20 text-muted-foreground border border-primary/10 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </Card>
          
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </Card>
          
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300">
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </Card>
        </div>
      </div>
    </section>
  );
};