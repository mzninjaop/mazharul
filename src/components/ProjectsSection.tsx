import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Crown, Skull, Zap, Shield } from 'lucide-react';

interface ProjectsSectionProps {
  config: any;
}

export const ProjectsSection = ({ config }: ProjectsSectionProps) => {
  if (!config.projects.enabled) return null;

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'ACTIVE': return Zap;
      case 'DEPLOYED': return Crown;
      case 'MAINNET': return Shield;
      default: return Skull;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ACTIVE': return 'text-accent border-accent glow-accent';
      case 'DEPLOYED': return 'text-primary border-primary glow-primary';
      case 'MAINNET': return 'text-secondary border-secondary glow-secondary';
      default: return 'text-foreground border-muted';
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/5 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:150px_150px] animate-pulse-glow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Skull className="w-16 h-16 text-primary animate-cyber-flicker glow-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-cyber-glow">
            {config.projects.title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Witness the digital weapons forged in the depths of code. Each project a testament to elite craftsmanship.
          </p>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto rounded-full glow-primary" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {config.projects.featured.map((project: any, index: number) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <Card 
                key={project.id}
                className="group relative overflow-hidden bg-black/80 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 glow-primary"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Status Badge */}
                  <Badge className={`absolute top-4 right-4 flex items-center gap-2 ${getStatusColor(project.status)}`}>
                    <StatusIcon className="w-4 h-4" />
                    {project.status}
                  </Badge>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-glow text-black font-bold border-0">
                      <Crown className="w-4 h-4 mr-1" />
                      ELITE
                    </Badge>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-cyber-glow group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/80 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-muted/30 text-foreground/60 hover:border-primary hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="btn-cyber-glow flex-1"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DEPLOY
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="btn-neon-pink"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-cyber opacity-5" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Project Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-black/60 backdrop-blur-md border border-primary/30 glow-primary group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:text-cyber-glow transition-colors">
              100+
            </div>
            <div className="text-foreground/70 font-medium">
              GitHub Repositories
            </div>
          </Card>
          
          <Card className="p-8 text-center bg-black/60 backdrop-blur-md border border-secondary/30 glow-secondary group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-cyber-glow transition-colors">
              50K+
            </div>
            <div className="text-foreground/70 font-medium">
              Lines of Code
            </div>
          </Card>
          
          <Card className="p-8 text-center bg-black/60 backdrop-blur-md border border-accent/30 glow-accent group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:text-cyber-glow transition-colors">
              24/7
            </div>
            <div className="text-foreground/70 font-medium">
              System Uptime
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-glow">
            READY TO BUILD YOUR <span className="text-primary">DIGITAL EMPIRE</span>?
          </h3>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let the Reaper forge your vision into reality. Contact me for custom development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cyber-glow text-lg px-8 py-4" asChild>
              <a href="/contact">
                <Skull className="w-5 h-5 mr-2" />
                HIRE THE REAPER
              </a>
            </Button>
            <Button className="btn-neon-gold text-lg px-8 py-4" asChild>
              <a href="/portfolio">
                <Crown className="w-5 h-5 mr-2" />
                VIEW FULL ARSENAL
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-8 w-3 h-24 bg-gradient-cyber rounded-full glow-primary animate-float opacity-40" />
      <div className="absolute bottom-32 right-8 w-3 h-24 bg-gradient-cyber rounded-full glow-secondary animate-float opacity-40" style={{ animationDelay: '2s' }} />
    </section>
  );
};