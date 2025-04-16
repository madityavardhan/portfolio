import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-white dark:bg-dark-card rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-primary-200 dark:border-primary-800"
          >
            <span className="text-gray-800 dark:text-gray-200">{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SkillCategory title="Programming Languages" skills={skills.languages} />
              <SkillCategory title="Frameworks" skills={skills.frameworks} />
            </div>
            <div>
              <SkillCategory title="Developer Tools" skills={skills.developerTools} />
              <SkillCategory title="Technologies" skills={skills.technologies} />
              <SkillCategory title="Core Concepts" skills={skills.concepts} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 