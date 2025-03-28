import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Target, Star, TrophyIcon } from 'lucide-react';

const LearningAdventures = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-r from-blue-100 to-purple-200"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Language Mastery Programs
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow">
            Unlock Communication Skills Through Engaging Workshops!
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/90 p-6 rounded-3xl text-blue-900 shadow-xl flex flex-col items-center">
            <BookOpen className="w-16 h-16 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Spell Bee Mastery</h2>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-blue-500" />
                <span>Age Groups: 7-10 & 11-14</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span>Comprehensive Vocabulary Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrophyIcon className="w-6 h-6 text-green-500" />
                <span>National & International Competition Prep</span>
              </div>
            </div>
            <p className="text-lg mb-4 text-gray-700">
              Build exceptional spelling skills and confidence!
            </p>
          </div>
          
          <div className="bg-white/90 p-6 rounded-3xl text-purple-900 shadow-xl flex flex-col items-center">
            <Mic className="w-16 h-16 text-purple-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Public Speaking</h2>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-500" />
                <span>Age Groups: 10-14 & 15-18</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span>Confidence Building Techniques</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrophyIcon className="w-6 h-6 text-green-500" />
                <span>Debate & Presentation Skills</span>
              </div>
            </div>
            <p className="text-lg mb-4 text-gray-700">
              Transform into a powerful, articulate communicator!
            </p>
          </div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-yellow-500 transition-colors mt-12"
        >
          Explore Workshops Now!
        </motion.button>
      </div>
    </motion.section>
  );
};

export default LearningAdventures;