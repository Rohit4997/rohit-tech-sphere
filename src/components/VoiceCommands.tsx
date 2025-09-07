import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, Command } from 'lucide-react';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';

interface VoiceCommand {
  command: string;
  action: () => void;
  description: string;
}

const VoiceCommands = () => {
  const [isListening, setIsListening] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [lastCommand, setLastCommand] = useState<string>('');
  const [showCommands, setShowCommands] = useState(false);

  const { speak, voices } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      handleVoiceCommand(result);
    },
  });

  const commands: VoiceCommand[] = [
    {
      command: 'show projects',
      action: () => scrollToSection('projects'),
      description: 'Navigate to projects section'
    },
    {
      command: 'show skills',
      action: () => scrollToSection('skills'),
      description: 'Navigate to skills section'
    },
    {
      command: 'show experience',
      action: () => scrollToSection('experience'),
      description: 'Navigate to experience section'
    },
    {
      command: 'show contact',
      action: () => scrollToSection('contact'),
      description: 'Navigate to contact section'
    },
    {
      command: 'go to top',
      action: () => scrollToSection('hero'),
      description: 'Go to top of page'
    },
    {
      command: 'tell me about rohit',
      action: () => speakAbout(),
      description: 'Get an audio introduction'
    },
    {
      command: 'show github',
      action: () => openGitHub(),
      description: 'Open GitHub profile'
    },
    {
      command: 'download resume',
      action: () => downloadResume(),
      description: 'Download resume'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      speak({ text: `Navigating to ${sectionId} section` });
    }
  };

  const speakAbout = () => {
    const introduction = `Hi! I'm Rohit Dhakad, a passionate Software Development Engineer at Moving Tech Innovations. 
    I architected India's first open mobility platform, Namma Yatri, and built scalable subscription revenue systems. 
    I specialize in React Native, Node.js, and system architecture with over 1000 GitHub contributions this year.`;
    speak({ text: introduction });
  };

  const openGitHub = () => {
    window.open('https://github.com/Rohit4997', '_blank');
    speak({ text: 'Opening GitHub profile' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1_8WRARGl3Z0GDLhiwMvXlwid174RFKQE/view?usp=sharing', '_blank');
    speak({ text: 'Opening resume' });
  };

  const handleVoiceCommand = (transcript: string) => {
    const normalizedTranscript = transcript.toLowerCase().trim();
    setLastCommand(normalizedTranscript);

    const matchedCommand = commands.find(cmd => 
      normalizedTranscript.includes(cmd.command.toLowerCase())
    );

    if (matchedCommand) {
      matchedCommand.action();
      speak({ text: `Executing: ${matchedCommand.description}` });
    } else {
      speak({ text: 'Command not recognized. Say "show commands" to see available options.' });
    }
  };

  const toggleListening = () => {
    if (listening) {
      stop();
      setIsListening(false);
    } else {
      listen();
      setIsListening(true);
    }
  };

  const toggleVoiceCommands = () => {
    setIsEnabled(!isEnabled);
    if (!isEnabled) {
      speak({ text: 'Voice commands activated. Say "show commands" to see available options.' });
    } else {
      speak({ text: 'Voice commands deactivated.' });
      if (listening) {
        stop();
        setIsListening(false);
      }
    }
  };

  useEffect(() => {
    setIsListening(listening);
  }, [listening]);

  return (
    <>
      {/* Voice Commands Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleVoiceCommands}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isEnabled 
              ? 'bg-gradient-to-r from-neon-cyan to-neon-pink text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {isEnabled ? <Volume2 size={24} /> : <Command size={24} />}
        </motion.button>

        {/* Microphone Button */}
        <AnimatePresence>
          {isEnabled && (
            <motion.button
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleListening}
              className={`absolute bottom-16 right-0 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Commands Panel Toggle */}
        <AnimatePresence>
          {isEnabled && (
            <motion.button
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCommands(!showCommands)}
              className="absolute bottom-28 right-0 w-10 h-10 rounded-full bg-white text-gray-600 shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              ?
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Voice Status Indicator */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-md z-40"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-red-500 rounded-full"
              />
              <span className="text-sm">Listening...</span>
            </div>
            {lastCommand && (
              <div className="text-xs text-gray-300 mt-1">
                Last: "{lastCommand}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Commands Panel */}
      <AnimatePresence>
        {showCommands && isEnabled && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed right-6 bottom-32 w-80 bg-black/90 backdrop-blur-md rounded-lg border border-neon-cyan/30 p-4 z-40 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <Volume2 size={16} className="text-neon-cyan" />
              <h3 className="text-white font-semibold">Voice Commands</h3>
            </div>
            
            <div className="space-y-3">
              {commands.map((cmd, index) => (
                <motion.div
                  key={cmd.command}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <div className="text-neon-cyan text-sm font-mono">
                    "{cmd.command}"
                  </div>
                  <div className="text-gray-300 text-xs mt-1">
                    {cmd.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-gray-400 text-center">
                💡 Say any command clearly for best results
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceCommands;