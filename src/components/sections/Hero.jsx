import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParallaxTilt from 'react-parallax-tilt';
import { resumeData } from '../../data/resumeData';
import adityaImg from '../../assets/aditya.jpg';

const Hero = () => {
  const { name, title } = resumeData.personalInfo;
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-dark-bg to-dark-card">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
              <h1 className="relative text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                {name}
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-8 h-8">
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
                className="inline-block"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="relative group bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-full overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-full overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Card */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <ParallaxTilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#00f3ff"
              glarePosition="all"
              glareBorderRadius="20px"
              className="w-full h-[400px]"
            >
              <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl p-1 backdrop-blur-sm">
                <div className="w-full h-full bg-dark-bg/80 rounded-2xl p-8 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 animate-gradient-xy" />
                  <div className="relative z-10 flex flex-col items-center">
                    <img
                      src={adityaImg}
                      alt="Aditya Mandapati"
                      className="w-32 h-32 rounded-full border-4 border-neon-blue shadow-lg object-cover mb-6 bg-white/10"
                      style={{ objectPosition: 'center top' }}
                    />
                    <h3 className="text-2xl font-bold text-neon-blue mb-2">Welcome</h3>
                    <p className="text-gray-400 text-center">
                      Explore my portfolio to discover my journey in software development
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxTilt>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center relative">
            <div className="absolute inset-0 bg-neon-blue/10 rounded-full animate-pulse-slow" />
            <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-bounce-slow relative z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 