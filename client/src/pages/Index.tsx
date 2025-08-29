import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { AdvancedHeroSection } from '@/components/AdvancedHeroSection';
import { AboutSection } from '@/components/AboutSection';
import { StatsSection } from '@/components/StatsSection';
import { AdvancedProjectsSection } from '@/components/AdvancedProjectsSection';
import { AdvancedSkillsSection } from '@/components/AdvancedSkillsSection';
import { AdvancedServicesSection } from '@/components/AdvancedServicesSection';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { PricingTables } from '@/components/PricingTables';
import { FAQ } from '@/components/FAQ';
import { AdvancedContactSection } from '@/components/AdvancedContactSection';
import { InteractiveParticles } from '@/components/InteractiveParticles';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LiveChat } from '@/components/LiveChat';
import { PortfolioFilter } from '@/components/PortfolioFilter';
import { InteractiveTimeline } from '@/components/InteractiveTimeline';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveParticles />
      <ThemeToggle />
      <Navigation config={config} />
      <AdvancedHeroSection config={config} />
      <AboutSection config={config} />
      <StatsSection config={config} />
      <PortfolioFilter />
      <AdvancedSkillsSection config={config} />
      <InteractiveTimeline />
      <AdvancedServicesSection config={config} />
      <PricingTables />
      <TestimonialsCarousel />
      <FAQ />
      <AdvancedContactSection config={config} />
      <LiveChat />
    </div>
  );
};

export default Index;
