import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { AdvancedHeroSection } from '@/components/AdvancedHeroSection';
import { AboutSection } from '@/components/AboutSection';
import { StatsSection } from '@/components/StatsSection';
import { AdvancedProjectsSection } from '@/components/AdvancedProjectsSection';
import { AdvancedSkillsSection } from '@/components/AdvancedSkillsSection';
import { AdvancedServicesSection } from '@/components/AdvancedServicesSection';
import { AdvancedTestimonialsSection } from '@/components/AdvancedTestimonialsSection';
import { AdvancedContactSection } from '@/components/AdvancedContactSection';
import { ParticleBackground } from '@/components/ParticleBackground';

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
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation config={config} />
        <AdvancedHeroSection config={config} />
        <AboutSection config={config} />
        <StatsSection config={config} />
        <AdvancedProjectsSection config={config} />
        <AdvancedSkillsSection config={config} />
        <AdvancedServicesSection config={config} />
        <AdvancedTestimonialsSection config={config} />
        <AdvancedContactSection config={config} />
      </div>
    </div>
  );
};

export default Index;
