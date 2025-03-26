import React from 'react';
import { motion } from 'framer-motion';
import CourseHighlight from '../components/CourseHighlight';
import AgeCategories from '../components/AgeCategories';

const CoursesPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <AgeCategories />
      <CourseHighlight />
    </motion.main>
  );
};

export default CoursesPage;