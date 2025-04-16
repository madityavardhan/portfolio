import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-tr from-primary-500 to-primary-300 rounded-lg overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-8xl">
                  AM
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                I am a passionate Software Engineer with expertise in full-stack development, currently working at HashedIn by Deloitte. My focus is on building secure, scalable, and efficient applications using modern technologies.
              </p>
              <p className="text-lg mb-6">
                With a strong foundation in Java Spring Boot, React, and cloud technologies, I specialize in creating robust backend services and intuitive user interfaces. I'm particularly interested in optimizing application performance and implementing secure authentication systems.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/aditya-mandapati-791774219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:madityavardhan03@gmail.com"
                  className="text-primary-500 hover:text-primary-600 transition-colors"
                >
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 