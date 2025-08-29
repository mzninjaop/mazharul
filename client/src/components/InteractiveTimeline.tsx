import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'education' | 'achievement' | 'milestone';
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2024-Present",
    title: "Lead Cybersecurity Consultant",
    company: "Freelance / Enterprise Clients",
    location: "Global Remote",
    description: "Providing comprehensive cybersecurity solutions, ethical hacking services, and full-stack development for enterprise clients worldwide.",
    achievements: [
      "Conducted 100+ penetration tests",
      "Secured $50M+ in client infrastructure", 
      "Developed 25+ Discord bot solutions",
      "Built 50+ web applications"
    ],
    technologies: ["Python", "React", "Kubernetes", "AWS", "Penetration Testing"],
    type: "work"
  },
  {
    id: 2,
    year: "2023",
    title: "Senior Full-Stack Developer & Security Expert",
    company: "Tech Innovation Labs",
    location: "San Francisco, CA",
    description: "Led development of secure enterprise applications while conducting regular security audits and implementing DevOps practices.",
    achievements: [
      "Reduced security vulnerabilities by 95%",
      "Improved application performance by 300%",
      "Mentored 10+ junior developers",
      "Implemented CI/CD for 15+ projects"
    ],
    technologies: ["Node.js", "PostgreSQL", "Docker", "Jenkins", "Security Auditing"],
    type: "work"
  },
  {
    id: 3,
    year: "2022",
    title: "Certified Ethical Hacker (CEH)",
    company: "EC-Council",
    location: "Online Certification",
    description: "Obtained advanced certification in ethical hacking and penetration testing methodologies.",
    achievements: [
      "Scored 95% on CEH exam",
      "Specialized in web application security",
      "Advanced social engineering techniques", 
      "Red team operations certified"
    ],
    technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark"],
    type: "achievement"
  },
  {
    id: 4,
    year: "2021-2022",
    title: "Python AI Developer",
    company: "DataMind Solutions",
    location: "New York, NY",
    description: "Developed machine learning models and AI-powered automation systems for enterprise clients.",
    achievements: [
      "Built 20+ ML models",
      "Automated 80% of manual processes",
      "Increased client efficiency by 250%",
      "Published 5 research papers"
    ],
    technologies: ["Python", "TensorFlow", "scikit-learn", "pandas", "AWS SageMaker"],
    type: "work"
  },
  {
    id: 5,
    year: "2020-2021", 
    title: "Discord Bot Developer & Community Manager",
    company: "Gaming Communities Network",
    location: "Remote",
    description: "Created custom Discord bots for gaming communities and managed multiple large-scale Discord servers.",
    achievements: [
      "Developed 30+ Discord bots",
      "Managed 500K+ users across servers",
      "Created moderation systems",
      "Built economy and gaming features"
    ],
    technologies: ["Discord.py", "MongoDB", "Redis", "Heroku", "Bot Development"],
    type: "work"
  },
  {
    id: 6,
    year: "2017-2019",
    title: "Minecraft Server Developer & VPS Manager",
    company: "Gaming Infrastructure Co.",
    location: "Remote",
    description: "Specialized in Minecraft server development, custom plugin creation, and VPS hosting management.",
    achievements: [
      "Built 200+ Minecraft servers",
      "Created 50+ custom plugins",
      "Managed 100+ VPS instances",
      "Achieved 99.9% uptime"
    ],
    technologies: ["Java", "Spigot/Bukkit", "Linux", "MySQL", "Server Administration"],
    type: "work"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'work': return '💼';
    case 'education': return '🎓';
    case 'achievement': return '🏆';
    case 'milestone': return '🎯';
    default: return '📅';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'work': return 'border-primary';
    case 'education': return 'border-secondary';
    case 'achievement': return 'border-yellow-500';
    case 'milestone': return 'border-green-500';
    default: return 'border-primary';
  }
};

export const InteractiveTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newSet = new Set([...prev, index]);
              return Array.from(newSet);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PROFESSIONAL TIMELINE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey through my career evolution from coding to cybersecurity expertise
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.includes(index);
              const isSelected = selectedEvent === event.id;

              return (
                <div
                  key={event.id}
                  ref={(el) => itemRefs.current[index] = el}
                  data-index={index}
                  className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${getTypeColor(event.type)} bg-background z-10 transition-all duration-300 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`} />

                  {/* Event Card */}
                  <Card
                    className={`w-5/12 ${isLeft ? 'mr-auto pr-12' : 'ml-auto pl-12'} border-primary/20 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 cursor-pointer ${
                      isSelected ? 'border-primary shadow-lg scale-105' : ''
                    }`}
                    onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                    data-testid={`timeline-event-${event.id}`}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl">{getTypeIcon(event.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{event.year}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-medium">{event.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{event.description}</p>

                      {/* Achievements (shown when selected) */}
                      {isSelected && (
                        <div className="mb-4 animate-in fade-in duration-300">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {event.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.slice(0, isSelected ? undefined : 3).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {!isSelected && event.technologies.length > 3 && (
                          <Badge 
                            variant="secondary"
                            className="text-xs bg-muted text-muted-foreground"
                          >
                            +{event.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};