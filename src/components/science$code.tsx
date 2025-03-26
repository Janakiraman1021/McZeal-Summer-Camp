import React from "react";
import { motion } from "framer-motion";

interface Activity {
  day: number;
  time: string;
  activity: string;
  topic: string;
  reference: string;
}

const schedule: Activity[] = [
  { day: 1, time: "30 mins", activity: "Fun Science", topic: "Baking Soda Volcano – Chemical reactions", reference: "SciShow Kids" },
  { day: 1, time: "30 mins", activity: "Coding", topic: "Introduction to Computers & Scratch Coding", reference: "Code.org" },
  { day: 1, time: "30 mins", activity: "Fun Science", topic: "Lava Lamp Experiment – Liquid density", reference: "Steve Spangler Science" },
  { day: 1, time: "30 mins", activity: "Coding", topic: "Basic Scratch Animations", reference: "Scratch" },
  { day: 2, time: "30 mins", activity: "Fun Science", topic: "Magic Pepper Experiment – Surface tension", reference: "Science Sparks" },
  { day: 2, time: "30 mins", activity: "Coding", topic: "Scratch – Creating Simple Games", reference: "Code.org" },
  { day: 2, time: "30 mins", activity: "Fun Science", topic: "Balloon Rocket Experiment – Newton’s Law", reference: "NASA STEM" },
  { day: 2, time: "30 mins", activity: "Coding", topic: "Loops & Conditions in Scratch", reference: "Scratch" },
  // Add remaining activities...
];

const ScheduleTable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto text-center p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8 relative"
      >
        <h1 className="text-2xl font-bold">STEM Summer Camp Schedule</h1>
      </motion.div>
      <div className="overflow-x-auto">
        <motion.table 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="min-w-full border-collapse border border-gray-300"
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Activity</th>
              <th className="border p-2">Topic</th>
              <th className="border p-2">Reference Material</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <motion.tr 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="border"
              >
                <td className="border p-2">{item.day}</td>
                <td className="border p-2">{item.time}</td>
                <td className="border p-2">{item.activity}</td>
                <td className="border p-2">{item.topic}</td>
                <td className="border p-2">{item.reference}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default ScheduleTable;
