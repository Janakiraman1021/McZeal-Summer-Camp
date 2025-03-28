import { motion } from 'framer-motion';
import { Code, Users, BrainCircuit } from 'lucide-react';

const CodingCategories = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Coding Adventures
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow">
            Explore the world of programming with age-specific learning paths!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/90 p-6 rounded-3xl text-primary shadow-xl flex flex-col items-center">
            <Users className="w-12 h-12 text-accent-yellow mb-4" />
            <h2 className="text-2xl font-bold">Ages 8-12</h2>
            <p className="mt-2 text-lg">Beginner Scratch & Python</p>
          </div>
          
          <div className="bg-white/90 p-6 rounded-3xl text-secondary shadow-xl flex flex-col items-center">
            <Code className="w-12 h-12 text-accent-purple mb-4" />
            <h2 className="text-2xl font-bold">Ages 13-16</h2>
            <p className="mt-2 text-lg">Python Programming</p>
          </div>
          
          <div className="bg-white/90 p-6 rounded-3xl text-accent-purple shadow-xl flex flex-col items-center">
            <BrainCircuit className="w-12 h-12 text-accent-yellow mb-4" />
            <h2 className="text-2xl font-bold">Ages 17-21</h2>
            <p className="mt-2 text-lg">Real-World Python Applications</p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-accent-yellow/90 transition-colors mt-12"
        >
          Start Coding Now!
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CodingCategories;
