import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, TrendingUp, Users, Star } from 'lucide-react';

interface LinkedInMoment {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  icon: JSX.Element;
  color: string;
  achievement: string;
}

const LinkedInMoments = () => {
  const [activeMoment, setActiveMoment] = useState(0);

  const moments: LinkedInMoment[] = [
    {
      id: 'proud-vertos',
      title: 'Proud Vertos Achievement',
      description: 'Recognized as a proud Vertos for exceptional contributions to the open mobility ecosystem',
      url: 'https://www.linkedin.com/posts/scselpu_proudvertos-lpuforyou-lpudiaries-activity-7120330287066021888-y3wD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1lnLIB-Sn5UXI_SHT7rhL_H4kcYKLooTE',
      date: '2024',
      icon: <Award className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      achievement: 'Proud Vertos Recognition'
    },
    {
      id: 'juspay-intern',
      title: 'Juspay Internship',
      description: 'Successfully completed internship at Juspay, contributing to innovative payment solutions',
      url: 'https://www.linkedin.com/posts/rohit-4997_intern-juspay-ugcPost-6911867755071778816-TaXm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1lnLIB-Sn5UXI_SHT7rhL_H4kcYKLooTE',
      date: '2023',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      achievement: 'Juspay Internship'
    },
    {
      id: 'funding-success',
      title: 'Namma Yatri Funding',
      description: 'Part of the team that secured significant funding for Namma Yatri, enabling growth and innovation',
      url: 'https://www.linkedin.com/posts/yourstory-com_fundingwithys-funding-nammayatri-activity-7218878743174369281-lBZP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1lnLIB-Sn5UXI_Sn5UXI_SHT7rhL_H4kcYKLooTE',
      date: '2024',
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-400 to-teal-500',
      achievement: 'Funding Success'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🏆 LinkedIn Moments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and achievements that showcase my journey in tech
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer"
                onClick={() => setActiveMoment(index)}
              >
                <div className={`bg-gradient-to-br ${moment.color} p-6 rounded-2xl text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      {moment.icon}
                      <span className="text-sm font-medium opacity-90">{moment.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{moment.achievement}</h3>
                    <p className="text-sm opacity-90 line-clamp-3">{moment.description}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm opacity-80">
                      <ExternalLink className="w-4 h-4" />
                      <span>View on LinkedIn</span>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMoment}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${moments[activeMoment].color} rounded-xl flex items-center justify-center text-white`}>
                      {moments[activeMoment].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{moments[activeMoment].title}</h3>
                      <p className="text-muted-foreground">{moments[activeMoment].date}</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href={moments[activeMoment].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Post
                </a>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {moments[activeMoment].description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Professional Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Career Milestone</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Key Achievements</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInMoments; 