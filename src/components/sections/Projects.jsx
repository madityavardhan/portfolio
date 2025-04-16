import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../../data/resumeData';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden cursor-pointer
        transition-all duration-300 hover:shadow-xl ${isExpanded ? 'md:col-span-2' : ''}`}
    >
      <motion.div layout className="p-6">
        <motion.h3 layout="position" className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">
          {project.title}
        </motion.h3>
        
        <motion.div layout="position" className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.split(', ').map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.p
            layout="position"
            className={`text-gray-600 dark:text-gray-300 ${isExpanded ? '' : 'line-clamp-2'}`}
          >
            {project.description}
          </motion.p>
        </AnimatePresence>

        <motion.div
          layout="position"
          className="mt-4 text-primary-500 dark:text-primary-400 text-sm"
        >
          {isExpanded ? 'Click to collapse' : 'Click to expand'}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 