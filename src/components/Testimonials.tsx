import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Parent",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    content: "My daughter absolutely loved the science experiments! The hands-on approach really helped her understand complex concepts.",
    rating: 5,
    color: "bg-primary-light"
  },
  {
    name: "Michael Chen",
    role: "Young Scientist, Age 15",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The Python programming course was amazing! I created my first game and learned so much about coding.",
    rating: 5,
    color: "bg-secondary-light"
  },
  {
    name: "Emily Rodriguez",
    role: "Proud Parent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The teachers are fantastic and really know how to keep kids engaged. Best summer program we've tried!",
    rating: 5,
    color: "bg-accent-purple"
  },
  {
    name: "David Thompson",
    role: "Future Engineer, Age 12",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Building robots in the camp was so much fun! I can't wait to join again next year!",
    rating: 5,
    color: "bg-primary-dark"
  },
  {
    name: "Sophia Martinez",
    role: "Excited Learner, Age 10",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The astronomy workshop was amazing! I got to see the stars through a real telescope!",
    rating: 5,
    color: "bg-secondary-dark"
  },
  {
    name: "James Wilson",
    role: "Supportive Parent",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    content: "My son learned so much and made new friends. Highly recommend this program!",
    rating: 5,
    color: "bg-accent-green"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-primary/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Happy Adventurers
        </h2>
        <p className="text-xl text-center text-primary-dark mb-12 max-w-3xl mx-auto">
          Hear what our young scientists and their parents say!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${testimonial.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden`}
            >
              <Quote className="absolute -right-4 -top-4 w-24 h-24 opacity-10 transform rotate-12" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover relative z-10"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="opacity-90">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-yellow fill-current" />
                ))}
              </div>

              <p className="italic opacity-90">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
