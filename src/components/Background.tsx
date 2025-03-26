import { motion } from 'framer-motion';
import { Stars, Sparkles, Rocket } from 'lucide-react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-primary-light/5 to-secondary-light/5">
      {/* Animated elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`stars-${i}`}
          className="absolute text-accent-yellow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Stars className="w-8 h-8" />
        </motion.div>
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`sparkles-${i}`}
          className="absolute text-accent-purple"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      ))}

      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`rocket-${i}`}
          className="absolute text-accent-orange"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="w-10 h-10" />
        </motion.div>
      ))}

      {/* Colorful gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-secondary-light/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-yellow/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
    </div>
  );
};

export default Background;