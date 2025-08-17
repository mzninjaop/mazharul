import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { StatsSection } from '@/components/StatsSection';

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
    <div className="min-h-screen bg-background">
      <Navigation config={config} />
      <HeroSection config={config} />
      <AboutSection config={config} />
      <StatsSection config={config} />
    </div>
  );
};

export default Index;
