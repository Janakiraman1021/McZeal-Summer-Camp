import { motion } from 'framer-motion';
import { Rocket, Stars, Sparkles, Zap, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Science & Code',
    icon: Sparkles,
    color: 'bg-secondary-light hover:bg-secondary text-white',
    description: 'Exciting 12-day adventure with coding spells, math puzzles, and hands-on science experiments!',
    route: '/coding-categories'
  },
  {
    title: 'Math',
    icon: Rocket,
    color: 'bg-accent-purple hover:bg-accent-purple/90 text-white',
    description: 'Epic 12-day quest mastering algebra, physics simulations, and real-world coding projects!',
    route: '/math-categories'
  },
  {
    title: 'English Fluency',
    icon: Zap,
    color: 'bg-secondary-light hover:bg-secondary text-white',
    description: 'Ultimate 12-day challenge solving real-world problems with AI, advanced coding, and applied mathematics!',
    route: '/english'
  },
  {
    title: 'Web Development',
    icon: Sparkles,
    color: 'bg-secondary-light hover:bg-secondary text-white',
    description: 'Exciting 12-day adventure with coding spells, math puzzles, and hands-on science experiments!',
    route: '/full-stack-course'
  },
  {
    title: 'Foreign Language',
    icon: Globe2,
    color: 'bg-secondary-light hover:bg-secondary text-white',
    description: 'Embark on a 12-day linguistic journey, mastering new languages through fun games, storytelling, and immersive cultural experiences!',
    route: '/language'
  }
];

const AgeCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-light/10" id="courses">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Choose Your Adventure Path!
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Pick the perfect journey that matches your age and interests!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              onClick={() => navigate(category.route)}
              className={`${category.color} rounded-3xl p-8 cursor-pointer transition-all shadow-lg transform hover:-translate-y-2`}
            >
              <div className="bg-white/20 p-4 rounded-2xl inline-block mb-6">
                <category.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="opacity-90">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AgeCategories;
