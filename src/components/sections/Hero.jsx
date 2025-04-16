import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { resumeData } from '../../data/resumeData';

const Hero = () => {
  const { name, title } = resumeData.personalInfo;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-300/10 to-primary-500/10 animate-gradient" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {name}
          </motion.h1>
          
          <div className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-8 h-8">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'Java & React Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
            >
              Download CV
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 