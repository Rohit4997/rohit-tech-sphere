import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Shield, 
  Crown, 
  Trophy,
  Target,
  Rocket,
  Code,
  Smartphone,
  Database,
  GitBranch,
  Award
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  category: 'frontend' | 'mobile' | 'backend' | 'devops' | 'leadership';
  icon: JSX.Element;
  experience: number;
  description: string;
  achievements: string[];
  color: string;
  unlocked: boolean;
  prerequisites?: string[];
}

interface SkillNode {
  skill: Skill;
  x: number;
  y: number;
  connections: string[];
}

const SkillTree = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const skills: Skill[] = [
    {
      id: 'javascript',
      name: 'JavaScript',
      level: 9,
      maxLevel: 10,
      category: 'frontend',
      icon: <Code className="text-yellow-400" size={20} />,
      experience: 4500,
      description: 'Mastery in modern JavaScript, ES6+, and functional programming',
      achievements: ['Expert Problem Solver', 'Performance Optimizer'],
      color: 'bg-yellow-400',
      unlocked: true
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      level: 8,
      maxLevel: 10,
      category: 'frontend',
      icon: <Shield className="text-blue-400" size={20} />,
      experience: 3200,
      description: 'Type-safe JavaScript development with advanced type systems',
      achievements: ['Type Safety Guardian', 'Error Prevention Master'],
      color: 'bg-blue-400',
      unlocked: true,
      prerequisites: ['javascript']
    },
    {
      id: 'react-native',
      name: 'React Native',
      level: 10,
      maxLevel: 10,
      category: 'mobile',
      icon: <Smartphone className="text-cyan-400" size={20} />,
      experience: 5000,
      description: 'Cross-platform mobile development expert - Built NammaYatri',
      achievements: ['Mobile Architecture Master', 'Cross-Platform Expert', 'India\'s Open Mobility Pioneer'],
      color: 'bg-cyan-400',
      unlocked: true,
      prerequisites: ['javascript', 'typescript']
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      level: 8,
      maxLevel: 10,
      category: 'backend',
      icon: <Database className="text-green-400" size={20} />,
      experience: 3800,
      description: 'Scalable backend systems and microservices architecture',
      achievements: ['Backend Architect', 'Scalability Expert'],
      color: 'bg-green-400',
      unlocked: true,
      prerequisites: ['javascript']
    },
    {
      id: 'purescript',
      name: 'PureScript',
      level: 7,
      maxLevel: 10,
      category: 'backend',
      icon: <Zap className="text-purple-400" size={20} />,
      experience: 2800,
      description: 'Functional programming mastery for robust backend systems',
      achievements: ['Functional Programming Guru', 'Type Theory Expert'],
      color: 'bg-purple-400',
      unlocked: true,
      prerequisites: ['nodejs']
    },
    {
      id: 'architecture',
      name: 'System Architecture',
      level: 9,
      maxLevel: 10,
      category: 'leadership',
      icon: <Crown className="text-gold" size={20} />,
      experience: 4200,
      description: 'Designing scalable systems - Multi-merchant configurations',
      achievements: ['Architecture Visionary', 'Scalability Master', 'Revenue System Architect'],
      color: 'bg-yellow-500',
      unlocked: true,
      prerequisites: ['react-native', 'nodejs', 'purescript']
    },
    {
      id: 'performance',
      name: 'Performance Optimization',
      level: 9,
      maxLevel: 10,
      category: 'devops',
      icon: <Rocket className="text-orange-400" size={20} />,
      experience: 4000,
      description: 'Advanced caching, API optimization, 40% performance improvements',
      achievements: ['Performance Wizard', 'Optimization Master', 'Cache Strategy Expert'],
      color: 'bg-orange-400',
      unlocked: true,
      prerequisites: ['react-native', 'nodejs']
    },
    {
      id: 'leadership',
      name: 'Technical Leadership',
      level: 8,
      maxLevel: 10,
      category: 'leadership',
      icon: <Trophy className="text-gold" size={20} />,
      experience: 3500,
      description: 'Leading engineering teams, mentoring, and project management',
      achievements: ['Team Leader', 'Mentor', 'Project Success Driver'],
      color: 'bg-yellow-500',
      unlocked: true,
      prerequisites: ['architecture']
    }
  ];

  const skillNodes: SkillNode[] = [
    { skill: skills[0], x: 200, y: 300, connections: ['typescript', 'nodejs'] },
    { skill: skills[1], x: 350, y: 200, connections: ['react-native'] },
    { skill: skills[2], x: 500, y: 150, connections: ['architecture', 'performance'] },
    { skill: skills[3], x: 350, y: 400, connections: ['purescript', 'performance'] },
    { skill: skills[4], x: 500, y: 450, connections: ['architecture'] },
    { skill: skills[5], x: 650, y: 300, connections: ['leadership'] },
    { skill: skills[6], x: 500, y: 300, connections: [] },
    { skill: skills[7], x: 800, y: 250, connections: [] }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getSkillColor = (category: string) => {
    const colors = {
      frontend: 'from-yellow-400 to-orange-400',
      mobile: 'from-cyan-400 to-blue-400',
      backend: 'from-green-400 to-emerald-400',
      devops: 'from-orange-400 to-red-400',
      leadership: 'from-purple-400 to-pink-400'
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  const SkillConnection = ({ from, to }: { from: SkillNode; to: SkillNode }) => (
    <motion.line
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 1, delay: 0.5 }}
      x1={from.x + 50}
      y1={from.y + 50}
      x2={to.x + 50}
      y2={to.y + 50}
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeDasharray="5,5"
    />
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Skill Tree Visualization */}
      <div className="relative h-[600px] bg-gradient-to-br from-black/80 to-gray-900/80 rounded-xl overflow-hidden border border-neon-cyan/30">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.6)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
            </linearGradient>
          </defs>
          
          {/* Render connections */}
          {skillNodes.map((node) =>
            node.connections.map((connectionId) => {
              const targetNode = skillNodes.find(n => n.skill.id === connectionId);
              return targetNode ? (
                <SkillConnection
                  key={`${node.skill.id}-${connectionId}`}
                  from={node}
                  to={targetNode}
                />
              ) : null;
            })
          )}
        </svg>

        {/* Skill Nodes */}
        {skillNodes.map((node, index) => (
          <motion.div
            key={node.skill.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
            className="absolute"
            style={{ left: node.x, top: node.y }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkill(node.skill)}
              className={`w-24 h-24 rounded-full bg-gradient-to-br ${getSkillColor(node.skill.category)} 
                         cursor-pointer shadow-lg border-4 border-white/20 flex flex-col items-center justify-center
                         hover:shadow-2xl hover:border-neon-cyan/50 transition-all duration-300 relative`}
            >
              {/* Level indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-yellow rounded-full flex items-center justify-center text-black text-xs font-bold">
                {node.skill.level}
              </div>
              
              {/* Skill icon */}
              {node.skill.icon}
              
              {/* Skill name */}
              <div className="text-white text-xs font-bold mt-1 text-center leading-tight">
                {node.skill.name.split(' ').map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </div>

              {/* Experience bar */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(node.skill.level / node.skill.maxLevel) * 100}%` }}
                  transition={{ delay: index * 0.3 + 1, duration: 1 }}
                  className="h-full bg-neon-cyan"
                />
              </div>

              {/* Mastery indicator */}
              {node.skill.level === node.skill.maxLevel && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: 'reverse' 
                  }}
                  className="absolute -top-4 -left-4"
                >
                  <Crown className="text-gold" size={16} />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [Math.random() * 1000, Math.random() * 1000],
              y: [Math.random() * 600, Math.random() * 600],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
          />
        ))}
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 max-w-md w-full border border-neon-cyan/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getSkillColor(selectedSkill.category)} 
                               flex items-center justify-center`}>
                  {selectedSkill.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-cyan">Level {selectedSkill.level}</span>
                    <div className="flex">
                      {[...Array(selectedSkill.maxLevel)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={i < selectedSkill.level ? 'text-neon-yellow fill-current' : 'text-gray-600'} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{selectedSkill.description}</p>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className="text-neon-pink" />
                  <span className="text-neon-pink font-semibold">Achievements</span>
                </div>
                <div className="space-y-1">
                  {selectedSkill.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <Award size={12} className="text-neon-yellow" />
                      {achievement}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Experience: {selectedSkill.experience.toLocaleString()} XP</span>
                  <span className="capitalize">{selectedSkill.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {[
          { category: 'frontend', label: 'Frontend', color: 'from-yellow-400 to-orange-400' },
          { category: 'mobile', label: 'Mobile', color: 'from-cyan-400 to-blue-400' },
          { category: 'backend', label: 'Backend', color: 'from-green-400 to-emerald-400' },
          { category: 'devops', label: 'DevOps', color: 'from-orange-400 to-red-400' },
          { category: 'leadership', label: 'Leadership', color: 'from-purple-400 to-pink-400' }
        ].map(({ category, label, color }) => (
          <div key={category} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${color}`}></div>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;