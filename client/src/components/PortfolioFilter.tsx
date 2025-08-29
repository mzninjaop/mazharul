import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Enterprise Security Audit Platform",
    description: "Comprehensive penetration testing dashboard with automated vulnerability scanning, red team operations management, and real-time threat detection.",
    category: "Security",
    technologies: ["Python", "React", "PostgreSQL", "Docker", "Kali Linux"],
    image: "🛡️",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Discord Bot Network",
    description: "Multi-server Discord bot ecosystem with machine learning moderation, economy systems, custom commands, and advanced community management.",
    category: "Discord Bots",
    technologies: ["Python", "Discord.py", "TensorFlow", "Redis", "MongoDB"],
    image: "🤖",
    featured: true
  },
  {
    id: 3,
    title: "Blockchain Mining Pool Manager",
    description: "Full-stack cryptocurrency mining pool management system with real-time statistics, automated payouts, and worker monitoring.",
    category: "Blockchain",
    technologies: ["Node.js", "React", "Web3.js", "Ethereum", "Smart Contracts"],
    image: "⛏️"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Orchestrator",
    description: "Automated cloud deployment and management platform supporting AWS, Azure, and GCP with Kubernetes orchestration and monitoring.",
    category: "DevOps",
    technologies: ["Python", "Kubernetes", "Docker", "Terraform", "AWS"],
    image: "☁️",
    featured: true
  },
  {
    id: 5,
    title: "Real-time Chat & Collaboration Platform",
    description: "Enterprise-grade communication platform with end-to-end encryption, file sharing, video calls, and project management integration.",
    category: "Web Development",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    image: "💬"
  },
  {
    id: 6,
    title: "Ethical Hacking Training Simulator",
    description: "Interactive cybersecurity training platform with virtual labs, capture-the-flag challenges, and progress tracking for security professionals.",
    category: "Security",
    technologies: ["Python", "Django", "Vue.js", "Docker", "VirtualBox"],
    image: "🎯"
  },
  {
    id: 7,
    title: "Mobile Gaming Community Hub",
    description: "Cross-platform mobile application for gaming communities with tournaments, leaderboards, social features, and in-app purchases.",
    category: "Mobile Apps",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Push Notifications", "Stripe"],
    image: "🎮"
  },
  {
    id: 8,
    title: "IoT Device Management System",
    description: "Comprehensive IoT platform for device monitoring, firmware updates, data analytics, and remote control with enterprise security.",
    category: "IoT",
    technologies: ["Python", "MQTT", "InfluxDB", "Grafana", "Raspberry Pi"],
    image: "📡"
  }
];

const categories = ["All", "Security", "Discord Bots", "Web Development", "Blockchain", "DevOps", "Mobile Apps", "IoT"];

export const PortfolioFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = portfolioProjects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const featuredMatch = !showFeaturedOnly || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PROJECT PORTFOLIO
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my diverse range of cybersecurity, development, and infrastructure projects
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}
                data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <Button
            variant={showFeaturedOnly ? "default" : "outline"}
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`${
              showFeaturedOnly 
                ? 'bg-primary text-primary-foreground' 
                : 'border-primary/20 hover:border-primary/40'
            }`}
            data-testid="filter-featured"
          >
            <Filter className="w-4 h-4 mr-2" />
            Featured Only
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group border-primary/20 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                {/* Project Icon & Featured Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{project.image}</div>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Category */}
                <Badge 
                  variant="outline" 
                  className="mb-4 border-primary/20 text-primary"
                >
                  {project.category}
                </Badge>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge 
                      variant="secondary"
                      className="text-xs bg-muted text-muted-foreground"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground"
                      data-testid={`demo-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/20 hover:border-primary/40"
                      data-testid={`github-${project.id}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {!project.demoUrl && !project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-primary/20 hover:border-primary/40"
                      data-testid={`contact-${project.id}`}
                    >
                      Contact for Details
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No projects found for the selected filters.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("All");
                setShowFeaturedOnly(false);
              }}
              variant="outline"
              className="mt-4 border-primary/20 hover:border-primary/40"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};