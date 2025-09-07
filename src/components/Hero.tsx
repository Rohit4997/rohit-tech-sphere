import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Phone, Download, ArrowRight, Star, Users, Zap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo-new.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const titles = [
    'Software Development Engineer',
    'React Native Expert', 
    'Full-Stack Developer',
    'Open Source Contributor',
    'Mobility Tech Innovator'
  ];

  useEffect(() => {
    setIsVisible(true);
    const currentTitle = titles[currentIndex];
    if (displayText.length < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex, titles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-tech-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-neon-pink/15 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-neon-green/10 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-electric-blue/20 rounded-full blur-xl animate-scale-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-10 right-20 w-16 h-16 bg-neon-orange/25 rounded-full blur-lg animate-rotate-slow"></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-1/3 left-1/6 text-4xl opacity-10 animate-float text-primary">&lt;/&gt;</div>
        <div className="absolute bottom-1/3 right-1/6 text-3xl opacity-10 animate-float-reverse text-accent" style={{ animationDelay: '2s' }}>{ }</div>
        <div className="absolute top-2/3 left-1/5 text-2xl opacity-10 animate-bounce-gentle text-tech-glow" style={{ animationDelay: '1s' }}>⚡</div>
        
        {/* New floating elements */}
        <div className="absolute top-1/5 right-1/5 text-2xl opacity-10 animate-float text-neon-green" style={{ animationDelay: '0.5s' }}>🚀</div>
        <div className="absolute bottom-1/5 left-1/3 text-3xl opacity-10 animate-float-reverse text-neon-pink" style={{ animationDelay: '1.5s' }}>💻</div>
        <div className="absolute top-3/5 right-1/4 text-xl opacity-10 animate-bounce-gentle text-electric-blue" style={{ animationDelay: '2.5s' }}>📱</div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="space-y-6">
              {/* Location and Status */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neon-green" />
                  <span>📍 India</span>
                </div>
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-sm">Available for opportunities</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">Rohit</span>
                </h1>
                
                <div className="h-16 flex items-center">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                    {displayText}
                    <span className="animate-pulse text-primary">|</span>
                  </h2>
                </div>
              </div>
              
              {/* Enhanced Description */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  A passionate and results-driven Software Engineer with strong experience in architecting 
                  scalable mobile and backend systems, especially in India's open mobility space. Currently 
                  building the future of transportation at{' '}
                  <span className="text-primary font-semibold">Namma Yatri</span>.
                </p>
                
                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
                    <Zap className="w-5 h-5 text-neon-yellow" />
                    <div>
                      <div className="font-semibold text-sm">2+ Years</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
                    <Users className="w-5 h-5 text-neon-green" />
                    <div>
                      <div className="font-semibold text-sm">Millions</div>
                      <div className="text-xs text-muted-foreground">Users Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-bg hover:opacity-90 transition-smooth group">
                <Mail className="w-5 h-5 mr-2" />
                💬 Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="hover-lift border-primary/50 group">
                <Download className="w-5 h-5 mr-2" />
                📄 Download Resume
                <Star className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Contact Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/Rohit4997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover-lift group"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-smooth" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rohit-4997/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover-lift group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary transition-smooth" />
              </a>
              
              <a 
                href="mailto:rohitrkd4997@gmail.com"
                className="p-3 rounded-full glass-card hover-lift group"
              >
                <Mail className="w-6 h-6 group-hover:text-primary transition-smooth" />
              </a>
              
              <a 
                href="tel:+917425004997"
                className="p-3 rounded-full glass-card hover-lift group"
              >
                <Phone className="w-6 h-6 group-hover:text-primary transition-smooth" />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="relative">
              {/* Enhanced glow effect behind image */}
              <div className="absolute inset-0 gradient-tech rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-4 rounded-full glass-card p-1">
                  <img
                    src={profilePhoto}
                    alt="Rohit Dhakad - Software Development Engineer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Enhanced floating tech icons */}
                {/* <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce-gentle z-10">
                  <span className="text-2xl">⚛️</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float z-10" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">📱</span>
                </div>
                
                <div className="absolute top-8 -right-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-scale-pulse z-10" style={{ animationDelay: '2s' }}>
                  <span className="text-xl">🚀</span>
                </div>
                
                <div className="absolute bottom-8 -left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float-reverse z-10" style={{ animationDelay: '0.5s' }}>
                  <span className="text-lg">💻</span>
                </div>
                
                <div className="absolute top-1/3 -left-6 w-10 h-10 glass-card rounded-full flex items-center justify-center animate-rotate-slow z-10" style={{ animationDelay: '3s' }}>
                  <span className="text-sm">⚡</span>
                </div>
                
                <div className="absolute top-1/4 -right-2 w-8 h-8 glass-card rounded-full flex items-center justify-center animate-bounce-gentle z-10" style={{ animationDelay: '1.5s' }}>
                  <span className="text-xs">🎯</span>
                </div>
                
                <div className="absolute bottom-1/4 -right-6 w-10 h-10 glass-card rounded-full flex items-center justify-center animate-float z-10" style={{ animationDelay: '2.5s' }}>
                  <span className="text-sm">🔥</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-lg">👇</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;