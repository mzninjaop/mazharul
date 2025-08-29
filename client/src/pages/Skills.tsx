import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, Database, Cloud, Shield, Brain, Gamepad2, 
  Zap, Skull, Target, Crown, Swords, Flame 
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = {
    languages: {
      title: "DEADLY LANGUAGES",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "Python", level: 98, icon: "🐍", description: "The serpent's language - my weapon of choice" },
        { name: "JavaScript", level: 95, icon: "⚡", description: "Lightning-fast frontend domination" },
        { name: "TypeScript", level: 92, icon: "💎", description: "Type-safe empire building" },
        { name: "Solidity", level: 88, icon: "⛓️", description: "Blockchain mastery and smart contracts" },
        { name: "C++", level: 85, icon: "⚔️", description: "Low-level system destruction" },
        { name: "C#", level: 82, icon: "🛡️", description: "Microsoft stack conquest" },
        { name: "Java", level: 80, icon: "☕", description: "Enterprise-level warfare" },
        { name: "Go", level: 78, icon: "🚀", description: "Concurrent programming supremacy" },
        { name: "Rust", level: 75, icon: "🦀", description: "Memory-safe systems programming" }
      ]
    },
    frameworks: {
      title: "FRAMEWORK ARSENAL",
      icon: Swords,
      color: "text-secondary",
      skills: [
        { name: "React", level: 96, icon: "⚛️", description: "Frontend empire builder" },
        { name: "Next.js", level: 94, icon: "▲", description: "Full-stack dominance" },
        { name: "Django", level: 90, icon: "🎯", description: "Python web framework mastery" },
        { name: "FastAPI", level: 88, icon: "🏃‍♂️", description: "High-performance API creation" },
        { name: "Express.js", level: 85, icon: "🚂", description: "Node.js backend excellence" },
        { name: "Vue.js", level: 82, icon: "💚", description: "Progressive framework control" },
        { name: "Angular", level: 78, icon: "🅰️", description: "Enterprise frontend solutions" },
        { name: "Flask", level: 88, icon: "🧪", description: "Lightweight Python web magic" }
      ]
    },
    databases: {
      title: "DATA DOMINION",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "PostgreSQL", level: 92, icon: "🐘", description: "Advanced relational database mastery" },
        { name: "MongoDB", level: 90, icon: "🍃", description: "NoSQL document domination" },
        { name: "Redis", level: 88, icon: "💎", description: "In-memory data structure supremacy" },
        { name: "MySQL", level: 85, icon: "🐬", description: "Traditional SQL mastery" },
        { name: "Firebase", level: 83, icon: "🔥", description: "Real-time database control" },
        { name: "Supabase", level: 87, icon: "⚡", description: "Open-source Firebase alternative" },
        { name: "SQLite", level: 80, icon: "💽", description: "Embedded database expertise" }
      ]
    },
    cloud: {
      title: "CLOUD EMPIRE",
      icon: Cloud,
      color: "text-neon-pink",
      skills: [
        { name: "AWS", level: 90, icon: "☁️", description: "Amazon cloud architecture mastery" },
        { name: "Google Cloud", level: 85, icon: "🌐", description: "GCP infrastructure dominance" },
        { name: "Azure", level: 82, icon: "🔵", description: "Microsoft cloud solutions" },
        { name: "Docker", level: 88, icon: "🐳", description: "Containerization supremacy" },
        { name: "Kubernetes", level: 85, icon: "⚙️", description: "Container orchestration mastery" },
        { name: "Vercel", level: 90, icon: "▲", description: "Serverless deployment excellence" },
        { name: "Heroku", level: 88, icon: "💜", description: "PaaS deployment mastery" }
      ]
    },
    security: {
      title: "CYBER DEFENSE",
      icon: Shield,
      color: "text-neon-gold",
      skills: [
        { name: "Penetration Testing", level: 85, icon: "🔓", description: "Ethical hacking expertise" },
        { name: "Cryptography", level: 88, icon: "🔐", description: "Data encryption mastery" },
        { name: "OAuth & JWT", level: 90, icon: "🛡️", description: "Authentication security" },
        { name: "SSL/TLS", level: 87, icon: "🔒", description: "Transport layer security" },
        { name: "Blockchain Security", level: 89, icon: "⛓️", description: "Smart contract auditing" },
        { name: "OWASP", level: 86, icon: "🎯", description: "Web application security" }
      ]
    },
    ai: {
      title: "AI NECROMANCY",
      icon: Brain,
      color: "text-primary",
      skills: [
        { name: "Machine Learning", level: 88, icon: "🤖", description: "Intelligent system creation" },
        { name: "Deep Learning", level: 85, icon: "🧠", description: "Neural network mastery" },
        { name: "OpenAI API", level: 92, icon: "✨", description: "GPT integration expertise" },
        { name: "TensorFlow", level: 83, icon: "🔥", description: "Google's ML framework" },
        { name: "PyTorch", level: 80, icon: "🔦", description: "Dynamic neural networks" },
        { name: "Computer Vision", level: 78, icon: "👁️", description: "Image processing mastery" },
        { name: "NLP", level: 85, icon: "💬", description: "Natural language processing" }
      ]
    }
  };

  const achievements = [
    { title: "CRYPTO REAPER", description: "Built 10+ trading bots", icon: "💰" },
    { title: "BOT COMMANDER", description: "Created 50+ Discord bots", icon: "🤖" },
    { title: "FULL-STACK EMPEROR", description: "500+ complete applications", icon: "👑" },
    { title: "BLOCKCHAIN PHANTOM", description: "20+ DeFi protocols", icon: "⛓️" },
    { title: "AI NECROMANCER", description: "15+ AI-powered tools", icon: "🧠" },
    { title: "SECURITY GHOST", description: "Zero security breaches", icon: "🛡️" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation config={{ navigation: { items: [] } }} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,255,255,0.05)_50%,transparent_60%)] animate-pulse-glow" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cyber-glow">
            <span className="text-primary">REAPER'S</span> SKILLS
          </h1>
          <p className="text-2xl text-muted-foreground mb-12">
            8+ Years of Digital Mastery Across Every Domain
          </p>
        </div>
      </section>

      {/* Skills Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-12 bg-card/50 backdrop-blur-sm">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:block text-xs font-bold">
                      {category.title}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-4 ${category.color} text-cyber-glow`}>
                    {category.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                        </div>
                        <Badge 
                          className={`${category.color} border-current`}
                          variant="outline"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      <Progress 
                        value={skill.level} 
                        className="mb-4"
                      />
                      
                      <p className={`text-sm text-muted-foreground transition-all duration-300 ${
                        hoveredSkill === skill.name ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {skill.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyber-glow">
            <span className="text-primary">LEGENDARY</span> ACHIEVEMENTS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-card/30 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 group glow-secondary"
              >
                <div className="text-4xl mb-4 group-hover:animate-pulse-glow">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-cyber-glow transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cyber-glow">
            NEED THESE <span className="text-primary">SKILLS</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The Reaper's arsenal is at your service. Let's build something legendary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cyber-glow text-lg px-8 py-4" asChild>
              <a href="/contact">HIRE THE REAPER</a>
            </Button>
            <Button className="btn-neon-pink text-lg px-8 py-4" asChild>
              <a href="/portfolio">VIEW ARSENAL</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;