import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, User, Folder, GitBranch } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string | JSX.Element;
  timestamp: string;
}

const Terminal = () => {
  const [commands, setCommands] = useState<TerminalCommand[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const initialCommands = [
    {
      command: 'whoami',
      output: 'rohit.dhakad@software-engineer ~ Passionate SDE building scalable systems',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      command: 'ls -la /current-role',
      output: `drwxr-xr-x 1 rohit staff  512 Dec  3 10:30 moving-tech-innovations/
drwxr-xr-x 1 rohit staff  256 Dec  3 10:30 namma-yatri/
-rw-r--r-- 1 rohit staff  1.2M Dec  3 10:30 subscription-system.js
-rw-r--r-- 1 rohit staff  856K Dec  3 10:30 multi-merchant-sdk.ts
-rw-r--r-- 1 rohit staff  423K Dec  3 10:30 performance-optimizations.tsx`,
      timestamp: new Date().toLocaleTimeString()
    },
    {
      command: 'git log --oneline | head -5',
      output: (
        <div className="font-mono text-sm">
          <div><span className="text-neon-yellow">a1b2c3d</span> feat: launched subscription revenue system 🚀</div>
          <div><span className="text-neon-yellow">e4f5g6h</span> perf: optimized app performance with advanced caching ⚡</div>
          <div><span className="text-neon-yellow">i7j8k9l</span> arch: built multi-merchant configuration system 🏗️</div>
          <div><span className="text-neon-yellow">m0n1o2p</span> sdk: replaced third-party SDKs with in-house solutions 📦</div>
          <div><span className="text-neon-yellow">q3r4s5t</span> feat: real-time ride visualization dashboard 📊</div>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString()
    }
  ];

  useEffect(() => {
    const typeCommands = async () => {
      for (let i = 0; i < initialCommands.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCommands(prev => [...prev, initialCommands[i]]);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }
    };
    typeCommands();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const newCommand: TerminalCommand = {
      command: currentInput,
      output: getCommandOutput(currentInput),
      timestamp: new Date().toLocaleTimeString()
    };

    setCommands(prev => [...prev, newCommand]);
    setCurrentInput('');
    
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };

  const getCommandOutput = (cmd: string): string | JSX.Element => {
    const command = cmd.toLowerCase().trim();
    
    if (command === 'help') {
      return (
        <div className="text-sm">
          <div className="text-neon-cyan">Available commands:</div>
          <div>• skills - View technical skills</div>
          <div>• projects - List current projects</div>
          <div>• contact - Get contact information</div>
          <div>• github - Show GitHub stats</div>
          <div>• clear - Clear terminal</div>
        </div>
      );
    }
    
    if (command === 'skills') {
      return (
        <div className="text-sm">
          <div className="text-neon-green">🚀 Languages:</div>
          <div>JavaScript, TypeScript, Java, Kotlin, PureScript</div>
          <div className="text-neon-green mt-2">📱 Mobile:</div>
          <div>React-Native, Android SDK, iOS Development</div>
          <div className="text-neon-green mt-2">⚡ Backend:</div>
          <div>Node.js, Express.js, REST APIs, Kafka</div>
        </div>
      );
    }
    
    if (command === 'projects') {
      return (
        <div className="text-sm">
          <div className="text-neon-pink">📱 NammaYatri - India's first open mobility app</div>
          <div className="text-neon-pink">💪 MuscleFit - Comprehensive fitness tracking app</div>
        </div>
      );
    }
    
    if (command === 'contact') {
      return (
        <div className="text-sm">
          <div>📧 rohitrkd4997@gmail.com</div>
          <div>📱 +91 7425004997</div>
          <div>🔗 github.com/Rohit4997</div>
          <div>💼 linkedin.com/in/rohit-4997</div>
        </div>
      );
    }
    
    if (command === 'github') {
      return (
        <div className="text-sm">
          <div className="text-neon-yellow">📊 GitHub Stats:</div>
          <div>• 1,000+ contributions this year</div>
          <div>• Pull Shark, Quickdraw, YOLO badges</div>
          <div>• JavaScript (48%), TypeScript (24%)</div>
        </div>
      );
    }
    
    if (command === 'clear') {
      setTimeout(() => setCommands([]), 100);
      return '';
    }
    
    return `command not found: ${cmd}. Type 'help' for available commands.`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/90 backdrop-blur-md rounded-lg border border-neon-cyan/30 p-4 h-96 flex flex-col font-mono text-sm"
    >
      <div className="flex items-center gap-2 mb-4 text-neon-cyan">
        <TerminalIcon size={16} />
        <span>rohit@portfolio:~$</span>
        <div className="flex gap-2 ml-auto">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-neon-cyan scrollbar-track-transparent">
        {commands.map((cmd, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-2 text-neon-green">
              <User size={12} />
              <span className="text-neon-cyan">rohit@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <Folder size={12} className="text-neon-yellow" />
              <span className="text-neon-yellow">~</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{cmd.command}</span>
            </div>
            <div className="pl-6 text-muted-foreground">{cmd.output}</div>
          </motion.div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4 border-t border-border pt-2">
        <User size={12} className="text-neon-green" />
        <span className="text-neon-cyan">rohit@portfolio</span>
        <span className="text-muted-foreground">:</span>
        <Folder size={12} className="text-neon-yellow" />
        <span className="text-neon-yellow">~</span>
        <span className="text-muted-foreground">$</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-foreground"
          placeholder="Type 'help' for commands..."
        />
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-4 bg-neon-cyan"
        />
      </form>
    </motion.div>
  );
};

export default Terminal;