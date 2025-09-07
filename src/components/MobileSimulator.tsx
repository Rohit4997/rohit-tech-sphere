import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  ArrowLeft, 
  Home, 
  Menu, 
  MapPin, 
  Star, 
  Clock,
  User,
  Settings,
  Download
} from 'lucide-react';

interface AppScreen {
  id: string;
  name: string;
  component: JSX.Element;
}

const MobileSimulator = () => {
  const [currentApp, setCurrentApp] = useState<'nammayatri' | 'musclefit'>('nammayatri');
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nammaYatriScreens: AppScreen[] = [
    {
      id: 'home',
      name: 'Home',
      component: (
        <div className="h-full bg-gradient-to-br from-yellow-400 to-orange-500 p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white">
              <h1 className="text-xl font-bold">Namma Yatri</h1>
              <p className="text-sm opacity-90">Zero Commission Rides</p>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={16} className="text-green-600" />
              <span className="text-sm text-gray-600">Current Location</span>
            </div>
            <div className="text-lg font-semibold mb-4">Koramangala, Bangalore</div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🚗
                  </div>
                  <div>
                    <div className="font-medium">Auto</div>
                    <div className="text-sm text-gray-500">₹45-60</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">3 min</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    🏍️
                  </div>
                  <div>
                    <div className="font-medium">Bike Taxi</div>
                    <div className="text-sm text-gray-500">₹25-35</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">2 min</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="text-white text-sm mb-2">💡 Pro Tip</div>
            <div className="text-white/90 text-xs">
              Built India's first open mobility platform with zero commission model
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'subscription',
      name: 'Subscription',
      component: (
        <div className="h-full bg-gradient-to-br from-purple-600 to-pink-600 p-4">
          <div className="flex items-center gap-3 mb-6">
            <ArrowLeft size={20} className="text-white" />
            <h1 className="text-xl font-bold text-white">Subscription Plans</h1>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg">Daily Pass</h3>
                  <p className="text-sm text-gray-500">Perfect for regular commuters</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">₹25</div>
                  <div className="text-xs text-gray-500">per day</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-yellow-500" />
                  <span>Unlimited rides within city</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-yellow-500" />
                  <span>Priority booking</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg">Monthly Pro</h3>
                  <p className="text-sm opacity-90">Most popular choice</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">₹499</div>
                  <div className="text-xs opacity-90">per month</div>
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-xs">
                💎 Revenue system I architected generating sustainable income
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const muscleFitScreens: AppScreen[] = [
    {
      id: 'home',
      name: 'Home',
      component: (
        <div className="h-full bg-gradient-to-br from-red-500 to-pink-600 p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white">
              <h1 className="text-xl font-bold">MuscleFit</h1>
              <p className="text-sm opacity-90">Your Fitness Journey</p>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              💪
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-red-500">1,247</div>
              <div className="text-sm text-gray-500">Calories Burned Today</div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-red-50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-red-500">45</div>
                <div className="text-xs text-gray-500">Workouts</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-blue-500">12</div>
                <div className="text-xs text-gray-500">Streak Days</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-bold mb-3">Today's Workout</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Push-ups</span>
                <span className="text-sm font-bold">3 x 15</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Squats</span>
                <span className="text-sm font-bold">3 x 20</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentScreens = currentApp === 'nammayatri' ? nammaYatriScreens : muscleFitScreens;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % currentScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentScreens.length]);

  const switchApp = async (app: 'nammayatri' | 'musclefit') => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setCurrentApp(app);
    setCurrentScreen(0);
    setIsLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center"
    >
      {/* App Selector */}
      <div className="flex gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchApp('nammayatri')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentApp === 'nammayatri' 
              ? 'bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          🚗 NammaYatri
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchApp('musclefit')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentApp === 'musclefit' 
              ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          💪 MuscleFit
          <a 
            href="https://play.google.com/store/apps/details?id=com.muscle.fit"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <Download size={12} />
          </a>
        </motion.button>
      </div>

      {/* Phone Simulator */}
      <div className="relative">
        <motion.div 
          className="w-72 h-[600px] bg-black rounded-[2.5rem] p-2 shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          {/* Phone Frame */}
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-black text-white text-xs">
              <div className="flex items-center gap-1">
                <Clock size={10} />
                <span>9:41</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                </div>
                <span>🔋</span>
                <span>100%</span>
              </div>
            </div>

            {/* App Content */}
            <div className="h-[calc(100%-2rem)]">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex items-center justify-center bg-gray-100"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`${currentApp}-${currentScreen}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    {currentScreens[currentScreen]?.component}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </motion.div>

        {/* Screen Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {currentScreens.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentScreen(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentScreen 
                  ? currentApp === 'nammayatri' ? 'bg-neon-yellow' : 'bg-neon-pink'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSimulator;