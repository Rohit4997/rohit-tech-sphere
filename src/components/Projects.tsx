import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Namma Yatri",
      description: "India's first open, zero-commission mobility app. Architected major features and SDKs for scalable transportation solutions.",
      longDescription: "Built from the ground up with focus on accessibility, scale, and user experience. Implemented real-time location tracking, payment integrations, and multi-city support.",
      technologies: ["React-Native", "Java", "Objective-C", "PureScript", "Node.js", "Firebase"],
      highlights: [
        "Zero-commission model",
        "Multi-city support",
        "Real-time tracking",
        "Open-source ecosystem"
      ],
      stats: {
        users: "1M+",
        cities: "8+",
        rides: "5M+"
      },
      category: "Mobile App",
      featured: true
    },
    {
      id: 2,
      title: "Multi-Merchant SDK System",
      description: "Architected configuration system for 8+ app flavors from single codebase, enabling rapid scaling and customization.",
      longDescription: "Built a flexible, modular SDK system that allows multiple merchants to customize their applications while maintaining a single codebase for easier maintenance and updates.",
      technologies: ["React-Native", "Node.js", "TypeScript", "Modular Architecture"],
      highlights: [
        "Single codebase architecture",
        "8+ app flavors supported",
        "Rapid deployment system",
        "Scalable configuration"
      ],
      stats: {
        apps: "8+",
        merchants: "10+",
        deployments: "50+"
      },
      category: "SDK/Framework",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Gym Application",
      description: "Custom Android app for gym business management with Firebase integration and XML-based UI design.",
      longDescription: "Comprehensive gym management solution with member tracking, payment processing, workout plans, and business analytics.",
      technologies: ["Java", "Android", "Firebase", "XML", "SQLite"],
      highlights: [
        "Member management",
        "Payment integration",
        "Workout tracking",
        "Business analytics"
      ],
      stats: {
        members: "500+",
        gyms: "5+",
        workouts: "1000+"
      },
      category: "Mobile App",
      featured: false
    },
    {
      id: 4,
      title: "Real-Time Location Engine",
      description: "Built advanced wait-time and location algorithms for better user experience in mobility applications.",
      longDescription: "Sophisticated location tracking and prediction system that optimizes wait times and improves accuracy for ride-sharing applications.",
      technologies: ["Node.js", "React-Native", "Google Maps API", "Real-time Systems"],
      highlights: [
        "Real-time tracking",
        "Wait-time optimization",
        "Location accuracy",
        "Performance monitoring"
      ],
      stats: {
        accuracy: "95%+",
        latency: "<100ms",
        requests: "1M+/day"
      },
      category: "Backend System",
      featured: false
    },
    {
      id: 5,
      title: "Automated Release Pipelines",
      description: "80% reduction in deployment time by automating CI/CD for mobile and web applications.",
      longDescription: "Comprehensive automation system for building, testing, and deploying applications across multiple platforms with quality gates and rollback capabilities.",
      technologies: ["Jenkins", "GitHub Actions", "Docker", "CI/CD", "Automation"],
      highlights: [
        "80% time reduction",
        "Automated testing",
        "Quality gates",
        "Rollback capabilities"
      ],
      stats: {
        deployments: "200+",
        success: "99.5%",
        time: "80% faster"
      },
      category: "DevOps",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/3 text-8xl opacity-5 animate-rotate-slow text-neon-orange">🚀</div>
        <div className="absolute bottom-1/3 right-1/3 text-6xl opacity-5 animate-bounce-gentle text-electric-blue">💻</div>
        <div className="absolute top-2/3 left-1/4 text-4xl opacity-5 animate-float text-neon-purple">⚡</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            🚀 Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            💡 Showcasing impactful solutions that drive innovation and scale
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card p-8 hover-lift group animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <Badge className="gradient-bg text-background text-xs font-semibold">
                      FEATURED
                    </Badge>
                  </div>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    {project.category}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-4 mb-6">
                <p className="text-foreground font-medium">
                  {project.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-primary" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
                {Object.entries(project.stats).map(([key, value], i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-primary">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">
            🔧 Other <span className="text-primary">Notable Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass-card p-6 hover-lift group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h4>
                      <Badge variant="outline" className="border-accent/50 text-accent text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center p-3 bg-muted/10 rounded">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i}>
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-primary/20 text-primary text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10 flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10 flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🤝 Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              ✨ I'm always excited to work on innovative projects and solve challenging problems.
            </p>
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-smooth animate-scale-pulse">
              <Star className="w-5 h-5 mr-2" />
              🌟 Let's Build Something Amazing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
