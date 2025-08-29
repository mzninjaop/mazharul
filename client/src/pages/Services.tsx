import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Shield, Crown, Skull, Target, Flame, Swords } from 'lucide-react';

const Services = () => {
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
  const services = [
    {
      id: 1,
      title: "CYBER WEB DOMINATION",
      subtitle: "Full-Stack Web Applications",
      description: "Complete web applications that dominate the digital realm. From concept to deployment, I forge web empires that convert visitors into loyal subjects.",
      price: "Starting at $2,500",
      duration: "2-4 weeks",
      icon: Crown,
      color: "text-primary",
      glow: "glow-primary",
      features: [
        "React/Next.js Frontend Mastery",
        "Node.js/Python Backend Architecture", 
        "Database Design & Optimization",
        "API Development & Integration",
        "Responsive Mobile-First Design",
        "SEO & Performance Optimization",
        "Deployment & Cloud Setup",
        "3 Months Free Support"
      ],
      popular: true
    },
    {
      id: 2,
      title: "DISCORD BOT ARMY", 
      subtitle: "Custom Discord Bot Development",
      description: "Unleash the power of automation with custom Discord bots. From moderation to economy systems, I create bots that rule servers with an iron fist.",
      price: "Starting at $500",
      duration: "1-2 weeks",
      icon: Skull,
      color: "text-secondary",
      glow: "glow-secondary",
      features: [
        "Custom Commands & Features",
        "Moderation & Anti-Spam",
        "Economy & Leveling Systems",
        "Music & Entertainment",
        "Database Integration",
        "Server Analytics",
        "24/7 Hosting Setup",
        "1 Month Free Updates"
      ]
    },
    {
      id: 3,
      title: "CRYPTO REAPER BOTS",
      subtitle: "Automated Trading Systems",
      description: "AI-powered trading bots that harvest profits while you sleep. Built with advanced algorithms and risk management to dominate crypto markets.",
      price: "Starting at $3,000",
      duration: "3-5 weeks", 
      icon: Zap,
      color: "text-accent",
      glow: "glow-accent",
      features: [
        "Advanced Trading Algorithms",
        "Multi-Exchange Support",
        "Risk Management Systems",
        "Real-time Market Analysis",
        "Profit/Loss Tracking",
        "Custom Strategy Implementation",
        "Secure API Integration",
        "6 Months Support & Updates"
      ]
    },
    {
      id: 4,
      title: "MOBILE APP DESTROYER",
      subtitle: "iOS & Android Applications",
      description: "Native and cross-platform mobile applications that conquer app stores. From concept to publication, I create apps that users can't resist.",
      price: "Starting at $4,000",
      duration: "4-8 weeks",
      icon: Target,
      color: "text-neon-pink",
      glow: "glow-pink",
      features: [
        "React Native Development",
        "Native iOS/Android Options",
        "UI/UX Design Excellence",
        "Backend API Integration",
        "Push Notifications",
        "App Store Optimization",
        "Analytics Integration",
        "Post-Launch Support"
      ]
    },
    {
      id: 5,
      title: "BLOCKCHAIN EMPIRE",
      subtitle: "DeFi & Smart Contract Development",
      description: "Build your decentralized empire with custom smart contracts, DeFi protocols, and blockchain applications that revolutionize finance.",
      price: "Starting at $5,000",
      duration: "4-6 weeks",
      icon: Shield,
      color: "text-neon-gold",
      glow: "glow-gold",
      features: [
        "Smart Contract Development",
        "DeFi Protocol Creation",
        "Token & NFT Systems",
        "Web3 Frontend Integration",
        "Security Audits",
        "Multi-Chain Deployment",
        "Liquidity Pool Setup",
        "Ongoing Security Updates"
      ]
    },
    {
      id: 6,
      title: "AI NECROMANCY",
      subtitle: "AI-Powered Applications",
      description: "Harness the power of artificial intelligence to create applications that think, learn, and adapt. From chatbots to predictive analytics.",
      price: "Starting at $3,500",
      duration: "3-6 weeks",
      icon: Flame,
      color: "text-primary",
      glow: "glow-primary",
      features: [
        "Custom AI Model Training",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbot Development",
        "API Integration (OpenAI, etc.)",
        "Real-time Learning Systems",
        "Scalable AI Infrastructure"
      ]
    }
  ];

  const addOns = [
    { name: "RUSH DELIVERY", price: "+50%", description: "Half the timeline" },
    { name: "PREMIUM SUPPORT", price: "+$500", description: "6 months extended support" },
    { name: "SOURCE CODE", price: "+$1000", description: "Complete codebase ownership" },
    { name: "TRAINING SESSION", price: "+$300", description: "1-hour personalized training" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation config={config} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse-glow" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cyber-glow">
            <span className="text-primary">DEATH'S</span> SERVICES
          </h1>
          <p className="text-2xl text-muted-foreground mb-12">
            Elite Digital Solutions Forged in the Depths of Code
          </p>
          <Badge className="text-lg px-6 py-2 bg-gradient-glow text-background font-bold">
            D E A T H
          </Badge>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id}
                  className={`relative p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 ${service.glow} group ${service.popular ? 'ring-2 ring-primary/30' : ''}`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-8 bg-gradient-cyber text-background px-4 py-1 font-bold">
                      MOST POPULAR
                    </Badge>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-background/20 ${service.color} group-hover:animate-pulse-glow`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${service.color} text-cyber-glow`}>
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${service.color}`}>
                        {service.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${service.color} flex-shrink-0`} />
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full text-lg py-6 ${
                      service.popular 
                        ? 'btn-cyber-glow' 
                        : 'btn-neon-pink'
                    }`}
                    asChild
                  >
                    <a href="/contact">ORDER NOW</a>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyber-glow">
            <span className="text-primary">POWER</span> ADD-ONS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-card/30 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 glow-secondary group"
              >
                <h3 className="text-lg font-bold mb-2 text-secondary group-hover:text-cyber-glow transition-colors">
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  {addon.price}
                </div>
                <p className="text-muted-foreground text-sm">
                  {addon.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyber-glow">
            THE <span className="text-primary">REAPER'S</span> PROCESS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CONSULTATION", desc: "We discuss your vision and requirements" },
              { step: "02", title: "STRATEGY", desc: "I forge the perfect battle plan" },
              { step: "03", title: "EXECUTION", desc: "Code comes to life in the shadows" },
              { step: "04", title: "DOMINATION", desc: "Your digital empire goes live" }
            ].map((phase, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-card/20 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-4xl font-bold text-primary mb-4 group-hover:text-cyber-glow transition-colors">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cyber-glow">
            READY TO <span className="text-primary">CONQUER</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The Reaper awaits your command. Let's forge your digital destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cyber-glow text-lg px-8 py-4" asChild>
              <a href="/contact">START YOUR PROJECT</a>
            </Button>
            <Button className="btn-neon-gold text-lg px-8 py-4" asChild>
              <a href="/portfolio">VIEW PAST CONQUESTS</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;