import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Zap, Skull, Target } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/config.json')
      .then(response => response.json())
      .then(data => setConfig(data))
      .catch(error => console.error('Error loading config:', error));
  }, []);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4 glow-primary"></div>
          <p className="text-xl text-primary">Loading...</p>
        </div>
      </div>
    );
  }
  
  const projects = [
    {
      id: 1,
      title: "CRYPTO REAPER BOT",
      description: "Automated crypto trading bot that harvests profits while you sleep. Built with Python and machine learning algorithms.",
      category: "crypto",
      tech: ["Python", "TensorFlow", "Binance API", "WebSocket"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      status: "ACTIVE"
    },
    {
      id: 2,
      title: "SHADOW DISCORD BOT",
      description: "Ultimate Discord management bot with moderation, economy, and custom features. Serves 10,000+ servers.",
      category: "bots",
      tech: ["Python", "Discord.py", "PostgreSQL", "Redis"],
      image: "/placeholder.svg", 
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      status: "DEPLOYED"
    },
    {
      id: 3,
      title: "CYBER MARKETPLACE",
      description: "Dark-themed e-commerce platform with crypto payments and secure transactions.",
      category: "web",
      tech: ["React", "Node.js", "Stripe", "Web3"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
      status: "LIVE"
    },
    {
      id: 4,
      title: "AI CODE ASSASSIN",
      description: "AI-powered code generation tool that writes perfect code from natural language descriptions.",
      category: "ai",
      tech: ["Python", "OpenAI", "FastAPI", "React"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      status: "BETA"
    },
    {
      id: 5,
      title: "BLOCKCHAIN EMPIRE",
      description: "Complete DeFi platform with staking, yield farming, and NFT marketplace.",
      category: "blockchain",
      tech: ["Solidity", "React", "Web3.js", "IPFS"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
      status: "MAINNET"
    },
    {
      id: 6,
      title: "MOBILE DESTROYER",
      description: "High-performance mobile game with real-time multiplayer and in-app purchases.",
      category: "mobile",
      tech: ["React Native", "Firebase", "Unity", "C#"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
      status: "PUBLISHED"
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL WEAPONS', icon: Target },
    { id: 'crypto', name: 'CRYPTO BOTS', icon: Zap },
    { id: 'bots', name: 'DISCORD BOTS', icon: Skull },
    { id: 'web', name: 'WEB APPS', icon: Eye },
    { id: 'ai', name: 'AI TOOLS', icon: Target },
    { id: 'blockchain', name: 'BLOCKCHAIN', icon: Zap },
    { id: 'mobile', name: 'MOBILE APPS', icon: Skull }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ACTIVE': return 'text-accent border-accent glow-accent';
      case 'DEPLOYED': return 'text-primary border-primary glow-primary';
      case 'LIVE': return 'text-secondary border-secondary glow-secondary';
      case 'BETA': return 'text-neon-gold border-neon-gold glow-gold';
      case 'MAINNET': return 'text-neon-pink border-neon-pink glow-pink';
      default: return 'text-foreground border-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation config={config} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-glow" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cyber-glow">
            <span className="text-primary">DEATH'S</span> ARSENAL
          </h1>
          <p className="text-2xl text-muted-foreground mb-12">
            Witness the Digital Weapons Forged in Code
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`btn-cyber ${filter === category.id ? 'bg-primary text-primary-foreground glow-primary' : ''}`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 ${project.featured ? 'glow-primary ring-2 ring-primary/20' : ''}`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-glow text-background">
                      FEATURED
                    </Badge>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-cyber-glow group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="text-xs border-muted text-muted-foreground hover:border-primary hover:text-primary transition-colors"
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
                        <Eye className="w-4 h-4 mr-2" />
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
                  <div className="absolute inset-0 bg-gradient-cyber opacity-10" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cyber-glow">
            READY TO <span className="text-primary">DOMINATE</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's forge your digital empire together. Contact the Reaper for custom development.
          </p>
          <Button className="btn-cyber-glow text-lg px-8 py-4" asChild>
            <a href="/contact">HIRE THE REAPER</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;