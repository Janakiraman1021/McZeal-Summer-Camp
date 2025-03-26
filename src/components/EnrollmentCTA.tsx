import React from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, Mail, MapPin, Rocket } from 'lucide-react';

const EnrollmentCTA = () => {
  return (
    <section id="enroll" className="py-20 px-4 bg-gradient-rainbow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              Begin Your Epic Journey Today!
            </h2>
            <p className="text-xl text-white/90">
              Join our magical summer camp and discover the exciting world of science and coding. Limited spots available!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white/20 p-2 rounded-lg">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <span>contact@mczealacademy.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white/20 p-2 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>123 Learning Street, Education City, EC 12345</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-white">Student's Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="Enter student's full name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Parent's Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="Enter parent's email address"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="Enter contact number"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Choose Your Adventure</label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-accent-yellow focus:border-transparent">
                  <option value="" className="bg-primary text-white">Select your path</option>
                  <option value="5-7" className="bg-primary text-white">Little Explorers (Age 5-7)</option>
                  <option value="8-12" className="bg-primary text-white">Science Wizards (Age 8-12)</option>
                  <option value="13-16" className="bg-primary text-white">Tech Champions (Age 13-16)</option>
                  <option value="17-21" className="bg-primary text-white">Innovation Masters (Age 17-21)</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-accent-yellow text-primary px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-yellow/90 transition-colors font-bold"
              >
                <Rocket className="w-5 h-5" />
                Start Your Adventure
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnrollmentCTA;