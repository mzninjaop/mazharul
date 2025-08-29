import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of security audits do you perform?",
    answer: "I conduct comprehensive penetration testing, vulnerability assessments, web application security testing, network security audits, and red team operations. My ethical hacking approach ensures thorough identification of security weaknesses while maintaining complete confidentiality."
  },
  {
    question: "How experienced are you with Python development?",
    answer: "I'm a Python master with 8+ years of experience developing AI applications, automation scripts, web scrapers, Discord bots, machine learning models, and enterprise-level backend systems. I specialize in Django, FastAPI, TensorFlow, and custom automation solutions."
  },
  {
    question: "Can you create custom Discord bots for my server?",
    answer: "Absolutely! I've created 50+ Discord bots with features like moderation, economy systems, music, games, custom commands, database integration, and advanced automation. I can build anything from simple utility bots to complex multi-server networks."
  },
  {
    question: "What's included in your VPS hosting services?",
    answer: "My VPS hosting includes server setup, security hardening, monitoring, backups, performance optimization, 24/7 support, and maintenance. I manage Linux/Windows servers, implement load balancing, and ensure 99.9% uptime with enterprise-grade infrastructure."
  },
  {
    question: "Do you offer ongoing security monitoring?",
    answer: "Yes! I provide continuous security monitoring, threat detection, incident response, regular vulnerability scans, and monthly security reports. My enterprise packages include 24/7 monitoring with immediate alerts for any security issues."
  },
  {
    question: "How do you ensure project confidentiality?",
    answer: "I maintain strict confidentiality through NDAs, secure development practices, encrypted communications, and isolated development environments. All client data is protected with enterprise-grade security measures and never shared with third parties."
  },
  {
    question: "What's your typical project delivery time?",
    answer: "Project timelines vary based on complexity: Security audits (1-2 weeks), Discord bots (3-7 days), web applications (2-6 weeks), and enterprise solutions (1-3 months). I always provide detailed timelines upfront and keep clients updated throughout development."
  },
  {
    question: "Do you provide training and documentation?",
    answer: "Yes! Every project includes comprehensive documentation, user guides, and optional training sessions. For enterprise clients, I offer custom training programs covering security best practices, system administration, and technology implementation."
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with DEATH
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <Card 
                key={index}
                className="border-primary/20 bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/40"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Get in touch for personalized answers.
          </p>
        </div>
      </div>
    </section>
  );
};