import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, MessageCircle, Send, Github, Clock, 
  CheckCircle, Zap, Globe, MapPin, Calendar
} from 'lucide-react';

interface AdvancedContactSectionProps {
  config: any;
}

export const AdvancedContactSection = ({ config }: AdvancedContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  if (!config.contact.enabled) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return Github;
      case 'message-circle': return MessageCircle;
      case 'send': return Send;
      default: return Mail;
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: config.contact.email,
      link: `mailto:${config.contact.email}`,
      color: 'text-primary'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      value: config.contact.discord[0],
      link: config.contact.socialLinks.find((link: any) => link.platform === 'Discord')?.url,
      color: 'text-secondary'
    },
    {
      icon: Send,
      title: 'Telegram',
      value: config.contact.socialLinks.find((link: any) => link.platform === 'Telegram')?.username,
      link: config.contact.socialLinks.find((link: any) => link.platform === 'Telegram')?.url,
      color: 'text-accent'
    }
  ];

  const availability = [
    { icon: CheckCircle, text: config.contact.availability, color: 'text-accent' },
    { icon: Clock, text: `Response time: ${config.contact.responseTime}`, color: 'text-primary' },
    { icon: Globe, text: 'Available worldwide', color: 'text-secondary' },
    { icon: MapPin, text: config.personal.location, color: 'text-neon-pink' }
  ];

  return (
    <section className="py-24 bg-muted/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,255,65,0.03)_50%,transparent_60%)] animate-pulse" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-neon-pink/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent text-sm font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              {config.contact.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/10">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Start Your Project
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background/50 border border-primary/20 rounded-md focus:border-primary/50 focus:outline-none text-foreground"
                  >
                    <option value="">Select project type</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="bot">Discord Bot</option>
                    <option value="crypto">Crypto Trading Bot</option>
                    <option value="blockchain">Blockchain/DeFi</option>
                    <option value="ai">AI/ML Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background/50 border border-primary/20 rounded-md focus:border-primary/50 focus:outline-none text-foreground"
                  >
                    <option value="">Select budget</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary/50 min-h-[120px]"
                  placeholder="Tell me about your project, requirements, and timeline..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Contact methods */}
            <Card className="p-6 bg-card/20 backdrop-blur-sm border-secondary/10">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/20 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${method.color.split('-')[1]}/10 border border-${method.color.split('-')[1]}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <method.icon className={`w-5 h-5 ${method.color}`} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {method.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-card/20 backdrop-blur-sm border-accent/10">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Availability
              </h3>
              
              <div className="space-y-4">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="font-medium text-accent">Quick Response</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 2 hours during business hours.
                </p>
              </div>
            </Card>

            {/* Social links */}
            <Card className="p-6 bg-card/20 backdrop-blur-sm border-neon-pink/10">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                {config.contact.socialLinks.map((social: any, index: number) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 rounded-xl bg-background/30 border border-primary/20 flex items-center justify-center text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                      title={social.platform}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Status badge */}
            <div className="text-center">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
                Currently accepting new projects
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};