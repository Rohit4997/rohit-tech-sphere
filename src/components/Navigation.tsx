import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, Code, Mail, Download, Smartphone, Zap, Award, Terminal } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'linkedin-moments', label: 'Achievements', icon: Award },
    { id: 'live-code', label: 'Live Code', icon: Zap },
    { id: 'mobile-simulator', label: 'Apps', icon: Smartphone },
    { id: 'skill-tree', label: 'Skill Tree', icon: User },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'skills', label: 'Skills', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    // Reset scroll position to top when component mounts
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-background font-bold text-sm">RD</span>
              </div>
              <span className="text-xl font-bold text-foreground">Rohit Dhakad</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    text-sm font-medium transition-all duration-300 hover:text-primary relative
                    ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
              
              <Button size="sm" className="gradient-bg hover:opacity-90 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-card m-4 rounded-lg overflow-hidden animate-slide-up">
            <div className="py-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-300
                    hover:bg-muted/20
                    ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-foreground'}
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
              
              <div className="px-6 py-3">
                <Button size="sm" className="w-full gradient-bg hover:opacity-90 transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Center Navigation Dots (Desktop) */}
      <div className="hidden lg:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-3 p-3 glass-card rounded-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                w-2 h-2 rounded-full border transition-all duration-300 hover:scale-125
                ${activeSection === item.id 
                  ? 'bg-primary border-primary scale-125 shadow-lg shadow-primary/50' 
                  : 'bg-transparent border-muted-foreground hover:border-primary hover:scale-110'
                }
              `}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;