import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Terminal from '@/components/Terminal';
import CodeEditor from '@/components/CodeEditor';
import MobileSimulator from '@/components/MobileSimulator';
import SkillTree from '@/components/SkillTree';
import VoiceCommands from '@/components/VoiceCommands';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import LinkedInMoments from '@/components/LinkedInMoments';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        {/* LinkedIn Moments Section */}
        <section id="linkedin-moments">
          <LinkedInMoments />
        </section>
        
        {/* Live Code Demos Section */}
        <section id="live-code" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">⚡ Live Code Demos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the real production code that powers millions of rides and transactions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CodeEditor />
            </div>
          </div>
        </section>

        {/* Mobile App Simulator Section */}
        <section id="mobile-simulator" className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">📱 Mobile App Simulator</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the apps I've built with interactive simulations
              </p>
            </div>
            
            <div className="flex justify-center">
              <MobileSimulator />
            </div>
          </div>
        </section>
        
        {/* Interactive Skill Tree Section */}
        <section id="skill-tree" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🎮 Interactive Skill Tree</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my technical expertise through gamified skill progression
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SkillTree />
            </div>
          </div>
        </section>

        {/* Terminal Interface Section */}
        <section id="terminal" className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">💾 Terminal Interface</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience a fully functional terminal with real commands and interactions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Terminal />
            </div>
          </div>
        </section>
        
        {/* Technical Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🛠️ Technical Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive overview of my technical expertise and technologies
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Skills />
            </div>
          </div>
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <VoiceCommands />
      <ThemeSwitcher />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Rohit Dhakad. Built with React, TypeScript, and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
