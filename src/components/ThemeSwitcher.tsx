import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Palette, Zap } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system' | 'neon' | 'matrix';

interface ThemeConfig {
  id: Theme;
  name: string;
  icon: JSX.Element;
  colors: {
    background: string;
    foreground: string;
    accent: string;
    secondary: string;
  };
  description: string;
}

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);

  const themes: ThemeConfig[] = [
    {
      id: 'light',
      name: 'Light Mode',
      icon: <Sun size={16} />,
      colors: {
        background: 'bg-white',
        foreground: 'text-gray-900',
        accent: 'text-blue-600',
        secondary: 'bg-gray-100'
      },
      description: 'Clean and bright interface'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      icon: <Moon size={16} />,
      colors: {
        background: 'bg-gray-900',
        foreground: 'text-white',
        accent: 'text-cyan-400',
        secondary: 'bg-gray-800'
      },
      description: 'Easy on the eyes'
    },
    {
      id: 'neon',
      name: 'Neon Tech',
      icon: <Zap size={16} />,
      colors: {
        background: 'bg-black',
        foreground: 'text-neon-cyan',
        accent: 'text-neon-pink',
        secondary: 'bg-gray-900'
      },
      description: 'Cyberpunk vibes'
    },
    {
      id: 'matrix',
      name: 'Matrix',
      icon: <Monitor size={16} />,
      colors: {
        background: 'bg-black',
        foreground: 'text-green-400',
        accent: 'text-green-300',
        secondary: 'bg-green-900/20'
      },
      description: 'Enter the Matrix'
    },
    {
      id: 'system',
      name: 'System',
      icon: <Monitor size={16} />,
      colors: {
        background: 'bg-background',
        foreground: 'text-foreground',
        accent: 'text-primary',
        secondary: 'bg-secondary'
      },
      description: 'Follow system preference'
    }
  ];

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'neon', 'matrix');
    
    switch (theme) {
      case 'light':
        root.classList.add('light');
        root.style.setProperty('--background', '0 0% 100%');
        root.style.setProperty('--foreground', '222.2 84% 4.9%');
        root.style.setProperty('--primary', '221.2 83.2% 53.3%');
        root.style.setProperty('--secondary', '210 40% 96%');
        break;
        
      case 'dark':
        root.classList.add('dark');
        root.style.setProperty('--background', '222.2 84% 4.9%');
        root.style.setProperty('--foreground', '210 40% 98%');
        root.style.setProperty('--primary', '210 40% 98%');
        root.style.setProperty('--secondary', '217.2 32.6% 17.5%');
        break;
        
      case 'neon':
        root.classList.add('dark', 'neon');
        root.style.setProperty('--background', '0 0% 0%');
        root.style.setProperty('--foreground', '180 100% 70%');
        root.style.setProperty('--primary', '320 100% 70%');
        root.style.setProperty('--secondary', '0 0% 10%');
        root.style.setProperty('--tech-glow', '180 100% 50%');
        root.style.setProperty('--neon-pink', '320 100% 70%');
        root.style.setProperty('--neon-cyan', '180 100% 70%');
        break;
        
      case 'matrix':
        root.classList.add('dark', 'matrix');
        root.style.setProperty('--background', '0 0% 0%');
        root.style.setProperty('--foreground', '120 100% 50%');
        root.style.setProperty('--primary', '120 100% 75%');
        root.style.setProperty('--secondary', '120 100% 10%');
        root.style.setProperty('--tech-glow', '120 100% 50%');
        break;
        
      case 'system':
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
        return;
    }
    
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
    applyTheme(savedTheme);
  }, []);

  const currentThemeConfig = themes.find(t => t.id === currentTheme) || themes[1];

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Palette size={20} className="text-foreground" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              className="absolute top-14 right-0 w-72 bg-background/95 backdrop-blur-md rounded-xl border border-border shadow-xl p-4"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">Theme Selector</h3>
                <p className="text-sm text-muted-foreground">Choose your preferred visual style</p>
              </div>

              <div className="space-y-2">
                {themes.map((theme, index) => (
                  <motion.button
                    key={theme.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      applyTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      currentTheme === theme.id
                        ? 'bg-primary/20 border-2 border-primary/50 text-primary'
                        : 'bg-secondary/50 hover:bg-secondary border-2 border-transparent text-foreground'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentTheme === theme.id ? 'bg-primary/20' : 'bg-background/50'
                    }`}>
                      {theme.icon}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="font-medium">{theme.name}</div>
                      <div className="text-xs text-muted-foreground">{theme.description}</div>
                    </div>

                    {/* Theme Preview */}
                    <div className="flex gap-1">
                      <div className={`w-3 h-3 rounded-full ${theme.colors.background} border border-border`}></div>
                      <div className={`w-3 h-3 rounded-full ${theme.colors.secondary} border border-border`}></div>
                      <div className={`w-3 h-3 rounded-full ${theme.colors.accent.replace('text-', 'bg-')} border border-border`}></div>
                    </div>

                    {currentTheme === theme.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground text-center">
                  🎨 Current: <span className="font-medium">{currentThemeConfig.name}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Theme Change Animation */}
      <AnimatePresence>
        {currentTheme && (
          <motion.div
            key={currentTheme}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: [0, 1, 0], scale: [2, 1.5, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none flex items-center justify-center z-40"
          >
            <div className="text-6xl">
              {currentThemeConfig.icon}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;