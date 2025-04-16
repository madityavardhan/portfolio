import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-900" />
            
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full mt-6" />
                
                {/* Content */}
                <div className={`md:pr-12 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{job.title}</h3>
                  <div className="text-lg font-semibold mb-2">{job.company}</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.duration} | {job.location}
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {job.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-base">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty column for layout */}
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 