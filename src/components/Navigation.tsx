import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, BookOpen, UserPlus, Phone, Sparkles, Stars } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      href: "/", 
      icon: Home, 
      label: "Home",
      color: "from-primary-light to-primary",
      hoverColor: "from-primary to-primary-dark"
    },
    { 
      href: "/#courses", 
      icon: BookOpen, 
      label: "Adventures",
      color: "from-accent-blue to-secondary",
      hoverColor: "from-secondary to-secondary-dark"
    },
    { 
      href: "/#features", 
      icon: Phone, 
      label: "Why Us",
      color: "from-accent-orange to-accent-pink",
      hoverColor: "from-accent-pink to-primary"
    },
    { 
      href: "/#enroll", 
      icon: UserPlus, 
      label: "Join Now",
      color: "from-accent-purple to-primary",
      hoverColor: "from-primary to-accent-pink"
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/' && !href.startsWith('#')) {
      return;
    }
    
    e.preventDefault();
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gradient-rainbow shadow-lg backdrop-blur-md' : 'bg-gradient-rainbow/80 backdrop-blur-sm'
      }`}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-2 left-1/4 text-white/20"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Stars className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 text-white/20"
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white"
          >
            <Link to="/" className="flex items-center gap-2">
              <motion.span
                className="bg-white/20 p-2 rounded-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <BookOpen className="w-6 h-6" />
              </motion.span>
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-accent-orange via-accent-blue to-accent-pink bg-clip-text text-transparent bg-[length:200%]"
              >
                McZeal Academy
              </motion.span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map(({ href, icon: Icon, label, color, hoverColor }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all bg-gradient-to-r ${color} hover:bg-gradient-to-r hover:${hoverColor} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/20 p-1 rounded-full"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/20"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </motion.div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-rainbow rounded-lg shadow-xl mt-2 p-4"
          >
            {navItems.map(({ href, icon: Icon, label, color, hoverColor }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={href}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all bg-gradient-to-r ${color} hover:bg-gradient-to-r hover:${hoverColor} text-white shadow-md hover:shadow-lg mb-2 last:mb-0`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/20 p-1 rounded-full"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;