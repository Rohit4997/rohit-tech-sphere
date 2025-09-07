import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, TrendingUp, Users, Code, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Moving Tech Innovations (Namma Yatri)",
      position: "SDE-1",
      duration: "March 2024 - Present",
      location: "India",
      type: "Full-time",
      achievements: [
        "Crafted and launched the flagship subscription revenue system, key to achieving financial independence",
        "Spearheaded city-by-city scaling of Namma Yatri, focusing on rapid MVP launches and user acquisition",
        "Architected a flexible, multi-merchant configuration system supporting 8-10 app flavors from single codebase",
        "Replaced third-party SDKs with in-house solutions, significantly boosting platform popularity",
        "Built full-stack dashboard for operations with real-time ride visualization and intelligent logging"
      ],
      skills: ["React-Native", "React.js", "Java", "TypeScript", "Node.js", "Express.js", "PureScript", "Firebase", "CI/CD"],
      isActive: true
    },
    {
      id: 2,
      company: "Juspay Technologies",
      position: "Product Engineer",
      duration: "Feb 2023 - March 2024",
      location: "India",
      type: "Full-time",
      achievements: [
        "Built Namma Yatri (India's first open mobility app) from the ground up",
        "Managed app update rollouts and supported multiple applications from single native codebase",
        "Integrated secure payment solutions for drivers with user-friendly experiences",
        "Reduced map-related costs by optimizing Google Maps API usage without sacrificing accuracy"
      ],
      skills: ["React-Native", "Android/iOS", "Java", "TypeScript", "Objective C", "Firebase", "App Release Management"],
      isActive: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-electric-blue/15 rounded-full blur-2xl animate-scale-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 text-6xl opacity-5 animate-rotate-slow text-neon-pink">⚙️</div>
        <div className="absolute bottom-1/4 left-1/3 text-4xl opacity-5 animate-bounce-gentle text-neon-green">🚀</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            💼 Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            🚀 Building scalable solutions and driving innovation in the mobility space
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative mb-16 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background z-10 ${
                  exp.isActive ? 'bg-primary animate-pulse-glow' : 'bg-muted'
                }`}></div>

                {/* Experience Card */}
                <div className="ml-20">
                  <Card className="glass-card p-8 hover-lift">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-primary font-semibold">
                          {exp.company}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>

                      {exp.isActive && (
                        <Badge className="gradient-bg text-background font-semibold">
                          Current
                        </Badge>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="border-primary/50 text-primary hover:bg-primary/10 transition-smooth"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="text-center glass-card p-6 hover-lift animate-glow-pulse">
            <TrendingUp className="w-8 h-8 text-neon-green mx-auto mb-3" />
            <div className="text-3xl font-bold gradient-text mb-2">2+</div>
            <div className="text-muted-foreground">📅 Years Experience</div>
          </div>
          
          <div className="text-center glass-card p-6 hover-lift animate-glow-pulse" style={{ animationDelay: '0.5s' }}>
            <Code className="w-8 h-8 text-neon-purple mx-auto mb-3" />
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground">📱 App Flavors Built</div>
          </div>
          
          <div className="text-center glass-card p-6 hover-lift animate-glow-pulse" style={{ animationDelay: '1s' }}>
            <Zap className="w-8 h-8 text-neon-orange mx-auto mb-3" />
            <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
            <div className="text-muted-foreground">⭐ GitHub Contributions</div>
          </div>
          
          <div className="text-center glass-card p-6 hover-lift animate-glow-pulse" style={{ animationDelay: '1.5s' }}>
            <Users className="w-8 h-8 text-electric-blue mx-auto mb-3" />
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">🎯 Uptime Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;