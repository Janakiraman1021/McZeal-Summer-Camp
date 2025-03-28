import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Book, 
  Mic, 
  Target, 
  Star, 
  Headphones 
} from 'lucide-react';

const LanguageLearningPage: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState(0);

  const languageCourses = [
    {
      name: 'German',
      flag: '🇩🇪',
      title: 'Deutsch Meisterschaft',
      description: 'Comprehensive German language mastery from beginner to advanced',
      levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
      skills: ['Conversation', 'Grammar', 'Writing', 'Listening'],
      color: 'bg-red-50',
      textColor: 'text-red-800',
      bgGradient: 'from-red-100 to-red-200'
    },
    {
      name: 'French',
      flag: '🇫🇷',
      title: 'Maîtrise Française',
      description: 'Elegant French language learning with native speaker techniques',
      levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
      skills: ['Pronunciation', 'Culture', 'Vocabulary', 'Comprehension'],
      color: 'bg-blue-50',
      textColor: 'text-blue-800',
      bgGradient: 'from-blue-100 to-blue-200'
    },
    {
      name: 'Japanese',
      flag: '🇯🇵',
      title: '日本語マスター',
      description: 'Immersive Japanese language journey with cultural insights',
      levels: ['N5', 'N4', 'N3', 'N2', 'N1'],
      skills: ['Kanji', 'Speaking', 'Listening', 'Writing'],
      color: 'bg-pink-50',
      textColor: 'text-pink-800',
      bgGradient: 'from-pink-100 to-pink-200'
    }
  ];

  const courseHighlights = [
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: 'Global Communication',
      description: 'Master language for professional and personal growth'
    },
    {
      icon: <Headphones className="w-12 h-12 text-green-600" />,
      title: 'Native Speaker Coaches',
      description: 'Learn from experienced international language experts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Globe className="w-10 h-10 text-purple-600" />
            <h1 className="text-3xl font-bold text-purple-800">
              Language Accelerator
            </h1>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          >
            Start Learning
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
            <h2 className="text-5xl font-extrabold text-purple-900 leading-tight">
              Master a 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                New Language
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Transform your communication skills with our intensive language programs. 
              From beginner to fluent in just 12 weeks.
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
                    <h3 className="font-bold text-purple-800">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Language Selector */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-purple-800">
              Choose Your Language
            </h3>

            {/* Language Selector */}
            <div className="flex justify-between mb-6">
              {languageCourses.map((course, index) => (
                <button
                  key={course.name}
                  onClick={() => setActiveLanguage(index)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2
                    ${activeLanguage === index 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  <span>{course.flag}</span>
                  <span>{course.name}</span>
                </button>
              ))}
            </div>

            {/* Active Language Details */}
            <motion.div
              key={activeLanguage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`
                ${languageCourses[activeLanguage].color} 
                p-6 rounded-xl text-center
                bg-gradient-to-br ${languageCourses[activeLanguage].bgGradient}
              `}
            >
              <div className="text-6xl mb-4 text-center">
                {languageCourses[activeLanguage].flag}
              </div>
              <h4 className={`text-xl font-bold mb-3 ${languageCourses[activeLanguage].textColor}`}>
                {languageCourses[activeLanguage].title}
              </h4>
              <p className="text-gray-700 mb-4">
                {languageCourses[activeLanguage].description}
              </p>
              <div className="flex justify-center space-x-3 mb-4">
                {languageCourses[activeLanguage].levels.map((level) => (
                  <span 
                    key={level}
                    className="bg-white px-3 py-1 rounded-full text-sm text-purple-700"
                  >
                    {level}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-3">
                {languageCourses[activeLanguage].skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-white/50 px-3 py-1 rounded-full text-sm text-gray-800"
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
          <h3 className="text-3xl font-bold text-purple-900 mb-4">
            Invest in Your Language Journey
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Enroll in Language Program
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Language Accelerator. Breaking Language Barriers Worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default LanguageLearningPage;