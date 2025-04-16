import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-dark-card/80' : 'bg-white/80'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-shrink-0 font-bold text-xl"
          >
            AM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:text-primary-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <DarkModeSwitch
                checked={darkMode}
                onChange={setDarkMode}
                size={20}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <DarkModeSwitch
              checked={darkMode}
              onChange={setDarkMode}
              size={20}
              className="mr-4"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary-500 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:text-primary-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 