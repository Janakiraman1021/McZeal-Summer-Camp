import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const scheduleInfo = [
  {
    time: "9:00 AM - 11:00 AM",
    ageGroup: "Age 8-12",
    activities: ["Science Experiments", "Scratch Coding"]
  },
  {
    time: "11:30 AM - 1:30 PM",
    ageGroup: "Age 13-16",
    activities: ["Advanced Experiments", "Python Programming"]
  },
  {
    time: "2:00 PM - 4:00 PM",
    ageGroup: "Age 17-21",
    activities: ["Complex Experiments", "Advanced Python"]
  },
  {
    time: "4:30 PM - 5:30 PM",
    ageGroup: "Age 5-7",
    activities: ["Fun Science Activities"]
  }
];

const SchedulePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center text-blue-600 mb-12"
        >
          Daily Schedule
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          {scheduleInfo.map((schedule, index) => (
            <motion.div
              key={schedule.time}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
                <h2 className="text-2xl font-bold text-blue-800">{schedule.time}</h2>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-lg text-blue-600">{schedule.ageGroup}</span>
              </div>

              <div className="space-y-2">
                {schedule.activities.map((activity, idx) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default SchedulePage;