import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Play, FileCode, Zap, Database, Globe, Shield } from 'lucide-react';

interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  icon: JSX.Element;
}

const CodeEditor = () => {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const codeSnippets: CodeSnippet[] = [
    {
      id: 'real-time-location',
      title: 'Real-Time Location Engine',
      language: 'typescript',
      description: 'Advanced location tracking system powering millions of rides',
      icon: <Globe className="text-neon-green" size={16} />,
      code: `// Real-Time Location Engine - Production Code
interface LocationUpdate {
  userId: string;
  coordinates: [number, number];
  timestamp: number;
  accuracy: number;
  speed?: number;
}

class LocationEngine {
  private activeConnections = new Map<string, WebSocket>();
  private locationCache = new Map<string, LocationUpdate>();
  
  async handleLocationUpdate(update: LocationUpdate) {
    // Real-time location processing
    const optimizedLocation = await this.optimizeLocation(update);
    
    // Broadcast to relevant drivers/riders
    await this.broadcastLocation(optimizedLocation);
    
    // Update ride matching algorithm
    await this.updateRideMatching(optimizedLocation);
    
    return this.calculateETA(optimizedLocation);
  }
  
  private async optimizeLocation(update: LocationUpdate) {
    // GPS smoothing and accuracy improvement
    const smoothedCoords = this.applyKalmanFilter(update.coordinates);
    const enhancedAccuracy = this.enhanceAccuracy(update.accuracy);
    
    return {
      ...update,
      coordinates: smoothedCoords,
      accuracy: enhancedAccuracy
    };
  }
  
  private async broadcastLocation(location: LocationUpdate) {
    // WebSocket broadcasting to nearby users
    const nearbyUsers = await this.findNearbyUsers(location);
    
    nearbyUsers.forEach(userId => {
      const connection = this.activeConnections.get(userId);
      if (connection?.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({
          type: 'LOCATION_UPDATE',
          data: location
        }));
      }
    });
  }
}`
    },
    {
      id: 'payment-gateway',
      title: 'Payment Gateway Integration',
      language: 'javascript',
      description: 'Secure payment processing with multiple payment methods',
      icon: <Shield className="text-neon-cyan" size={16} />,
      code: `// Payment Gateway Integration - Production Ready
class PaymentProcessor {
  constructor() {
    this.gateways = {
      razorpay: new RazorpayGateway(),
      paytm: new PaytmGateway(),
      upi: new UPIGateway(),
      card: new CardGateway()
    };
  }
  
  async processPayment(paymentData) {
    try {
      // Validate payment data
      const validatedData = await this.validatePayment(paymentData);
      
      // Select optimal gateway based on user preference
      const gateway = this.selectGateway(validatedData);
      
      // Process payment with retry logic
      const result = await this.executeWithRetry(
        () => gateway.process(validatedData),
        { maxRetries: 3, backoff: 1000 }
      );
      
      // Handle success/failure
      await this.handlePaymentResult(result);
      
      return {
        success: true,
        transactionId: result.transactionId,
        amount: validatedData.amount
      };
    } catch (error) {
      await this.handlePaymentError(error);
      throw error;
    }
  }
  
  private async validatePayment(data) {
    // Comprehensive payment validation
    const schema = Joi.object({
      amount: Joi.number().positive().required(),
      currency: Joi.string().valid('INR').required(),
      method: Joi.string().valid('razorpay', 'paytm', 'upi', 'card').required(),
      userId: Joi.string().required(),
      rideId: Joi.string().required()
    });
    
    return await schema.validateAsync(data);
  }
  
  private selectGateway(data) {
    // Smart gateway selection based on success rates
    const gatewayStats = this.getGatewayStats();
    const optimalGateway = this.calculateOptimalGateway(data, gatewayStats);
    
    return this.gateways[optimalGateway];
  }
}`
    },
    {
      id: 'ride-matching',
      title: 'Intelligent Ride Matching',
      language: 'tsx',
      description: 'AI-powered algorithm for optimal driver-rider matching',
      icon: <FileCode className="text-neon-pink" size={16} />,
      code: `// Intelligent Ride Matching Algorithm
import { useMemo, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Driver {
  id: string;
  location: [number, number];
  rating: number;
  vehicleType: string;
  isAvailable: boolean;
  currentRide?: string;
}

interface RideRequest {
  id: string;
  pickup: [number, number];
  destination: [number, number];
  vehicleType: string;
  priority: 'normal' | 'urgent';
  userId: string;
}

const RideMatchingEngine = ({ rideRequest }: { rideRequest: RideRequest }) => {
  // Fetch available drivers
  const { data: availableDrivers } = useQuery({
    queryKey: ['drivers', rideRequest.pickup],
    queryFn: () => fetchNearbyDrivers(rideRequest.pickup, 5),
    staleTime: 30000 // 30 seconds
  });
  
  // Intelligent matching algorithm
  const matchedDriver = useMemo(() => {
    if (!availableDrivers?.length) return null;
    
    return availableDrivers
      .filter(driver => 
        driver.isAvailable && 
        driver.vehicleType === rideRequest.vehicleType
      )
      .map(driver => ({
        driver,
        score: calculateMatchingScore(driver, rideRequest)
      }))
      .sort((a, b) => b.score - a.score)[0]?.driver;
  }, [availableDrivers, rideRequest]);
  
  const calculateMatchingScore = useCallback((driver: Driver, request: RideRequest) => {
    const distance = calculateDistance(driver.location, request.pickup);
    const rating = driver.rating;
    const availability = driver.isAvailable ? 1 : 0;
    
    // Weighted scoring algorithm
    return (
      (1 / (distance + 1)) * 0.4 + // Distance weight
      (rating / 5) * 0.3 + // Rating weight
      availability * 0.3 // Availability weight
    );
  }, []);
  
  // Auto-assign ride to best driver
  const assignRide = useCallback(async () => {
    if (!matchedDriver) return;
    
    try {
      await assignRideToDriver(rideRequest.id, matchedDriver.id);
      await notifyDriver(matchedDriver.id, rideRequest);
      await notifyUser(rideRequest.userId, matchedDriver);
    } catch (error) {
      console.error('Ride assignment failed:', error);
    }
  }, [matchedDriver, rideRequest]);
  
  return (
    <div className="ride-matching-result">
      {matchedDriver ? (
        <div className="driver-assigned">
          <h3>🚗 Driver Found!</h3>
          <p>Rating: {'⭐'.repeat(Math.floor(matchedDriver.rating))}</p>
          <p>ETA: {calculateETA(matchedDriver.location, rideRequest.pickup)} min</p>
          <button onClick={assignRide}>Confirm Ride</button>
        </div>
      ) : (
        <div className="searching-drivers">
          <div className="loading-spinner" />
          <p>Finding the best driver for you...</p>
        </div>
      )}
    </div>
  );
};`
    }
  ];

  const runCode = async () => {
    setIsRunning(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRunning(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#1a1a1a] rounded-lg border border-neon-cyan/30 overflow-hidden"
    >
      {/* Editor Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-muted-foreground font-mono">
            {codeSnippets[activeSnippet].title}.{codeSnippets[activeSnippet].language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-3 py-1 bg-neon-green/20 text-neon-green rounded text-sm hover:bg-neon-green/30 transition-colors disabled:opacity-50"
          >
            <Play size={12} />
            {isRunning ? 'Running...' : 'Run'}
          </motion.button>
        </div>
      </div>

      {/* File Tabs */}
      <div className="bg-[#2d2d2d] px-4 py-1 flex gap-1 overflow-x-auto">
        {codeSnippets.map((snippet, index) => (
          <motion.button
            key={snippet.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveSnippet(index)}
            className={`flex items-center gap-2 px-3 py-2 rounded-t text-sm whitespace-nowrap transition-colors ${
              index === activeSnippet
                ? 'bg-[#1a1a1a] text-neon-cyan border-b-2 border-neon-cyan'
                : 'text-muted-foreground hover:text-foreground hover:bg-[#3d3d3d]'
            }`}
          >
            {snippet.icon}
            {snippet.title}
          </motion.button>
        ))}
      </div>

      {/* Code Content */}
      <div className="relative">
        <motion.div
          key={activeSnippet}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-4"
        >
          <div className="mb-3 text-sm text-muted-foreground">
            {codeSnippets[activeSnippet].description}
          </div>
          <SyntaxHighlighter
            language={codeSnippets[activeSnippet].language}
            style={tomorrow}
            customStyle={{
              background: 'transparent',
              padding: 0,
              margin: 0,
              fontSize: '14px',
              lineHeight: '1.5'
            }}
            showLineNumbers
            lineNumberStyle={{ color: '#666', fontSize: '12px' }}
          >
            {codeSnippets[activeSnippet].code}
          </SyntaxHighlighter>
        </motion.div>

        {/* Running Animation */}
        {isRunning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 border-2 border-neon-green border-t-transparent rounded-full mx-auto mb-2"
              />
              <div className="text-neon-green text-sm">Executing code...</div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CodeEditor;