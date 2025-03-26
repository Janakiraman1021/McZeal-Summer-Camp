
import { motion } from 'framer-motion';
import { Code, FlaskRound as Flask, Clock, Star, FileDown, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const courses = [
  {
    title: "15-Day Fun Science Course (Age 5-7)",
    duration: "15 Days (15 Hours)",
    schedule: "1 Hour Daily (2 segments of 30 mins each)",
    focus: "Hands-on science experiments and understanding real-world science applications",
    gradient: "bg-green-500",
    days: [
      {
        day: 1,
        science: "Baking Soda Volcano & Lava Lamp Experiment",
        coding: null as string | null,
        details: "Create exciting chemical reactions with a volcano and make your own lava lamp!"
      },
      {
        day: 2,
        science: "Magic Pepper & Balloon Rocket",
        coding: null,
        details: "Learn about surface tension and propulsion through fun experiments."
      },
      {
        day: 3,
        science: "DIY Paper Bridge & Color-Changing Milk",
        coding: null,
        details: "Explore engineering principles and chemical reactions with everyday materials."
      },
      {
        day: 4,
        science: "DIY Sundial & Water Cycle in a Bag",
        coding: null,
        details: "Understand Earth's rotation and the water cycle through hands-on activities."
      }
    ]
  },
  {
    title: "Fun Science & Coding (Age 8-12)",
    duration: "15 Days (30 Hours)",
    schedule: "2 Hours Daily (4 segments of 30 mins each)",
    focus: "Hands-on science experiments and beginner coding with Scratch and Python",
    gradient: "bg-blue-500",
    days: [
      {
        day: 1,
        science: "Baking Soda Volcano (Chemical reactions)",
        coding: "Introduction to Computers and Scratch Coding" as string | null,
        details: "Learn about chemical reactions through an exciting volcano experiment, followed by your first steps into the world of coding with Scratch."
      },
      {
        day: 2,
        science: "Magic Pepper Experiment (Surface tension)",
        coding: "Scratch - Creating Simple Games" as string | null,
        details: "Discover surface tension with the magical pepper experiment, then create your first simple game using Scratch."
      },
      {
        day: 3,
        science: "DIY Paper Bridge (Engineering basics)",
        coding: "Intro to Python - Writing First Code" as string | null,
        details: "Build and test weight-bearing paper bridges, then start your Python journey with basic programming concepts."
      },
      {
        day: 4,
        science: "DIY Sundial (Understanding Shadows)",
        coding: "Scratch - Making Interactive Stories",
        details: "Create your own sundial to learn about Earth's rotation, followed by crafting interactive stories in Scratch."
      }
    ]
  },
  {
    title: "Fun Science & Coding (Age 13-16)",
    duration: "15 Days (30 Hours)",
    schedule: "2 Hours Daily (4 segments of 30 mins each)",
    focus: "Intermediate science experiments and Python programming",
    gradient: "bg-orange-500",
    days: [
      {
        day: 1,
        science: "Electric Circuits & LED Experiment",
        coding: "Python Basics" as string | null,
        details: "Build simple circuits with LEDs while learning fundamental Python programming concepts."
      },
      {
        day: 2,
        science: "Acid-Base Indicator Test",
        coding: "Python Conditionals" as string | null,
        details: "Create natural pH indicators and learn decision-making in Python with if-else statements."
      },
      {
        day: 3,
        science: "Hydraulic Arm Experiment",
        coding: "Python Loops" as string | null,
        details: "Construct a working hydraulic arm while mastering loop structures in Python."
      },
      {
        day: 4,
        science: "Egg Drop Challenge",
        coding: "Python Lists" as string | null,
        details: "Design protective containers for eggs while learning about Python lists and data structures."
      }
    ]
  },
  {
    title: "Fun Science & Coding (Age 17-21)",
    duration: "15 Days (30 Hours)",
    schedule: "2 Hours Daily (4 segments of 30 mins each)",
    focus: "Advanced science concepts and real-world Python applications",
    gradient: "bg-purple-500",
    days: [
      {
        day: 1,
        science: "Extracting DNA from Strawberries",
        coding: "Python Introduction" as string | null,
        details: "Extract and observe DNA while setting up your Python development environment."
      },
      {
        day: 2,
        science: "Electromagnetism Experiment",
        coding: "File Handling in Python" as string | null,
        details: "Create electromagnets while learning to work with files and data in Python."
      },
      {
        day: 3,
        science: "Building a Simple Motor",
        coding: "Advanced Python Functions" as string | null,
        details: "Construct an electric motor while mastering function creation and implementation in Python."
      },
      {
        day: 4,
        science: "Earthquake Modeling",
        coding: "Data Visualization in Python" as string | null,
        details: "Model seismic waves while learning to create visual representations of data using Python libraries."
      }
    ]
  }
];

const CourseHighlight = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-rainbow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Course Details
        </h2>
        <p className="text-xl text-center text-white/90 mb-12">
          Explore our magical curriculum designed for different age groups!
        </p>

        <div className="space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${course.gradient} rounded-2xl shadow-lg overflow-hidden`}
            >
              <div
                className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => setSelectedCourse(selectedCourse === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform ${
                      selectedCourse === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div className="mt-4 grid md:grid-cols-3 gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-white" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-white" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {course.coding ? (
                      <Code className="w-5 h-5 text-white" />
                    ) : (
                      <Flask className="w-5 h-5 text-white" />
                    )}
                    <span>{course.focus}</span>
                  </div>
                </div>
              </div>

              {selectedCourse === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/20"
                >
                  <div className="p-6 space-y-6">
                    {course.days.map((day) => (
                      <div key={day.day} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <h4 className="text-xl font-bold text-white mb-2">Day {day.day}</h4>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2 text-white/90">
                            <Flask className="w-5 h-5 text-white" />
                            <span className="font-semibold">Science:</span> {day.science}
                          </p>
                          {day.coding && (
                            <p className="flex items-center gap-2 text-white/90">
                              <Code className="w-5 h-5 text-white" />
                              <span className="font-semibold">Coding:</span> {day.coding}
                            </p>
                          )}
                          <p className="text-white/80 mt-2">{day.details}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-colors font-bold shadow-lg"
                      >
                        <FileDown className="w-5 h-5" />
                        Download Full 15-Day Syllabus
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CourseHighlight;
