import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Shield } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
  buttonText: string;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic Security Audit",
    price: "$299",
    period: "one-time",
    description: "Essential security assessment for small projects",
    features: [
      "Basic vulnerability scan",
      "Security report with findings",
      "Remediation recommendations",
      "Email support",
      "1 week delivery"
    ],
    icon: <Shield className="w-6 h-6" />,
    buttonText: "Get Started"
  },
  {
    name: "Professional Development",
    price: "$899",
    period: "project",
    description: "Complete full-stack development solution",
    features: [
      "Custom web application",
      "Discord bot integration",
      "Python automation scripts",
      "Database optimization",
      "Security implementation",
      "API development",
      "Mobile responsive design",
      "Priority support",
      "2-4 weeks delivery"
    ],
    highlighted: true,
    icon: <Zap className="w-6 h-6" />,
    buttonText: "Most Popular",
    badge: "RECOMMENDED"
  },
  {
    name: "Enterprise Solutions",
    price: "$2499",
    period: "monthly",
    description: "Complete cybersecurity and development package",
    features: [
      "Everything in Professional",
      "Penetration testing",
      "Red team operations",
      "24/7 monitoring",
      "Infrastructure management",
      "VPS hosting included",
      "Dedicated support team",
      "Monthly security audits",
      "Custom training sessions",
      "Unlimited revisions"
    ],
    icon: <Crown className="w-6 h-6" />,
    buttonText: "Contact Sales",
    badge: "ENTERPRISE"
  }
];

export const PricingTables = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PRICING PLANS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your cybersecurity and development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 relative transition-all duration-300 hover:scale-105 ${
                tier.highlighted
                  ? 'border-primary bg-primary/5 shadow-[0_0_30px_hsl(var(--primary)/0.3)]'
                  : 'border-primary/20 bg-card/20 backdrop-blur-sm hover:border-primary/40'
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {tier.badge}
                </Badge>
              )}

              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    tier.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground'
                }`}
                data-testid={`pricing-button-${index}`}
              >
                {tier.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="outline" className="border-primary/20 hover:border-primary/40">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};