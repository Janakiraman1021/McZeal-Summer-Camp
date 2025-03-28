import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Monitor, 
  Rocket, 
  Globe, 
  Check, 
  Star 
} from 'lucide-react';

const FullStackCourse
: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const courseModules = [
    {
      title: 'Frontend Mastery',
      icon: <Code className="w-16 h-16 text-blue-500" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'bg-blue-50'
    },
    {
      title: 'Backend Engineering',
      icon: <Monitor className="w-16 h-16 text-green-500" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
      color: 'bg-green-50'
    },
    {
      title: 'Full Stack Integration',
      icon: <Rocket className="w-16 h-16 text-purple-500" />,
      skills: ['API Development', 'Authentication', 'State Management'],
      color: 'bg-purple-50'
    }
  ];

  const courseHighlights = [
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: 'Industry-Ready Curriculum',
      description: 'Learn cutting-edge technologies used by top tech companies'
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: 'Real-World Projects',
      description: 'Build comprehensive portfolio projects from scratch'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Vibrant Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Rocket className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-indigo-800">
              Code Accelerator
            </h1>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Course Introduction */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-extrabold text-indigo-900 leading-tight">
              Transform into a 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Zero to Professional in 16 Weeks. Comprehensive training with 
              hands-on projects, mentorship, and career support.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {courseHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md"
                >
                  {highlight.icon}
                  <div>
                    <h3 className="font-bold text-indigo-800">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Modules */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-indigo-800">
              Course Modules
            </h3>

            {/* Module Selector */}
            <div className="flex justify-between mb-6">
              {courseModules.map((module, index) => (
                <button
                  key={module.title}
                  onClick={() => setActiveModule(index)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${activeModule === index 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {module.title}
                </button>
              ))}
            </div>

            {/* Active Module Details */}
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`
                ${courseModules[activeModule].color} 
                p-6 rounded-xl text-center
              `}
            >
              <div className="flex justify-center mb-4">
                {courseModules[activeModule].icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-indigo-800">
                {courseModules[activeModule].title}
              </h4>
              <div className="flex justify-center space-x-3">
                {courseModules[activeModule].skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-white px-3 py-1 rounded-full text-sm text-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-indigo-900 mb-4">
            Invest in Your Future
          </h3>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Secure Your Spot Now
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Code Accelerator. Transforming Developers Worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default FullStackCourse
;