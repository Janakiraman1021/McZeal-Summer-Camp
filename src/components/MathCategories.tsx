import { motion } from 'framer-motion';
import { Calculator, FunctionSquare, Sigma } from 'lucide-react';

const MathCategories = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-r from-[#6a0dad] to-[#b673dc]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#ffd700] mb-6 drop-shadow-lg">
            Math Explorers
          </h1>
          <p className="text-xl md:text-2xl text-[#ffe66d] max-w-2xl mx-auto drop-shadow">
            Unlock the power of numbers with age-specific learning paths!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-[#8a2be2] p-6 rounded-3xl text-[#ffd700] shadow-xl flex flex-col items-center">
            <Calculator className="w-12 h-12 text-[#ffdd57] mb-4" />
            <h2 className="text-2xl font-bold">Ages 8-12</h2>
            <p className="mt-2 text-lg">Basic Arithmetic & Geometry</p>
          </div>
          
          <div className="bg-[#9932cc] p-6 rounded-3xl text-[#ffe66d] shadow-xl flex flex-col items-center">
            <FunctionSquare className="w-12 h-12 text-[#ffd700] mb-4" />
            <h2 className="text-2xl font-bold">Ages 13-16</h2>
            <p className="mt-2 text-lg">Algebra & Trigonometry</p>
          </div>
          
          <div className="bg-[#b873d6] p-6 rounded-3xl text-[#ffdd57] shadow-xl flex flex-col items-center">
            <Sigma className="w-12 h-12 text-[#ffe66d] mb-4" />
            <h2 className="text-2xl font-bold">Ages 17-21</h2>
            <p className="mt-2 text-lg">Calculus & Advanced Mathematics</p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ffd700] text-[#6a0dad] px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-[#ffdd57] transition-colors mt-12"
        >
          Start Learning Now!
        </motion.button>
      </div>
    </motion.section>
  );
};

export default MathCategories;
