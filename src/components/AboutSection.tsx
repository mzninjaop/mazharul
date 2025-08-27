import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User, Award, MapPin, Calendar } from 'lucide-react';

interface AboutSectionProps {
  config: any;
}

export const AboutSection = ({ config }: AboutSectionProps) => {
  const aboutData = {
    title: "About Me",
    content: config.personal.bio,
    badges: [
      `${config.personal.yearsExperience}+ Years Experience`,
      "Full-Stack Expert",
      "Modern Technologies",
      "Professional Developer",
      "Remote Work",
      "Team Collaboration"
    ]
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              {aboutData.content}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-modern text-center">
                <User className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{config.personal.yearsExperience}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="card-modern text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{config.personal.location}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{config.personal.availability}</span>
              </div>
            </div>
          </div>

          {/* Skills & Badges */}
          <div className="space-y-8">
            <Card className="card-modern">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Professional Status */}
            <Card className="card-modern">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-primary font-medium">{config.personal.status}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Discord</span>
                  <span className="text-foreground">{config.personal.discord[0]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="text-green-400">Within 24 hours</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};