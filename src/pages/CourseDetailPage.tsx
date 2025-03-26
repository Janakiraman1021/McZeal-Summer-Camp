import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Stars, Sparkles, Rocket, Zap, Code, FlaskRound as Flask, Clock, Trophy } from 'lucide-react';

const courseData = {
  '5-7': {
    title: 'Little Explorers',
    icon: Stars,
    color: 'bg-primary-light',
    description: 'An exciting 15-day journey through the wonders of science!',
    details: [
      {
        day: 1,
        title: "Magic Potions Day",
        science: "Colorful Volcano & Rainbow Lava Lamp",
        details: "Create amazing chemical reactions that look like magic!"
      },
      {
        day: 2,
        title: "Super Powers Day",
        science: "Flying Pepper & Rocket Launch",
        details: "Discover the incredible powers of science!"
      },
      {
        day: 3,
        title: "Builder's Day",
        science: "Mighty Bridge & Color Magic",
        details: "Build amazing structures and create colorful reactions!"
      },
      {
        day: 4,
        title: "Nature Explorer Day",
        science: "Sun Clock & Water Magic",
        details: "Learn about Earth's amazing features through fun experiments!"
      }
    ]
  },
  '8-12': {
    title: 'Science Wizards',
    icon: Sparkles,
    color: 'bg-secondary-light',
    description: 'A magical 15-day adventure combining science experiments with coding spells!',
    details: [
      {
        day: 1,
        title: "Potion Master",
        science: "Erupting Volcano Lab",
        coding: "First Steps in Code Magic",
        details: "Mix amazing potions and write your first magical code!"
      },
      {
        day: 2,
        title: "Force Master",
        science: "Pepper Levitation",
        coding: "Game Creation Spells",
        details: "Control forces with science and create fun games!"
      },
      {
        day: 3,
        title: "Engineering Wizard",
        science: "Bridge Building Challenge",
        coding: "Python Magic Basics",
        details: "Build strong structures and learn coding powers!"
      },
      {
        day: 4,
        title: "Time Wizard",
        science: "Solar Time Tracker",
        coding: "Story Creation Magic",
        details: "Track the sun's journey and code amazing stories!"
      }
    ]
  },
  '13-16': {
    title: 'Tech Champions',
    icon: Rocket,
    color: 'bg-accent-purple',
    description: 'An epic 15-day quest combining advanced science with Python mastery!',
    details: [
      {
        day: 1,
        title: "Circuit Master",
        science: "LED Light Show",
        coding: "Python Power Basics",
        details: "Create amazing light displays with circuits and code!"
      },
      {
        day: 2,
        title: "Chemistry Champion",
        science: "pH Rainbow Test",
        coding: "Decision Making Magic",
        details: "Mix colorful indicators and code smart decisions!"
      },
      {
        day: 3,
        title: "Robot Engineer",
        science: "Hydraulic Arm Build",
        coding: "Loop Power Control",
        details: "Build moving machines and control them with code!"
      },
      {
        day: 4,
        title: "Physics Pro",
        science: "Egg Protection Challenge",
        coding: "Data Structure Quest",
        details: "Master forces and organize data like a pro!"
      }
    ]
  },
  '17-21': {
    title: 'Innovation Masters',
    icon: Zap,
    color: 'bg-accent-green',
    description: 'An advanced 15-day challenge exploring complex science and real-world coding!',
    details: [
      {
        day: 1,
        title: "Bio-Tech Pioneer",
        science: "DNA Extraction Lab",
        coding: "Python Environment Setup",
        details: "Unlock the secrets of life and set up your coding lab!"
      },
      {
        day: 2,
        title: "Energy Master",
        science: "Electromagnetic Force Field",
        coding: "Data Management Systems",
        details: "Control electromagnetic forces and manage complex data!"
      },
      {
        day: 3,
        title: "Engineering Expert",
        science: "Electric Motor Creation",
        coding: "Advanced Function Mastery",
        details: "Build powerful motors and write efficient code!"
      },
      {
        day: 4,
        title: "Earth Scientist",
        science: "Seismic Wave Simulator",
        coding: "Data Visualization Art",
        details: "Model Earth's forces and create beautiful data displays!"
      }
    ]
  }
};

const CourseDetailPage = () => {
  const { ageGroup } = useParams();
  const course = courseData[ageGroup as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-rainbow">
        <h1 className="text-2xl text-white">Adventure not found!</h1>
      </div>
    );
  }

  const IconComponent = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 bg-gradient-rainbow"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <IconComponent className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {course.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {course.description}
          </p>
        </motion.div>

        <div className="grid gap-8">
          {course.details.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${course.color} rounded-2xl p-8 shadow-lg backdrop-blur-sm text-white`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Day {day.day}</h2>
                  <p className="text-white/90">{day.title}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <Flask className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Science Adventure</h3>
                    <p className="text-white/90">{day.science}</p>
                  </div>
                </div>

                {day.coding && (
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg mt-1">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Coding Quest</h3>
                      <p className="text-white/90">{day.coding}</p>
                    </div>
                  </div>
                )}

                <div className="bg-white/10 rounded-xl p-6 mt-4">
                  <p className="text-white/90">{day.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-yellow text-primary px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-accent-yellow/90 transition-colors inline-flex items-center gap-2"
          >
            <Rocket className="w-6 h-6" />
            Get Full Adventure Guide
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseDetailPage;