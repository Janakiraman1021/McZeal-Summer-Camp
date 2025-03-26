import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Calendar } from 'lucide-react';

const EnrollPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
            Enroll Now
          </h1>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-gray-700">
                <User className="w-5 h-5 text-blue-500" />
                <span>Student Name</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter student's full name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter parent's email address"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter contact number"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>Select Course</span>
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Choose a course</option>
                <option value="5-7">Fun Science Course (Age 5-7)</option>
                <option value="8-12">Fun Science & Coding (Age 8-12)</option>
                <option value="13-16">Fun Science & Coding (Age 13-16)</option>
                <option value="17-21">Fun Science & Coding (Age 17-21)</option>
              </select>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
            >
              <Send className="w-5 h-5" />
              Submit Enrollment
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default EnrollPage;