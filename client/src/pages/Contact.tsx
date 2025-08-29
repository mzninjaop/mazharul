import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  MessageCircle, Mail, Clock, Zap, Shield, Crown, 
  Send, User, FileText, DollarSign 
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "MESSAGE SENT TO THE REAPER",
          description: "I'll respond within 24 hours with a battle plan.",
        });
        setFormData({ name: '', email: '', service: '', budget: '', timeline: '', message: '' });
      } else {
        const error = await response.json();
        toast({
          title: "MESSAGE FAILED",
          description: error.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "CONNECTION ERROR",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "DISCORD REALM",
      primary: "@vouch.darkex",
      secondary: "@catuop",
      description: "Primary communication channel",
      color: "text-primary",
      glow: "glow-primary"
    },
    {
      icon: Mail,
      title: "EMAIL FORTRESS",
      primary: "death@reaper.dev",
      secondary: "Available 24/7",
      description: "Professional inquiries",
      color: "text-secondary", 
      glow: "glow-secondary"
    },
    {
      icon: Clock,
      title: "RESPONSE TIME",
      primary: "< 24 Hours",
      secondary: "Usually within 6h",
      description: "Lightning-fast replies",
      color: "text-accent",
      glow: "glow-accent"
    }
  ];

  const services = [
    "Web Development",
    "Discord Bot Creation", 
    "Crypto Trading Bots",
    "Mobile Applications",
    "Blockchain/DeFi",
    "AI/ML Solutions",
    "Custom Software",
    "Consultation"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000", 
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Let's Discuss"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation config={{ navigation: { items: [] } }} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse-glow" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cyber-glow">
            <span className="text-primary">SUMMON</span> THE REAPER
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Ready to forge your digital empire? Let's begin the conquest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-lg px-4 py-2 bg-gradient-cyber text-background">
              VERIFIED ELITE
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-gradient-glow text-background">
              8+ YEARS EXPERIENCE
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
              500+ PROJECTS
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 glow-primary">
            <h2 className="text-3xl font-bold mb-8 text-cyber-glow flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              PROJECT BRIEFING
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary">
                    NAME *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name or alias"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary">
                    EMAIL *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-primary">
                  SERVICE REQUIRED *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full p-3 rounded-lg bg-background/50 border border-primary/30 focus:border-primary text-foreground"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary">
                    BUDGET RANGE
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-3 rounded-lg bg-background/50 border border-primary/30 focus:border-primary text-foreground"
                  >
                    <option value="">Select budget...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-primary">
                    TIMELINE
                  </label>
                  <Input
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    placeholder="e.g., 2-4 weeks"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-primary">
                  PROJECT DETAILS *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your project vision, requirements, and any specific features you need..."
                  className="min-h-32 bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              <Button type="submit" className="w-full btn-cyber-glow text-lg py-6">
                <Send className="w-5 h-5 mr-2" />
                SEND TO THE REAPER
              </Button>
            </form>
          </Card>

          {/* Contact Info & Methods */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={index}
                    className={`p-6 bg-card/30 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 ${method.glow} group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-background/20 ${method.color} group-hover:animate-pulse-glow`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg ${method.color} group-hover:text-cyber-glow transition-colors`}>
                          {method.title}
                        </h3>
                        <div className="text-foreground font-medium text-lg">
                          {method.primary}
                        </div>
                        <div className="text-muted-foreground">
                          {method.secondary}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <Card className="p-8 bg-card/20 backdrop-blur-sm border-accent/20 glow-accent">
              <h3 className="text-2xl font-bold mb-6 text-accent text-cyber-glow">
                WHY CHOOSE THE REAPER?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "100% Secure & Confidential", color: "text-primary" },
                  { icon: Zap, text: "Lightning-Fast Delivery", color: "text-secondary" },
                  { icon: Crown, text: "Premium Quality Guaranteed", color: "text-accent" },
                  { icon: User, text: "24/7 Support & Updates", color: "text-neon-pink" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-foreground/90">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Testimonial Preview */}
            <Card className="p-8 bg-card/20 backdrop-blur-sm border-neon-pink/20 glow-pink">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-lg italic text-foreground/90 mb-4">
                  "DEATH delivered exactly what I needed. Professional, fast, and the code quality is insane. Will definitely work with him again!"
                </p>
                <div className="text-muted-foreground">
                  - Client Review #2,847
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyber-glow">
            <span className="text-primary">FREQUENTLY</span> ASKED
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                q: "How long does a typical project take?",
                a: "Depends on complexity. Discord bots: 1-2 weeks. Web apps: 2-4 weeks. Complex systems: 4-8 weeks."
              },
              {
                q: "Do you provide source code?",
                a: "Yes, you get full source code ownership for all custom projects. Add-on available for premium packages."
              },
              {
                q: "What's your payment structure?",
                a: "50% upfront, 50% on completion. For larger projects, we can discuss milestone-based payments."
              },
              {
                q: "Do you offer post-launch support?",
                a: "Absolutely. All projects include free support period. Extended support packages available."
              },
              {
                q: "Can you work with existing teams?",
                a: "Yes, I integrate seamlessly with existing development teams and workflows."
              },
              {
                q: "What about NDAs and confidentiality?",
                a: "100% confidential. Happy to sign NDAs and work under strict confidentiality agreements."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-primary/20">
                <h3 className="font-bold text-lg text-primary mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;