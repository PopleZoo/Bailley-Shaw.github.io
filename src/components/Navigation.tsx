import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            Bailley<span className="text-purple-400">Shaw</span>
          </motion.button>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                onClick={item === 'Home' ? scrollToTop : undefined}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900 border-b border-gray-800"
        >
          <nav className="container mx-auto px-4 py-4">
            {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (item === 'Home') {
                    e.preventDefault();
                    scrollToTop();
                  }
                  setIsOpen(false);
                }}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}