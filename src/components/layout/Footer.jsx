import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-dark-card py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href={`https://${resumeData.personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              Email
            </a>
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 