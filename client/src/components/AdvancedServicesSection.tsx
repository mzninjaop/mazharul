import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, Skull, Zap, Target, Shield, Brain, 
  Code, Globe, Smartphone, Bot, Coins, Cpu,
  ArrowRight, Star, CheckCircle
} from 'lucide-react';

interface AdvancedServicesSectionProps {
  config: any;
}

export const AdvancedServicesSection = ({ config }: AdvancedServicesSectionProps) => {
  if (!config.services.enabled) return null;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'crown': return Crown;
      case 'skull': return Skull;
      case 'zap': return Zap;
      case 'target': return Target;
      case 'shield': return Shield;
      case 'brain': return Brain;
      default: return Code;
    }
  };

  const getServiceColor = (index: number) => {
    const colors = ['primary', 'secondary', 'accent', 'neon-pink', 'neon-gold', 'neon-blue'];
    return colors[index % colors.length];
  };

  const features = [
    'Custom Development',
    '24/7 Support',
    'Source Code Included',
    'Documentation',
    'Free Updates (6 months)',
    'Money Back Guarantee'
  ];

  return (
    <section className="py-24 bg-muted/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(139,92,246,0.03)_50%,transparent_60%)] animate-pulse" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-r from-neon-pink/10 to-neon-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon-gold/10 border border-neon-gold/20 mb-6">
            <Crown className="w-4 h-4 text-neon-gold mr-2" />
            <span className="text-neon-gold text-sm font-medium">Elite Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-gold via-primary to-secondary bg-clip-text text-transparent">
              {config.services.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium development services that transform your ideas into digital reality
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {config.services.items.map((service: any, index: number) => {
            const IconComponent = getServiceIcon(service.icon);
            const colorClass = getServiceColor(index);
            
            return (
              <Card 
                key={index}
                className="group p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${colorClass}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Service icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-${colorClass}/10 border border-${colorClass}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${colorClass}`} />
                  </div>

                  {/* Service title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Service description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className={`text-2xl font-bold text-${colorClass} mb-1`}>
                      {service.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Starting price
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full bg-transparent border border-${colorClass}/30 text-${colorClass} hover:bg-${colorClass}/10 transition-all duration-300 group-hover:border-${colorClass}/60`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Features section */}
        <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              What's Included
            </h3>
            <p className="text-muted-foreground">
              Every project comes with premium features and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: 'Planning', desc: 'Requirements analysis and architecture design' },
              { icon: Code, title: 'Development', desc: 'Clean, efficient code implementation' },
              { icon: Cpu, title: 'Testing', desc: 'Comprehensive testing and optimization' },
              { icon: Zap, title: 'Deployment', desc: 'Launch and ongoing support' },
            ].map((step, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Star className="w-8 h-8 text-neon-gold" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                Start Project
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-xl">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};