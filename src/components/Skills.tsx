import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Smartphone, Server, Cloud, Database, Wrench, Star, Trophy, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-500" },
        { name: "Java", level: 88, color: "bg-red-500" },
        { name: "PureScript", level: 75, color: "bg-purple-500" },
        { name: "C/C++", level: 70, color: "bg-gray-500" },
        { name: "Objective C", level: 65, color: "bg-orange-500" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95, color: "bg-cyan-500" },
        { name: "Android SDK", level: 85, color: "bg-green-500" },
        { name: "iOS Development", level: 80, color: "bg-gray-600" },
        { name: "App Store Management", level: 90, color: "bg-blue-600" },
        { name: "Native Modules", level: 85, color: "bg-indigo-500" }
      ]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 88, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "REST APIs", level: 90, color: "bg-teal-500" },
        { name: "Kafka", level: 75, color: "bg-orange-600" },
        { name: "Microservices", level: 80, color: "bg-purple-600" }
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: [
        { name: "Firebase", level: 90, color: "bg-yellow-600" },
        { name: "ClickHouse", level: 70, color: "bg-red-600" },
        { name: "Grafana", level: 75, color: "bg-orange-500" },
        { name: "Real-time Systems", level: 85, color: "bg-pink-500" }
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      skills: [
        { name: "CI/CD", level: 85, color: "bg-blue-600" },
        { name: "Jenkins", level: 80, color: "bg-blue-700" },
        { name: "GitHub Actions", level: 88, color: "bg-gray-800" },
        { name: "Git/GitHub", level: 95, color: "bg-black" },
        { name: "Docker", level: 70, color: "bg-cyan-600" }
      ]
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90, color: "bg-cyan-500" },
        { name: "Redux", level: 85, color: "bg-purple-500" },
        { name: "Functional Programming", level: 80, color: "bg-indigo-600" },
        { name: "TurboModules", level: 75, color: "bg-teal-600" }
      ]
    }
  ];

  const techStack = [
    "React Native", "React.js", "JavaScript", "TypeScript", "Java", "Node.js", 
    "PureScript", "Firebase", "CI/CD", "Android", "iOS", "Git", "Kafka", "Express.js"
  ];

  const githubStats = {
    languages: [
      { name: "JavaScript", percentage: 48, color: "bg-yellow-500" },
      { name: "TypeScript", percentage: 24, color: "bg-blue-500" },
      { name: "Kotlin", percentage: 14, color: "bg-orange-500" },
      { name: "Java", percentage: 8, color: "bg-red-500" },
      { name: "JSON", percentage: 4, color: "bg-gray-500" },
      { name: "Others", percentage: 2, color: "bg-purple-500" }
    ]
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-16 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 text-7xl opacity-5 animate-rotate-slow text-neon-orange">⚙️</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-5 animate-bounce-gentle text-electric-blue">💻</div>
        <div className="absolute top-3/4 right-1/3 text-3xl opacity-5 animate-scale-pulse text-neon-pink">🔧</div>
        <div className="absolute top-1/6 left-1/5 text-4xl opacity-5 animate-float text-neon-green">⚡</div>
      </div>
      
      <div id="skills-section" className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            🛠️ Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            💡 Passionate about cutting-edge technologies and building scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
              <Card 
              key={categoryIndex} 
              className={`glass-card p-6 hover-lift animate-slide-up animate-glow-pulse`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                      style={{ 
                        transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            🚀 Technology <span className="text-primary">Stack</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Badge 
                key={index}
                className={`
                  px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 cursor-pointer
                  animate-fade-in
                  ${index % 3 === 0 ? 'gradient-bg text-background' : 
                    index % 3 === 1 ? 'border-primary text-primary bg-primary/10' : 
                    'border-accent text-accent bg-accent/10'}
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                variant={index % 3 === 0 ? 'default' : 'outline'}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Language Distribution */}
          <Card className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-neon-purple" />
              📊 GitHub Language Distribution
            </h3>
            
            <div className="space-y-4">
              {githubStats.languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`${lang.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${lang.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* GitHub Activity */}
          <Card className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Badge className="gradient-bg animate-scale-pulse">
                🏆
              </Badge>
              🌟 GitHub Achievements
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Contributions</div>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Repositories</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                  <span className="text-2xl">🦈</span>
                  <div>
                    <div className="font-semibold text-sm">Pull Shark</div>
                    <div className="text-xs text-muted-foreground">Excellent pull request contributions</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="font-semibold text-sm">Quickdraw</div>
                    <div className="text-xs text-muted-foreground">Fast response to issues</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-semibold text-sm">YOLO</div>
                    <div className="text-xs text-muted-foreground">Direct to main branch contributions</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;