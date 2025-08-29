import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, Eye, GitFork } from 'lucide-react';

interface AdvancedProjectsSectionProps {
  config: any;
}

export const AdvancedProjectsSection = ({ config }: AdvancedProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  if (!config.projects.enabled) return null;

  const categories = ['all', ...new Set(config.projects.featured.map((project: any) => project.category))];

  const filteredProjects = activeFilter === 'all' 
    ? config.projects.featured 
    : config.projects.featured.filter((project: any) => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-accent text-accent-foreground';
      case 'deployed': return 'bg-primary text-primary-foreground';
      case 'mainnet': return 'bg-neon-gold text-neon-gold-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="py-24 bg-muted/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,255,255,0.03)_50%,transparent_60%)] animate-pulse" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-neon-pink/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {config.projects.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of cutting-edge projects that showcase advanced development skills and innovation
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category: string) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`capitalize px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'border-primary/20 text-primary hover:border-primary/50 hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: any, index: number) => (
            <Card 
              key={project.id} 
              className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {project.category === 'crypto' && '₿'}
                    {project.category === 'bots' && '🤖'}
                    {project.category === 'blockchain' && '⛓️'}
                    {project.category === 'web' && '🌐'}
                    {project.category === 'mobile' && '📱'}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} text-xs font-medium`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Project title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech: string, techIndex: number) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Project stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{Math.floor(Math.random() * 100) + 50}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{Math.floor(Math.random() * 30) + 10}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{Math.floor(Math.random() * 500) + 100}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to see more projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my complete portfolio with detailed case studies and technical breakdowns
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};