import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AgeCategories from '../components/AgeCategories';
import Features from '../components/Features';
import CourseHighlight from '../components/CourseHighlight';
import Testimonials from '../components/Testimonials';
import EnrollmentCTA from '../components/EnrollmentCTA';
import TrainersPage from '../components/trainers';

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AgeCategories />
      <Features />
      <TrainersPage/>
      <Testimonials />
      <EnrollmentCTA />
    </motion.main>
  );
};

export default HomePage;