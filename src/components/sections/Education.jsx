import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';

const Education = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  {education.university}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {education.degree}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                  {education.duration}
                </span>
              </div>
            </div>
            
            <div className="text-gray-600 dark:text-gray-400">
              <p>{education.location}</p>
            </div>

            {/* Achievements Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
                Achievements & Certifications
              </h4>
              <ul className="space-y-3">
                {resumeData.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 