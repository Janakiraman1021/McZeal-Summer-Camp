import { motion } from 'framer-motion';
import { Sparkles, Rocket, Stars } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-rainbow"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -right-10 text-accent-yellow"
          >
            <Stars className="w-16 h-16" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            McZeal Academy
            <br />
            <span className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent-yellow to-accent-purple">
              Summer Camp 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow">
            Embark on an Epic Adventure of Learning and Fun!
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full text-primary">
            <Sparkles className="w-6 h-6" />
            <span>Magical Learning</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full text-secondary">
            <Rocket className="w-6 h-6" />
            <span>Fun Adventures</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full text-accent-purple">
            <Stars className="w-6 h-6" />
            <span>Cool Experiments</span>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-accent-yellow/90 transition-colors"
        >
          Start Your Adventure!
        </motion.button>

        <motion.div
          className="mt-12 relative"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
          <img
            src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80"
            alt="Happy children learning"
            className="rounded-3xl shadow-2xl mx-auto max-w-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;