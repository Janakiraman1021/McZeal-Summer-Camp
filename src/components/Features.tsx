import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Trophy, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Magic Teachers",
    description: "Learn from wizards of science and coding!",
    color: "bg-primary-light"
  },
  {
    icon: Users,
    title: "Friendly Squad",
    description: "Join a small team of fellow adventurers!",
    color: "bg-secondary-light"
  },
  {
    icon: BookOpen,
    title: "Fun Learning",
    description: "Follow an exciting path of discovery!",
    color: "bg-accent-purple"
  },
  {
    icon: Trophy,
    title: "Cool Projects",
    description: "Create amazing things with science and code!",
    color: "bg-blue-500"
  },
  {
    icon: Clock,
    title: "Perfect Timing",
    description: "Choose when to start your adventure!",
    color: "bg-accent-orange"
  },
  {
    icon: Star,
    title: "Star Progress",
    description: "Track your journey to becoming a genius!",
    color: "bg-purple-500"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-secondary/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Why Join Our Adventure? 
        </h2>
        <p className="text-xl text-center text-primary-dark mb-12 max-w-3xl mx-auto">
          Discover the magic of learning with us!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`${feature.color} rounded-2xl p-8 shadow-lg text-white backdrop-blur-sm`}
            >
              <div className="bg-white/20 p-4 rounded-xl inline-block mb-6">
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
